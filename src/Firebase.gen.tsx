/* TypeScript file generated from Firebase.res by genType. */
/* eslint-disable import/first */


import {initializeApp as initializeAppNotChecked} from 'firebase/app';

import {deleteApp as deleteAppNotChecked} from 'firebase/app';

import {getFirestore as getFirestoreNotChecked} from 'firebase/firestore';

import {connectFirestoreEmulator as connectFirestoreEmulatorNotChecked} from 'firebase/firestore';

import {waitForPendingWrites as waitForPendingWritesNotChecked} from 'firebase/firestore';

import {doc as doc1NotChecked} from 'firebase/firestore';

import {doc as doc2NotChecked} from 'firebase/firestore';

import {doc as docInCollectionNotChecked} from 'firebase/firestore';

import {setDoc as setDocNotChecked} from 'firebase/firestore';

import {addDoc as addDocNotChecked} from 'firebase/firestore';

import {updateDoc as updateDocNotChecked} from 'firebase/firestore';

import {deleteDoc as deleteDocNotChecked} from 'firebase/firestore';

import {runTransaction as runTransactionNotChecked} from 'firebase/firestore';

import {writeBatch as writeBatchNotChecked} from 'firebase/firestore';

import {collection as collection1NotChecked} from 'firebase/firestore';

import {collection as collection2NotChecked} from 'firebase/firestore';

import {where as whereNotChecked} from 'firebase/firestore';

import {query as query0NotChecked} from 'firebase/firestore';

import {query as query1NotChecked} from 'firebase/firestore';

import {query as query2NotChecked} from 'firebase/firestore';

import {query as query3NotChecked} from 'firebase/firestore';

import {onSnapshot as onSnapshotNotChecked} from 'firebase/firestore';

import {onSnapshot as onDocSnapshotNotChecked} from 'firebase/firestore';

import {getAuth as getAuthNotChecked} from 'firebase/auth';

import {connectAuthEmulator as connectAuthEmulatorNotChecked} from 'firebase/auth';

import {onAuthStateChanged as onAuthStateChangedNotChecked} from 'firebase/auth';

import {createUserWithEmailAndPassword as createUserWithEmailAndPasswordNotChecked} from 'firebase/auth';

import {signInWithEmailAndPassword as signInWithEmailAndPasswordNotChecked} from 'firebase/auth';

import {signInAnonymously as signInAnonymouslyNotChecked} from 'firebase/auth';

// In case of type error, check the type of 'initializeApp' in 'Firebase.re' and 'firebase/app'.
export const initializeAppTypeChecked: (_1:FirebaseApp_options) => FirebaseApp_t = initializeAppNotChecked;

// Export 'initializeApp' early to allow circular import from the '.bs.js' file.
export const initializeApp: unknown = initializeAppTypeChecked as (_1:FirebaseApp_options) => FirebaseApp_t;

// In case of type error, check the type of 'deleteApp' in 'Firebase.re' and 'firebase/app'.
export const deleteAppTypeChecked: (_1:FirebaseApp_t) => Promise<void> = deleteAppNotChecked;

// Export 'deleteApp' early to allow circular import from the '.bs.js' file.
export const deleteApp: unknown = deleteAppTypeChecked as (_1:FirebaseApp_t) => Promise<void>;

// In case of type error, check the type of 'getFirestore' in 'Firebase.re' and 'firebase/firestore'.
export const getFirestoreTypeChecked: (_1:FirebaseApp_t) => Firestore_t = getFirestoreNotChecked;

// Export 'getFirestore' early to allow circular import from the '.bs.js' file.
export const getFirestore: unknown = getFirestoreTypeChecked as (_1:FirebaseApp_t) => Firestore_t;

// In case of type error, check the type of 'connectFirestoreEmulator' in 'Firebase.re' and 'firebase/firestore'.
export const connectFirestoreEmulatorTypeChecked: (_1:Firestore_t, _2:string, _3:number) => void = connectFirestoreEmulatorNotChecked;

// Export 'connectFirestoreEmulator' early to allow circular import from the '.bs.js' file.
export const connectFirestoreEmulator: unknown = connectFirestoreEmulatorTypeChecked as (_1:Firestore_t, _2:string, _3:number) => void;

