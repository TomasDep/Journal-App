import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const { status } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ user: { uid, displayName, email, photoURL } }));
    });
  }, []);
  return {
    status,
  };
};
