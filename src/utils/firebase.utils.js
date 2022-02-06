import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_SENDER_ID,
  appId: process.env.FB_AP_ID,
};

const app = initializeApp(firebaseConfig);
