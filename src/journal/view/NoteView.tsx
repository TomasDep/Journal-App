import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import {
  setActiveNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import { DeleteOutline, UploadOutlined } from "@mui/icons-material";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: noteActive,
    messageSaved,
    isSaving,
  } = useSelector((state: any) => state.journal);
  const { note, onInputChange, formState } = useForm(noteActive);
  const dateString = useMemo(() => {
    const date = new Date(note?.date);
    return date.toUTCString();
  }, [note?.date]);
  const fileInputRef = useRef();
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Note updated", messageSaved, "success");
    }
  }, [messageSaved]);
  const onSaveNote = () => {
    dispatch(startSaveNote());
  };
  const onFileInputChange = ({ target }: any) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  };
  const onDelete = () => {
    dispatch(startDeletingNote());
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
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          sx={{ padding: 2 }}
          color="primary"
          onClick={onSaveNote}
          disabled={isSaving}
        >
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
      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          Delete
          <DeleteOutline />
        </Button>
      </Grid>
      <ImageGallery imageUrls={note.imageUrls} />
    </Grid>
  );
};
