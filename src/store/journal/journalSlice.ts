import { createSlice } from "@reduxjs/toolkit";

export interface IJournalState {
  isSaving: boolean;
  messageSaved: string;
  notes: INote[] | null;
  active: INote | null;
}

const initialState: IJournalState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes?.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {},
    updateNote: (state) => {},
    deleteNoteById: (state) => {},
  },
});

export const {
  addNewEmptyNote,
  deleteNoteById,
  setActiveNote,
  setNotes,
  setSaving,
  savingNewNote,
  updateNote,
} = journalSlice.actions;