// In case of type error, check the type of 'waitForPendingWrites' in 'Firebase.re' and 'firebase/firestore'.
export const waitForPendingWritesTypeChecked: (_1:Firestore_t) => Promise<void> = waitForPendingWritesNotChecked;

// Export 'waitForPendingWrites' early to allow circular import from the '.bs.js' file.
export const waitForPendingWrites: unknown = waitForPendingWritesTypeChecked as (_1:Firestore_t) => Promise<void>;

// In case of type error, check the type of 'doc1' in 'Firebase.re' and 'firebase/firestore'.
export const doc1TypeChecked: (_1:Firestore_t, _2:string) => Firestore_documentReference = doc1NotChecked;

// Export 'doc1' early to allow circular import from the '.bs.js' file.
export const doc1: unknown = doc1TypeChecked as (_1:Firestore_t, _2:string) => Firestore_documentReference;

// In case of type error, check the type of 'doc2' in 'Firebase.re' and 'firebase/firestore'.
export const doc2TypeChecked: (_1:Firestore_t, _2:string, _3:string) => Firestore_documentReference = doc2NotChecked;

// Export 'doc2' early to allow circular import from the '.bs.js' file.
export const doc2: unknown = doc2TypeChecked as (_1:Firestore_t, _2:string, _3:string) => Firestore_documentReference;

// In case of type error, check the type of 'docInCollection' in 'Firebase.re' and 'firebase/firestore'.
export const docInCollectionTypeChecked: (_1:Firestore_collectionReference) => Firestore_documentReference = docInCollectionNotChecked;

// Export 'docInCollection' early to allow circular import from the '.bs.js' file.
export const docInCollection: unknown = docInCollectionTypeChecked as (_1:Firestore_collectionReference) => Firestore_documentReference;

// In case of type error, check the type of 'setDoc' in 'Firebase.re' and 'firebase/firestore'.
export const setDocTypeChecked: <data>(_1:Firestore_documentReference, _2:data) => Promise<void> = setDocNotChecked;

// Export 'setDoc' early to allow circular import from the '.bs.js' file.
export const setDoc: unknown = setDocTypeChecked as <data>(_1:Firestore_documentReference, _2:data) => Promise<void>;

// In case of type error, check the type of 'addDoc' in 'Firebase.re' and 'firebase/firestore'.
export const addDocTypeChecked: (_1:Firestore_collectionReference, _2:Firestore_documentData) => Promise<Firestore_documentReference> = addDocNotChecked;

// Export 'addDoc' early to allow circular import from the '.bs.js' file.
export const addDoc: unknown = addDocTypeChecked as (_1:Firestore_collectionReference, _2:Firestore_documentData) => Promise<Firestore_documentReference>;

// In case of type error, check the type of 'updateDoc' in 'Firebase.re' and 'firebase/firestore'.
export const updateDocTypeChecked: <data>(_1:Firestore_documentReference, _2:data) => Promise<void> = updateDocNotChecked;

// Export 'updateDoc' early to allow circular import from the '.bs.js' file.
export const updateDoc: unknown = updateDocTypeChecked as <data>(_1:Firestore_documentReference, _2:data) => Promise<void>;

// In case of type error, check the type of 'deleteDoc' in 'Firebase.re' and 'firebase/firestore'.
export const deleteDocTypeChecked: (_1:Firestore_documentReference) => Promise<void> = deleteDocNotChecked;

// Export 'deleteDoc' early to allow circular import from the '.bs.js' file.
export const deleteDoc: unknown = deleteDocTypeChecked as (_1:Firestore_documentReference) => Promise<void>;

// In case of type error, check the type of 'runTransaction' in 'Firebase.re' and 'firebase/firestore'.
export const runTransactionTypeChecked: <t>(_1:Firestore_t, _2:((_1:Firestore_transaction) => Promise<t>), _3:Js_undefined<Firestore_transactionOptions>) => Promise<t> = runTransactionNotChecked;

// Export 'runTransaction' early to allow circular import from the '.bs.js' file.
export const runTransaction: unknown = runTransactionTypeChecked as <t>(_1:Firestore_t, _2:((_1:Firestore_transaction) => Promise<t>), _3:Js_undefined<Firestore_transactionOptions>) => Promise<t>;

