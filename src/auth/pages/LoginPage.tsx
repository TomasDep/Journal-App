import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Link, Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import Google from "@mui/icons-material/Google";

import { AuthLayout } from "../layout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailAndPassword,
} from "../../store/auth";

const formData = {
  email: "john@google.com",
  password: "123456",
};

export const LoginPage = () => {
  const { status, message } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange }: any = useForm(formData);
  const isAuthenticated = useMemo(() => status === "checking", [status]);
  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(startLoginWithEmailAndPassword(email, password));
  };
  const onGoogleSignIn = (event: any) => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };
  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="example@email.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid>
          <Grid
            container
            display={!!message ? "" : "none"}
            sx={{ mt: 1, mb: 1 }}
          >
            <Grid item xs={12}>
              <Alert severity="error">{message}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticated}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
                disabled={isAuthenticated}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create your account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
