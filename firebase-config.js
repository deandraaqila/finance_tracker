const firebaseConfig = {
  apiKey: "AIzaSyApZdNp_kt9tuaA1fpzNmM_H_MlaPgGA2Y",
  authDomain: "finace-tracker-16f11.firebaseapp.com",
  projectId: "finace-tracker-16f11",
  storageBucket: "finace-tracker-16f11.firebasestorage.app",
  messagingSenderId: "1088811959411",
  appId: "1:1088811959411:web:b3069a58ba06beb19ed606",
  measurementId: "G-L1ET7WQ3NS"
};

// Ubah FIREBASE_CONFIG menjadi firebaseConfig di sini:
firebase.initializeApp(firebaseConfig);

// Global
window.db = firebase.firestore();
window.auth = firebase.auth();
window.firebase = firebase;
