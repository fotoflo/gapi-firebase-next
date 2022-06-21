export const ENV = process.env.NODE_ENV;

const APP_NAME = "githunter-7403f";
const REGION = "us-central1";
const HOST_NAME = "http://localhost:3000/";

export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
export const GITHUB_SECRET = process.env.NEXT_PUBLIC_GITHUB_SECRET;

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;

// DANGLING
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export const GOOGLE_DEFAULT_AUTH_PARAMS = {
  // use authorization:
  url: "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
  params: {
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
  },
};

export const GOOGLE_GMAIL_AUTH_PARAMS = {
  // use authorization:
  url: "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
  params: {
    scope: "https://www.googleapis.com/auth/gmail.send",
  },
};

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const GAPI_CONFIG = {
  apiKey: GOOGLE_API_KEY,
  clientId: GOOGLE_CLIENT_ID,
  scope: "https://www.googleapis.com/auth/gmail.send",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
  fetch_basic_profile: true,
  immediate: true,
  plugin_name: "githunter",
};

export const GMAIL_SEND_SCOPE = "https://www.googleapis.com/auth/gmail.send";

export const HOST =
  ENV === "development"
    ? `${HOST_NAME}${APP_NAME}/${REGION}`
    : `https://${REGION}-${APP_NAME}}.cloudfunctions.net`;
