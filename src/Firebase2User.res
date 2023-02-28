open Firebase2

let liveOptions: FirebaseApp.options = {
  projectId: "admin-panel",
  appId: "1:845699356146:web:a28bc650144ac4a9e2876b",
}

let app = liveOptions->FirebaseApp.make
let store = app->Firestore.make
