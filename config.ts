export const ENV =  process.env.NODE_ENV

export const APP_NAME = "githunter-7403f";
export const REGION = "us-central1";

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

export const firebaseConfig = {
  FIREBASE_API_KEY : process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN : process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET : process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID : process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID : process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  FIREBASE_DATABASE_URL : process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  FIREBASE_MEASUREMENT_ID : process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
} 


export const HOST =
  ENV === "development"
    ? `http://localhost:5001/${APP_NAME}/${REGION}`
    : `https://${REGION}-${APP_NAME}}.cloudfunctions.net`;