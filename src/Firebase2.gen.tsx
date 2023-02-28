/* TypeScript file generated from Firebase2.res by genType. */
/* eslint-disable import/first */


import {initializeApp as initializeAppNotChecked} from 'firebase/app';

import {getFirestore as getFirestoreNotChecked} from 'firebase/firestore';

// In case of type error, check the type of 'initializeApp' in 'Firebase2.re' and 'firebase/app'.
export const initializeAppTypeChecked: (_1:FirebaseApp_options) => FirebaseApp_t = initializeAppNotChecked;

// Export 'initializeApp' early to allow circular import from the '.bs.js' file.
export const initializeApp: unknown = initializeAppTypeChecked as (_1:FirebaseApp_options) => FirebaseApp_t;

// In case of type error, check the type of 'getFirestore' in 'Firebase2.re' and 'firebase/firestore'.
export const getFirestoreTypeChecked: (_1:FirebaseApp_t) => Firestore_t = getFirestoreNotChecked;

// Export 'getFirestore' early to allow circular import from the '.bs.js' file.
export const getFirestore: unknown = getFirestoreTypeChecked as (_1:FirebaseApp_t) => Firestore_t;

import type {FirebaseApp as $$FirebaseApp_t} from 'firebase/app';

import type {Firestore as $$Firestore_t} from 'firebase/firestore';

// tslint:disable-next-line:interface-over-type-literal
export type FirebaseApp_t = $$FirebaseApp_t;

// tslint:disable-next-line:interface-over-type-literal
export type FirebaseApp_options = { readonly projectId?: string; readonly appId?: string };

// tslint:disable-next-line:interface-over-type-literal
export type Firestore_t = $$Firestore_t;
