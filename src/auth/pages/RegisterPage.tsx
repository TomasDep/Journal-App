import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Google from "@mui/icons-material/Google";
import { Link } from "@mui/material";

import { AuthLayout } from "../layout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Insert you Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="example@email.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
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
