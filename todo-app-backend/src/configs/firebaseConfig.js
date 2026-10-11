
import admin from "firebase-admin";
import path from "node:path";
import { readFileSync } from "node:fs";

const serviceAccountPath =
  process.env.FIREBASE_SERVICE_ACCOUNT_PATH ||
  path.resolve("./todo-app-309e2-firebase-adminsdk-fbsvc-658419b9d5.json");

const serviceAccount = JSON.parse(
  readFileSync(serviceAccountPath, "utf8")
);

const fbApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default fbApp;
