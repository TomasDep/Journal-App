import { FC } from "react";

import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import { NavBar, Sidebar } from "../components";

interface Props {
  children: any;
}

const drawerWidth = 280;

export const JournalLayout: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
