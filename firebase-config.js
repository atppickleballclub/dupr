// Firebase settings for ATP DUPR Session (project: atp-dupr-sessions).
// These values are not secret: the Firestore rules decide who can change things.

export const firebaseConfig = {
  apiKey: "AIzaSyAIaaiH_v9KRoCb9PEsQ5gKy0J4QQetdm8",
  authDomain: "atp-dupr-sessions.firebaseapp.com",
  projectId: "atp-dupr-sessions",
  storageBucket: "atp-dupr-sessions.firebasestorage.app",
  messagingSenderId: "111557656014",
  appId: "1:111557656014:web:bc0b940102109cee0ebf9f"
};

// Where the sessions are saved in the database.
export const SESSION_COLLECTION = "duprsession";
