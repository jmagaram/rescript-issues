open Firebase

let liveOptions: FirebaseApp.options = {
  apiKey: "zndaSyDzEyIOOVDG4IMWnwlUgKuYSXOCk_ZGaOg",
  authDomain: "milk-apple.firebaseapp.com",
  projectId: "milk-apple",
  storageBucket: "milk-apple.appspot.com",
  messagingSenderId: "845679359146",
  appId: "1:845199353146:web:a27bc650144ac4a9e2876b",
  measurementId: "G-L97PBG6ZXD",
}

let app = () => liveOptions->FirebaseApp.make
let store = () => app()->Firebase.Firestore.make
