// Firebase settings for ATP DUPR Session (project: atp-sessions, shared with Kings & Queens).
// These values are not secret: the Firestore rules decide who can change things.

export const firebaseConfig = {
  apiKey: "AIzaSyDrsz0HQYETQqgJ2xPsq7tMBAFLN8BVWdY",
  authDomain: "atp-sessions.firebaseapp.com",
  projectId: "atp-sessions",
  storageBucket: "atp-sessions.firebasestorage.app",
  messagingSenderId: "1092892280782",
  appId: "1:1092892280782:web:b63f70a5cb90549b53cd9f"
};

// Where DUPR Session saves its data in the database.
export const SESSION_COLLECTION = "duprsession";