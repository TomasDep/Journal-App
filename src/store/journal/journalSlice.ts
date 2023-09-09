import { createSlice } from "@reduxjs/toolkit";

export interface IJournalState {
  isSaving: boolean;
  messageSaved: string;
  notes: INote[] | null;
  active: INote | null;
}

const initialState: IJournalState = {
  isSaving: true,
  messageSaved: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    setSaving: (state) => {},
    updateNote: (state) => {},
    deleteNoteById: (state) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