// In case of type error, check the type of 'writeBatch' in 'Firebase.re' and 'firebase/firestore'.
export const writeBatchTypeChecked: (_1:Firestore_t) => Firestore_writeBatch = writeBatchNotChecked;

// Export 'writeBatch' early to allow circular import from the '.bs.js' file.
export const writeBatch: unknown = writeBatchTypeChecked as (_1:Firestore_t) => Firestore_writeBatch;

// In case of type error, check the type of 'collection1' in 'Firebase.re' and 'firebase/firestore'.
export const collection1TypeChecked: (_1:Firestore_t, _2:string) => Firestore_collectionReference = collection1NotChecked;

// Export 'collection1' early to allow circular import from the '.bs.js' file.
export const collection1: unknown = collection1TypeChecked as (_1:Firestore_t, _2:string) => Firestore_collectionReference;

// In case of type error, check the type of 'collection2' in 'Firebase.re' and 'firebase/firestore'.
export const collection2TypeChecked: (_1:Firestore_t, _2:string, _3:string) => Firestore_collectionReference = collection2NotChecked;

// Export 'collection2' early to allow circular import from the '.bs.js' file.
export const collection2: unknown = collection2TypeChecked as (_1:Firestore_t, _2:string, _3:string) => Firestore_collectionReference;

// In case of type error, check the type of 'where' in 'Firebase.re' and 'firebase/firestore'.
export const whereTypeChecked: <value>(_1:string, _2:Firestore_whereFilterOp, _3:value) => Firestore_queryFieldFilterConstraint = whereNotChecked;

// Export 'where' early to allow circular import from the '.bs.js' file.
export const where: unknown = whereTypeChecked as <value>(_1:string, _2:Firestore_whereFilterOp, _3:value) => Firestore_queryFieldFilterConstraint;

// In case of type error, check the type of 'query0' in 'Firebase.re' and 'firebase/firestore'.
export const query0TypeChecked: (_1:Firestore_collectionReference) => Firestore_query = query0NotChecked;

// Export 'query0' early to allow circular import from the '.bs.js' file.
export const query0: unknown = query0TypeChecked as (_1:Firestore_collectionReference) => Firestore_query;

// In case of type error, check the type of 'query1' in 'Firebase.re' and 'firebase/firestore'.
export const query1TypeChecked: (_1:Firestore_collectionReference, _2:Firestore_queryFieldFilterConstraint) => Firestore_query = query1NotChecked;

// Export 'query1' early to allow circular import from the '.bs.js' file.
export const query1: unknown = query1TypeChecked as (_1:Firestore_collectionReference, _2:Firestore_queryFieldFilterConstraint) => Firestore_query;

// In case of type error, check the type of 'query2' in 'Firebase.re' and 'firebase/firestore'.
export const query2TypeChecked: (_1:Firestore_collectionReference, _2:Firestore_queryFieldFilterConstraint, _3:Firestore_queryFieldFilterConstraint) => Firestore_query = query2NotChecked;

// Export 'query2' early to allow circular import from the '.bs.js' file.
export const query2: unknown = query2TypeChecked as (_1:Firestore_collectionReference, _2:Firestore_queryFieldFilterConstraint, _3:Firestore_queryFieldFilterConstraint) => Firestore_query;

// In case of type error, check the type of 'query3' in 'Firebase.re' and 'firebase/firestore'.
export const query3TypeChecked: (_1:Firestore_collectionReference, _2:Firestore_queryFieldFilterConstraint, _3:Firestore_queryFieldFilterConstraint, _4:Firestore_queryFieldFilterConstraint) => Firestore_query = query3NotChecked;

// Export 'query3' early to allow circular import from the '.bs.js' file.
export const query3: unknown = query3TypeChecked as (_1:Firestore_collectionReference, _2:Firestore_queryFieldFilterConstraint, _3:Firestore_queryFieldFilterConstraint, _4:Firestore_queryFieldFilterConstraint) => Firestore_query;

// In case of type error, check the type of 'onSnapshot' in 'Firebase.re' and 'firebase/firestore'.
export const onSnapshotTypeChecked: (_1:Firestore_query, _2:Firestore_snapshotListenOptions, _3:Firestore_observer) => unsubscribe = onSnapshotNotChecked;

