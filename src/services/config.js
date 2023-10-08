
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
  authDomain: import.meta.env.VITE_FIRESTORE_DOMAIN,
  projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRESTORE_MSSG_ID,
  appId: import.meta.env.VITE_FIRESTORE_APP_ID
};
