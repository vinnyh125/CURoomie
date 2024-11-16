import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!user.email.endsWith("@cornell.edu")) {
      throw new Error("Only Cornell emails are allowed.");
    }

    console.log("Welcome, Cornell user!", user);
    return user; 
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    alert(error.message);
    return null;
  }
};