// Export 'onSnapshot' early to allow circular import from the '.bs.js' file.
export const onSnapshot: unknown = onSnapshotTypeChecked as (_1:Firestore_query, _2:Firestore_snapshotListenOptions, _3:Firestore_observer) => unsubscribe;

// In case of type error, check the type of 'onDocSnapshot' in 'Firebase.re' and 'firebase/firestore'.
export const onDocSnapshotTypeChecked: (_1:Firestore_documentReference, _2:((_1:Firestore_documentSnapshot) => void), _3:((_1:Firestore_firestoreError) => void)) => unsubscribe = onDocSnapshotNotChecked;

// Export 'onDocSnapshot' early to allow circular import from the '.bs.js' file.
export const onDocSnapshot: unknown = onDocSnapshotTypeChecked as (_1:Firestore_documentReference, _2:((_1:Firestore_documentSnapshot) => void), _3:((_1:Firestore_firestoreError) => void)) => unsubscribe;

// In case of type error, check the type of 'getAuth' in 'Firebase.re' and 'firebase/auth'.
export const getAuthTypeChecked: (_1:Js_undefined<FirebaseApp_t>) => Auth_t = getAuthNotChecked;

// Export 'getAuth' early to allow circular import from the '.bs.js' file.
export const getAuth: unknown = getAuthTypeChecked as (_1:Js_undefined<FirebaseApp_t>) => Auth_t;

// In case of type error, check the type of 'connectAuthEmulator' in 'Firebase.re' and 'firebase/auth'.
export const connectAuthEmulatorTypeChecked: (_1:Auth_t, _2:string, _3:Js_undefined<Auth_emulatorOptions>) => void = connectAuthEmulatorNotChecked;

// Export 'connectAuthEmulator' early to allow circular import from the '.bs.js' file.
export const connectAuthEmulator: unknown = connectAuthEmulatorTypeChecked as (_1:Auth_t, _2:string, _3:Js_undefined<Auth_emulatorOptions>) => void;

// In case of type error, check the type of 'onAuthStateChanged' in 'Firebase.re' and 'firebase/auth'.
export const onAuthStateChangedTypeChecked: (_1:Auth_t, _2:((_1:(null | Auth_User_t)) => void)) => unsubscribe = onAuthStateChangedNotChecked;

// Export 'onAuthStateChanged' early to allow circular import from the '.bs.js' file.
export const onAuthStateChanged: unknown = onAuthStateChangedTypeChecked as (_1:Auth_t, _2:((_1:(null | Auth_User_t)) => void)) => unsubscribe;

// In case of type error, check the type of 'createUserWithEmailAndPassword' in 'Firebase.re' and 'firebase/auth'.
export const createUserWithEmailAndPasswordTypeChecked: (_1:Auth_t, _2:string, _3:string) => Promise<Auth_UserCredential_t> = createUserWithEmailAndPasswordNotChecked;

// Export 'createUserWithEmailAndPassword' early to allow circular import from the '.bs.js' file.
export const createUserWithEmailAndPassword: unknown = createUserWithEmailAndPasswordTypeChecked as (_1:Auth_t, _2:string, _3:string) => Promise<Auth_UserCredential_t>;

// In case of type error, check the type of 'signInWithEmailAndPassword' in 'Firebase.re' and 'firebase/auth'.
export const signInWithEmailAndPasswordTypeChecked: (_1:Auth_t, _2:string, _3:string) => Promise<Auth_UserCredential_t> = signInWithEmailAndPasswordNotChecked;

// Export 'signInWithEmailAndPassword' early to allow circular import from the '.bs.js' file.
export const signInWithEmailAndPassword: unknown = signInWithEmailAndPasswordTypeChecked as (_1:Auth_t, _2:string, _3:string) => Promise<Auth_UserCredential_t>;

// In case of type error, check the type of 'signInAnonymously' in 'Firebase.re' and 'firebase/auth'.
export const signInAnonymouslyTypeChecked: (_1:Auth_t) => Promise<Auth_UserCredential_t> = signInAnonymouslyNotChecked;

