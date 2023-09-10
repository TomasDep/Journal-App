import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import AddOutlined from "@mui/icons-material/AddOutlined";

import { JournalLayout } from "../layout";
import { NoteView, NothingSelectedView } from "../view";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state: any) => state.journal);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: "#fff",
          bgcolor: "error.main",
          ":hover": { bgcolor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
