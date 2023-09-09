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

export const registerUserWithEmailPassword = async (
  registerUser: IRegisterUser
) => {
  const { email, password, displayName } = registerUser;
  try {
    const response = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = response.user;
    if (FirebaseAuth.currentUser) {
      await updateProfile(FirebaseAuth.currentUser, { displayName });
      return {
        status: true,
        uid,
        photoURL,
        email,
        displayName,
      };
    }
    return {
      status: false,
    };
  } catch (error: any) {
    console.error(error);
    return {
      status: false,
      message: error.message,
    };
  }
};

export const loginWithEmailAndPassword = async (login: ILogin) => {
  const { email, password } = login;
  try {
    const response = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
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

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
