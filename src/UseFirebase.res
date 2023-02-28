open Firebase

let liveOptions: FirebaseApp.options = {
  apiKey: "AIzaSeDzEyIOOVDG4IMWnwlUgvuYSXOCk_ZGaOg",
  authDomain: "admin-panel.firebaseapp.com",
  projectId: "admin-panel",
  storageBucket: "admin-panel.appspot.com",
  messagingSenderId: "845699356146",
  appId: "1:845699356146:web:a28bc650144ac4a9e2876b",
  measurementId: "G-L87PBG6ZXD",
}

let app = liveOptions->FirebaseApp.make
let store = app->Firestore.make
