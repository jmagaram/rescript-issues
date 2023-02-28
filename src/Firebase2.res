module FirebaseApp = {
  @gentype.import("firebase/app") @genType.as("FirebaseApp")
  type t

  type options = {
    projectId?: string,
    appId?: string,
  }

  @genType.import("firebase/app")
  external make: options => t = "initializeApp"
}

module Firestore = {
  @gentype.import("firebase/firestore") @genType.as("Firestore")
  type t

  @gentype.import("firebase/firestore")
  external make: FirebaseApp.t => t = "getFirestore"

  let customMake = app => {
    Js.Console.log("making it!")
    make(app)
  }
}
