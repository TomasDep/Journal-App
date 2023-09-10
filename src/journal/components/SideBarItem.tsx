import React, { FC, useMemo } from "react";
import { useDispatch } from "react-redux";

import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { setActiveNote } from "../../store/journal";

interface Props {
  note: INote;
}

export const SideBarItem: FC<Props> = ({ note }) => {
  const dispatch = useDispatch();
  const onClickNote = () => {
    dispatch(setActiveNote({ note }));
  };
  const newTitle = useMemo(() => {
    return note.title.length > 17
      ? note.title.substring(0, 17) + "..."
      : note.title;
  }, [note.title]);

  return (
    <ListItem key={note.id} disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
