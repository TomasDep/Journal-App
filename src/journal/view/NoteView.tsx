import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          August 28, 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Insert yout title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="what happened today?"
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
