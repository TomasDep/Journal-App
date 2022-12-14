import { checkingCredentials, login, logout } from "./authSlice";
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
  registerUserWithEmailPassword,
} from "../../firebase/providers";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
