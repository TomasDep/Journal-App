import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      status: true,
      user: {
        uid,
        displayName,
        email,
        photoURL,
      },
    };
  } catch (error: any) {
    console.error(error);
    return {
      status: false,
      message: error.message,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const response = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = response.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return {
      status: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error: any) {
    console.error(error);
    return {
      status: false,
      message: error.message,
    };
  }
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log(response);
    const { uid, photoURL, displayName } = response.user;
    return {
      status: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error: any) {
    console.error(error);
    return {
      status: false,
      message: error.message,
    };
  }
};
