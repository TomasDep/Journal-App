import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
  };
};
