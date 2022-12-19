import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Link, Alert } from "@mui/material";
import Typography from "@mui/material/Typography";

import { AuthLayout } from "../layout";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [
    (value: string) => value.includes("@"),
    "The email must contain an @.",
  ],
  password: [
    (value: string) => value.length >= 6,
    "The password must have more than 6 characters.",
  ],
  displayName: [(value: string) => value.length >= 1, "The name is required."],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false);
  const { status, message } = useSelector((state: any) => state.auth);
  const isChekingAuthentication = useMemo(() => status === "cheking", [status]);
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);
  const onSubmit = (event: any) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailAndPassword(formState));
  };
  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Insert you Name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="example@email.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!message ? "" : "none"}>
              <Alert severity="error">{message}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isChekingAuthentication}
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>
              Do you already have an account?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              go to login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
