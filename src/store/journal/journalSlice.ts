import { createSlice } from "@reduxjs/toolkit";

export interface IJournalState {
  isSaving: boolean;
  messageSaved: string;
  notes: INote[] | undefined;
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
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state?.notes?.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      state.messageSaved = `${action.payload.title} note, updated successfully`;
    },
    setImagesToActiveNote: (state, action) => {
      if (state.active && state?.active?.imageUrls) {
        state.active.imageUrls = [
          ...state?.active?.imageUrls,
          ...action.payload,
        ];
      } else {
        state.messageSaved = "Error with uploading images";
      }
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes?.filter((note) => note.id !== action.payload);
    },
  },
});

export const {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  setActiveNote,
  setNotes,
  setSaving,
  setImagesToActiveNote,
  savingNewNote,
  updateNote,
} = journalSlice.actions;
