import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  status: string;
  message?: string;
  user: IUser;
}

export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

const AUTH_STATUS: { [index: string]: string } = {
  CHECKING: "checking",
  NOT_AUTHENTICATED: "not-authenticated",
  AUTHENTICATED: "authenticated",
};

const initialState: IAuthState = {
  status: AUTH_STATUS["CHECKING"],
  message: "",
  user: {
    uid: "",
    email: "",
    displayName: "",
    photoURL: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log("payload", payload);
      state.status = "AUTHENTICATED";
      state.user = {
        uid: payload.user.uid,
        displayName: payload.user.displayName,
        email: payload.user.email,
        photoURL: payload.user.photoURL,
      };
    },
    logout: (state, { payload }) => {
      state.status = "NOT_AUTHENTICATED";
      state.user = {
        uid: "",
        email: "",
        displayName: "",
        photoURL: "",
      };
      state.message = payload?.message;
    },
    checkingCredentials: (state) => {
      state.status = AUTH_STATUS["CHECKING"];
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
