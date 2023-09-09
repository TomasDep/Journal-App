import { IconButton } from "@mui/material";
import AddOutlined from "@mui/icons-material/AddOutlined";

import { JournalLayout } from "../layout";
import { NothingSelectedView } from "../view";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
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
