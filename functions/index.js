const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.validateNewUser = functions.auth.user().onCreate(async (user) => {
  const email = user.email || "";
  const userId = user.uid;

  if (!email.endsWith("@cornell.edu")) {
    console.log(`Deleting non-Cornell email: ${email}`);
    await admin.auth().deleteUser(userId);
    return console.log("User deleted successfully.");
  }

  console.log(`Cornell user allowed: ${email}`);
  return null;
});
