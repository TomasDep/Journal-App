import { IconButton, Typography } from "@mui/material";
import AddOutlined from "@mui/icons-material/AddOutlined";

import { JournalLayout } from "../layout";
import { NoteView, NothingSelectedView } from "../view";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate
        beatae officiis repudiandae ad architecto saepe magni, ea quidem
        deleniti natus exercitationem, sit inventore doloremque cupiditate,
        minus quae omnis unde!
      </Typography> */}
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
