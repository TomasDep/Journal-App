import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import { NavBar, Sidebar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }: { children: any }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
