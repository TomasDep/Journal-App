import StarOutline from "@mui/icons-material/StarOutline";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export const NothingSelectedView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        padding: 4,
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "#fff" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="#fff" variant="h5">
          Select or Create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};
