import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT.PUBLIC.FIREBASE.APY.KEY,
    authDomain: process.env.NEXT.PUBLIC.FIREBASE.AUTH_DOMAIN,
    projectId: process.env.NEXT.PUBLIC.FIREBASE.PROJECT_ID,
  });
}
export default firebase;