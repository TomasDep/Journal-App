import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: noteActive } = useSelector((state: any) => state.journal);
  const { note, onInputChange, formState } = useForm(noteActive);
  const dateString = useMemo(() => {
    const date = new Date(note?.date);
    return date.toUTCString();
  }, [note?.date]);
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);
  const onSaveNote = () => {
    dispatch(startSaveNote());
  };
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button sx={{ padding: 2 }} color="primary" onClick={onSaveNote}>
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
          name="title"
          value={note.title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="what happened today?"
          minRows={5}
          name="body"
          value={note.body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
