import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore/lite";

import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setImagesToActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
  return async (dispatch: any, getState: any) => {
    console.log("startNewNote");
    dispatch(savingNewNote());
    const { user } = getState().auth;
    const newNote = {
      id: "",
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    console.log(user.uid);
    const newDoc = await addDoc(
      collection(FirebaseDB, `${user.uid}`, "/journal/notes"),
      {
        title: "",
        body: "",
        date: new Date().getTime(),
      }
    );
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch: any, getState: any) => {
    const { user } = getState().auth;
    if (!user.uid) throw new Error("uid not exist");
    const notes: INote[] = await loadNotes(user.uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSaving());
    const { user } = getState().auth;
    const { active: noteActive } = getState().journal;
    const noteToFirestore = { ...noteActive.note };
    delete noteToFirestore.id;
    const docRef = doc(
      FirebaseDB,
      `${user.uid}/journal/notes/${noteActive.note.id}`
    );
    await setDoc(docRef, noteToFirestore, { merge: true });
    dispatch(updateNote(noteActive));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSaving());
    await fileUpload(files[0]);
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }
    const imagesUrls = await Promise.all(fileUploadPromises);
    dispatch(setImagesToActiveNote(imagesUrls));
  };
};

export const startDeletingNote = () => {
  return async (dispatch: any, getState: any) => {
    const { user } = getState().auth;
    const { active: noteActive } = getState().journal;
    const noteToFirestore = { ...noteActive.note };
    const docRef = doc(
      FirebaseDB,
      `${user.uid}/journal/notes/${noteActive.note.id}`
    );
    await deleteDoc(docRef);
    dispatch(deleteNoteById(noteToFirestore.id));
  };
};
