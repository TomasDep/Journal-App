import { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import { checkingCredentials, login, logout } from "./authSlice";
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
  registerUserWithEmailPassword,
  logoutFirebase,
} from "../../firebase/providers";
import { RootState } from "../store";
import { clearNotesLogout } from "../journal";

export const checkingAuthentication = () => async (dispatch: any) => {
  dispatch(checkingCredentials());
};

export const startGoogleSignIn =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.status) dispatch(logout(result.message));
    dispatch(login(result));
  };

export const startCreatingUserWithEmailAndPassword =
  (
    email: string,
    password: string,
    displayName: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch(checkingCredentials());
    const { status, uid, photoURL, message } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!status) return dispatch(logout({ message }));
    dispatch(login({ user: { uid, displayName, email, photoURL } }));
  };

export const startLoginWithEmailAndPassword =
  (
    email: string,
    password: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch(checkingAuthentication());
    const { uid, displayName, photoURL, status, message } =
      await loginWithEmailAndPassword({
        email,
        password,
      });
    if (!status) return dispatch(logout({ message }));
    dispatch(login({ user: { uid, displayName, email, photoURL } }));
  };

export const startLogout = () => {
  return async (dispatch: any) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout({}));
  };
};
