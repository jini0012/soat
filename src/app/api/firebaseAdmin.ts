import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

// Firebase Admin이 이미 초기화되었는지 확인
const apps = getApps();
let adminApp: App;

const serviceAccountKey = process.env.FIREBASE_ADMIN_SDK_PRIVATE_KEY;

if (!serviceAccountKey) {
  throw new Error("FIREBASE_ADMIN_SDK_PRIVATE_KEY is not set");
}

if (!apps.length) {
  adminApp = initializeApp({
    credential: cert(JSON.parse(serviceAccountKey)),
  });
} else {
  adminApp = apps[0];
}

const adminDb: Firestore = getFirestore(adminApp);

export { adminApp, adminDb };
