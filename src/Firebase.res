open ReScriptStruct

type unsubscribe = unit => unit

module FirebaseApp = {
  @gentype.import("firebase/app") @genType.as("FirebaseApp")
  type t

  type options = {
    apiKey?: string,
    authDomain?: string,
    databaseURL?: string,
    projectId?: string,
    storageBucket?: string,
    messagingSenderId?: string,
    appId?: string,
    measurementId?: string,
  }

  @genType.import("firebase/app")
  external make: options => t = "initializeApp"

  @gentype.import("firebase/app")
  external delete: t => promise<unit> = "deleteApp"
}

module Analytics = {
  @gentype.import("firebase/analytics") @genType.as("Analytics")
  type t

  @gentype.import("firebase/analytics")
  external _make: Js.undefined<FirebaseApp.t> => t = "getAnalytics"

  @gentype.import("firebase/analytics")
  external _setAnalyticsCollectionEnabled: (t, bool) => unit = "setAnalyticsCollectionEnabled"

  let make = (app, ~enabled) => {
    let analytics = _make(Undefined.make(app))
    _setAnalyticsCollectionEnabled(analytics, enabled)
    analytics
  }

  let setEnabled = (t, ~isEnabled) => {
    _setAnalyticsCollectionEnabled(t, isEnabled)
    t
  }
}

module Firestore = {
  @gentype.import("firebase/firestore") @genType.as("Firestore")
  type t

  @gentype.import("firebase/firestore")
  external make: FirebaseApp.t => t = "getFirestore"

  @gentype.import("firebase/firestore") @genType.as("Query")
  type query

  @gentype.import("firebase/firestore") @genType.as("CollectionReference")
  type collectionReference

  @gentype.import("firebase/firestore") @genType.as("QueryFieldFilterConstraint")
  type queryFieldFilterConstraint

  type whereFilterOp = [
    | #"<"
    | #"<="
    | #"=="
    | #">"
    | #">="
    | #"!="
    | #"array-contains"
    | #"in"
    | #"array-contains-any"
    | #"not-in"
  ]

  type snapshotListenOptions = {includeMetadataChanges: option<bool>}

