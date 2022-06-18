export const ENV =  process.env.NODE_ENV

const APP_NAME = "githunter-7403f";
const REGION = "us-central1";
const HOST_NAME = "http://localhost:3000/"


export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
export const GITHUB_SECRET = process.env.NEXT_PUBLIC_GITHUB_SECRET

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET

// DANGLING
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY


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

export const GAPI_CONFIG = {
  apiKey: GOOGLE_API_KEY,
  clientId: GOOGLE_CLIENT_ID,
  scope: "https://www.googleapis.com/auth/gmail.send",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
  fetch_basic_profile: true,
  immediate: true,
  plugin_name: "githunter",
};

export const GMAIL_SEND_SCOPE = 'https://www.googleapis.com/auth/gmail.send'

export const HOST =
  ENV === "development"
    ? `${HOST_NAME}${APP_NAME}/${REGION}`
    : `https://${REGION}-${APP_NAME}}.cloudfunctions.net`;