// Export 'signInAnonymously' early to allow circular import from the '.bs.js' file.
export const signInAnonymously: unknown = signInAnonymouslyTypeChecked as (_1:Auth_t) => Promise<Auth_UserCredential_t>;

import type {Auth as $$Auth_t} from 'firebase/auth';

import type {CollectionReference as $$Firestore_collectionReference} from 'firebase/firestore';

import type {DocumentData as $$Firestore_documentData} from 'firebase/firestore';

import type {DocumentReference as $$Firestore_documentReference} from 'firebase/firestore';

import type {DocumentSnapshot as $$Firestore_documentSnapshot} from 'firebase/firestore';

import type {FirebaseApp as $$FirebaseApp_t} from 'firebase/app';

import type {Firestore as $$Firestore_t} from 'firebase/firestore';

import type {QueryDocumentSnapshot as $$Firestore_queryDocumentSnapshot} from 'firebase/firestore';

import type {QueryFieldFilterConstraint as $$Firestore_queryFieldFilterConstraint} from 'firebase/firestore';

import type {QuerySnapshot as $$Firestore_querySnapshot} from 'firebase/firestore';

import type {Query as $$Firestore_query} from 'firebase/firestore';

import type {Transaction as $$Firestore_transaction} from 'firebase/firestore';

import type {User as $$Auth_User_t} from 'firebase/auth';

import type {WriteBatch as $$Firestore_writeBatch} from 'firebase/firestore';

import type {undefined as Js_undefined} from '../src/shims/Js.shim';

// tslint:disable-next-line:interface-over-type-literal
export type unsubscribe = () => void;

// tslint:disable-next-line:interface-over-type-literal
export type FirebaseApp_t = $$FirebaseApp_t;

// tslint:disable-next-line:interface-over-type-literal
export type FirebaseApp_options = {
  readonly apiKey?: string; 
  readonly authDomain?: string; 
  readonly databaseURL?: string; 
  readonly projectId?: string; 
  readonly storageBucket?: string; 
  readonly messagingSenderId?: string; 
  readonly appId?: string; 
  readonly measurementId?: string
};

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_t = $$Firestore_t;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_query = $$Firestore_query;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_collectionReference = $$Firestore_collectionReference;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_queryFieldFilterConstraint = $$Firestore_queryFieldFilterConstraint;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_whereFilterOp = 
    "<"
  | "<="
  | "=="
  | ">"
  | ">="
  | "!="
  | "array-contains"
  | "in"
  | "array-contains-any"
  | "not-in";

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_snapshotListenOptions = { readonly includeMetadataChanges?: boolean };

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_documentData = $$Firestore_documentData;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_documentReference = $$Firestore_documentReference;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_documentSnapshot = $$Firestore_documentSnapshot;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_transaction = $$Firestore_transaction;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_transactionOptions = { readonly maxAttempts?: number };

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_writeBatch = $$Firestore_writeBatch;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_queryDocumentSnapshot = $$Firestore_queryDocumentSnapshot;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_querySnapshot = $$Firestore_querySnapshot;

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_firestoreErrorCode = 
    "cancelled"
  | "unknown"
  | "invalid-argument"
  | "deadline-exceeded"
  | "not-found"
  | "already-exists"
  | "permission-denied"
  | "resource-exhausted"
  | "failed-precondition"
  | "aborted"
  | "out-of-range"
  | "unimplemented"
  | "internal"
  | "unavailable"
  | "data-loss"
  | "unauthenticated";

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_firestoreError = {
  readonly code: Firestore_firestoreErrorCode; 
  readonly message: string; 
  readonly stack?: string; 
  readonly name: string
};

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_observer = {
  readonly next?: (_1:Firestore_querySnapshot) => void; 
  readonly error?: (_1:Firestore_firestoreError) => void; 
  readonly complete?: () => void
};

// tslint:disable-next-line:interface-over-type-literal
export type Auth_t = $$Auth_t;

// tslint:disable-next-line:interface-over-type-literal
export type Auth_emulatorOptions = { readonly disableWarnings: boolean };

// tslint:disable-next-line:interface-over-type-literal
export type Auth_User_t = $$Auth_User_t;

// tslint:disable-next-line:interface-over-type-literal
export type Auth_UserCredential_t = { readonly user: Auth_User_t; readonly providerId: (null | string) };
