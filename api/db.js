const admin = require("firebase-admin");

var serviceAccount = require("../../servicesPortfolio.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-e5bfd-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

module.exports = db;