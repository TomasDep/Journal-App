import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  status: string;
  uid: string;
  email: string;
  displayName: string;
  photoUrl: string;
  errorMessage: string;
}

const AUTH_STATUS: { [index: string]: string } = {
  CHECKING: "checking",
  NOT_AUTHENTICATED: "not-authenticated",
  AUTHENTICATED: "authenticated",
};

const initialState: IAuthState = {
  status: AUTH_STATUS["NOT_AUTHENTICATED"],
  uid: "",
  email: "",
  displayName: "",
  photoUrl: "",
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = AUTH_STATUS["CHECKING"];
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