  type snapshotOptions = {serverTimestamps: option<[#estimate | #previous | #none]>}

  @genType.import("firebase/firestore") @genType.as("DocumentData")
  type documentData

  @genType.import("firebase/firestore") @genType.as("DocumentReference")
  type documentReference

  @genType.import("firebase/firestore") @genType.as("DocumentSnapshot")
  type documentSnapshot

  @gentype.import("firebase/firestore") @genType.as("Transaction")
  type transaction

  type transactionOptions = {maxAttempts: option<int>}

  @gentype.import("firebase/firestore") @genType.as("WriteBatch")
  type writeBatch

  @genType.import("firebase/firestore") @genType.as("QueryDocumentSnapshot")
  type queryDocumentSnapshot

  type documentChange = {
    type_: [#added | #modified | #removed],
    oldIndex: int,
    newIndex: int,
    doc: queryDocumentSnapshot,
  }

  @genType.import("firebase/firestore") @genType.as("QuerySnapshot")
  type querySnapshot

  type firestoreErrorCode = [
    | #cancelled
    | #unknown
    | #"invalid-argument"
    | #"deadline-exceeded"
    | #"not-found"
    | #"already-exists"
    | #"permission-denied"
    | #"resource-exhausted"
    | #"failed-precondition"
    | #aborted
    | #"out-of-range"
    | #unimplemented
    | #internal
    | #unavailable
    | #"data-loss"
    | #unauthenticated
  ]

  @gentype.import("firebase/firestore")
  external _connectFirestoreEmulator: (t, string, int) => unit = "connectFirestoreEmulator"

  let useEmulator = (firestore, ~host, ~port) => {
    _connectFirestoreEmulator(firestore, host, port)
    firestore
  }

  @gentype.import("firebase/firestore")
  external waitForPendingWrites: t => promise<unit> = "waitForPendingWrites"

  type firestoreError = {
    code: firestoreErrorCode,
    message: string,
    stack: option<string>,
    name: string,
  }

  module FirestorError = {
    type t = firestoreError

    let schema = S.object(o => {
      code: o->S.field(
        "code",
        S.union([
          S.literalVariant(String("unknown"), #unknown),
          S.literalVariant(String("invalid-argument"), #"invalid-argument"),
          S.literalVariant(String("deadline-exceeded"), #"deadline-exceeded"),
          S.literalVariant(String("not-found"), #"not-found"),
          S.literalVariant(String("already-exists"), #"already-exists"),
          S.literalVariant(String("permission-denied"), #"permission-denied"),
          S.literalVariant(String("resource-exhausted"), #"resource-exhausted"),
          S.literalVariant(String("failed-precondition"), #"failed-precondition"),
          S.literalVariant(String("aborted"), #aborted),
          S.literalVariant(String("out-of-range"), #"out-of-range"),
          S.literalVariant(String("unimplemented"), #unimplemented),
          S.literalVariant(String("internal"), #internal),
          S.literalVariant(String("unavailable"), #unavailable),
          S.literalVariant(String("data-loss"), #"data-loss"),
          S.literalVariant(String("unauthenticated"), #unauthenticated),
        ]),
      ),
      message: o->S.field("message", S.string()),
      stack: o->S.field("stack", S.string()->S.option),
      name: o->S.field("name", S.string()),
    })->S.Object.strip
  }

  type observer = {
    next: option<querySnapshot => unit>,
    error: option<firestoreError => unit>,
    complete: option<unit => unit>,
  }

  @gentype.import("firebase/firestore") @genType.as("doc")
  external doc1: (t, string) => documentReference = "doc1"

  @gentype.import("firebase/firestore") @genType.as("doc")
  external doc2: (t, string, string) => documentReference = "doc2"

  @gentype.import("firebase/firestore") @genType.as("doc")
  external docInCollection: collectionReference => documentReference = "docInCollection"

  @gentype.import("firebase/firestore") @genType.as("setDoc")
  external setDoc: (documentReference, 'data) => promise<unit> = "setDoc"

  @gentype.import("firebase/firestore") @genType.as("addDoc")
  external addDoc: (collectionReference, documentData) => promise<documentReference> = "addDoc"

  @gentype.import("firebase/firestore") @genType.as("updateDoc")
  external updateDoc: (documentReference, 'data) => promise<unit> = "updateDoc"

  @gentype.import("firebase/firestore") @genType.as("deleteDoc")
  external deleteDoc: documentReference => promise<unit> = "deleteDoc"

  @gentype.import("firebase/firestore")
  external runTransaction: (
    t,
    transaction => promise<'t>,
    Js.undefined<transactionOptions>,
  ) => promise<'t> = "runTransaction"

  @gentype.import("firebase/firestore")
  external writeBatch: t => writeBatch = "writeBatch"

  @genType.import("firebase/firestore") @genType.as("collection")
  external collection1: (t, string) => collectionReference = "collection1"

  @genType.import("firebase/firestore") @genType.as("collection")
  external collection2: (t, string, string) => collectionReference = "collection2"

  @genType.import("firebase/firestore") @genType.as("where")
  external where: (string, whereFilterOp, 'value) => queryFieldFilterConstraint = "where"

  @genType.import("firebase/firestore") @genType.as("query")
  external query0: collectionReference => query = "query0"

  @genType.import("firebase/firestore") @genType.as("query")
  external query1: (collectionReference, queryFieldFilterConstraint) => query = "query1"

  @genType.import("firebase/firestore") @genType.as("query")
  external query2: (
    collectionReference,
    queryFieldFilterConstraint,
    queryFieldFilterConstraint,
  ) => query = "query2"

  @genType.import("firebase/firestore") @genType.as("query")
  external query3: (
    collectionReference,
    queryFieldFilterConstraint,
    queryFieldFilterConstraint,
    queryFieldFilterConstraint,
  ) => query = "query3"

  @gentype.import("firebase/firestore")
  external _onSnapshot: (query, snapshotListenOptions, observer) => unsubscribe = "onSnapshot"

  @gentype.import("firebase/firestore") @genType.as("onSnapshot")
  external onDocSnapshot: (
    documentReference,
    documentSnapshot => unit,
    firestoreError => unit,
  ) => unsubscribe = "onDocSnapshot"

  module CollectionReference = {
    type t = collectionReference

    let make = (store, ~name) => collection1(store, name)
  }
  module DocumentReference = {
    let make = (store, ~collection, ~id) => doc2(store, collection, id)
    let onSnapshot = (doc, onNext, onErr) => doc->onDocSnapshot(onNext, onErr)
  }

  module Query = {
    type t = query

    let make = (collectionRef, filters) => {
      switch filters->Array.length {
      | 0 => query0(collectionRef)
      | 1 => query1(collectionRef, filters->Array.getUnsafe(0))
      | 2 => query2(collectionRef, filters->Array.getUnsafe(0), filters->Array.getUnsafe(1))
      | 3 =>
        query3(
          collectionRef,
          filters->Array.getUnsafe(0),
          filters->Array.getUnsafe(1),
          filters->Array.getUnsafe(2),
        )
      | _ => Js.Exn.raiseError("Unexpected number of filters")
      }
    }

    let onSnapshot = (query, next, error) =>
      _onSnapshot(
        query,
        {includeMetadataChanges: None},
        {next: Some(next), error: Some(error), complete: None},
      )
  }

  module DocumentChange = {
    type t = documentChange

    let oldIndex = i => i.oldIndex
    let newIndex = i => i.newIndex
    let doc = i => i.doc
    let type_ = i => i.type_
  }

  module QuerySnapshot = {
    type t = querySnapshot

    @get external size: t => int = "size"
    @get external empty: t => bool = "empty"
    @get external docs: t => array<queryDocumentSnapshot> = "docs"
    @send external forEach: (t, queryDocumentSnapshot => unit) => unit = "forEach"
    @send
    external docChanges: (t, option<snapshotListenOptions>) => array<documentChange> = "docChanges"
  }

  module DocumentSnapshot = {
    type t = documentSnapshot

    @get external exists: t => bool = "exists"
    @get external ref: t => documentReference = "ref"
    @get external id: t => string = "id"
    @send external _data: (t, option<snapshotOptions>) => option<documentData> = "data"

    let data = t => _data(t, None)
  }

  module QueryDocumentSnapshot = {
    type t = queryDocumentSnapshot

    @get external exists: t => bool = "exists"
    @get external ref: t => documentReference = "ref"
    @get external id: t => string = "id"
    @send external _data: (t, option<snapshotOptions>) => documentData = "data"

    let data = snap => _data(snap, None)
  }

  module Transaction = {
    type t = transaction

    @send external get: (t, documentReference) => promise<documentSnapshot> = "get"
    @send external set: (t, documentReference, 'data) => t = "set"
    @send external update: (t, documentReference, 'data) => t = "update"
    @send external delete: (t, documentReference) => t = "delete"
  }

  module WriteBatch = {
    type t = writeBatch

    @send external set: (t, documentReference, 'data) => t = "set"
    @send external update: (t, documentReference, 'data) => t = "update"
    @send external delete: (t, documentReference) => t = "delete"
    @send external commit: t => promise<unit> = "commit"
  }
}

module Auth = {
  @gentype.import("firebase/auth") @genType.as("Auth")
  type t

  type emulatorOptions = {disableWarnings: bool}

  @gentype.import("firebase/auth")
  external _getAuth: Js.undefined<FirebaseApp.t> => t = "getAuth"
  let getAuth = app => _getAuth(app->Undefined.make)

  @gentype.import("firebase/auth")
  external _connectAuthEmulator: (t, string, Js.undefined<emulatorOptions>) => unit =
    "connectAuthEmulator"

  let useEmulator = (auth, ~url, ~disableWarnings) => {
    _connectAuthEmulator(auth, url, {disableWarnings: disableWarnings}->Undefined.make)
    auth
  }

  module User = {
    @gentype.import("firebase/auth") @genType.as("User")
    type t

    @get external getDisplayName: t => Js.null<string> = "displayName"
    @get external getEmail: t => Js.null<string> = "email"
    @get external getEmailVerified: t => bool = "emailVerified"
    @get external getIsAnonymous: t => bool = "isAnonymous"
    @get external getPhotoUrl: t => Js.null<string> = "photoUrl"
    @get external getUid: t => string = "uid"
    @send external deleteUser: t => promise<unit> = "delete"
    @send external reloadUser: t => promise<unit> = "reload"
    @send external convertUserToJson: t => JSON.t = "toJSON"
  }

  module UserCredential = {
    type t = {
      user: User.t,
      providerId: Js.null<string>,
    }

    let user = i => i.user
  }

  @gentype.import("firebase/auth")
  external onAuthStateChanged: (t, Js.null<User.t> => unit) => unsubscribe = "onAuthStateChanged"

  @gentype.import("firebase/auth")
  external createUserWithEmailAndPassword: (t, string, string) => promise<UserCredential.t> =
    "createUserWithEmailAndPassword"

  @gentype.import("firebase/auth")
  external signInWithEmailAndPassword: (t, string, string) => promise<UserCredential.t> =
    "signInWithEmailAndPassword"

  @gentype.import("firebase/auth")
  external signInAnonymously: t => promise<UserCredential.t> = "signInAnonymously"
}
