import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { TurnedInNot } from "@mui/icons-material";

export const Sidebar = ({ drawerWidth }: { drawerWidth: number }) => {
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
            John Doe
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["January", "February", "March", "April"].map((text) => {
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText
                      secondary={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                      }
                    />
                  </Grid>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};
