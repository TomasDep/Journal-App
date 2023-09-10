import { FC } from "react";
import { useSelector } from "react-redux";

import { Divider, Drawer, List, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { SideBarItem } from "./SideBarItem";

interface Props {
  drawerWidth?: number;
}

export const Sidebar: FC<Props> = ({ drawerWidth }) => {
  const { user } = useSelector((state: any) => state.auth);
  const { notes } = useSelector((state: any) => state.journal);
  const width = drawerWidth ? drawerWidth : 240;
  return (
    <Box component="nav" sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {user.displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note: INote) => (
            <SideBarItem key={note.id} note={note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
