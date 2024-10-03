import {create} from "zustand";
import {NotesState} from "@/stores/sticky-note/note.types";
import {colors} from "@/app/utils/colors";
import {persist} from "zustand/middleware";

export const useNoteStore = create(persist<NotesState>(
    (set) => ({
        notes: [
            {id: 1, text: "Create you first note", isEditing: false, color: colors[0], createdAt: new Date(), deadline: null},
        ],

        actions: {

            addNote: (text: string) => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                set((state) => ({
                    notes: [...state.notes, {
                        id: state.notes.length + 1,
                        text,
                        isEditing: true,
                        color: randomColor,
                        createdAt: new Date(),
                        deadline: null
                    }],
                }))
            },

            deleteNote: (id: number) => set((state) => ({
                notes: state.notes.filter((note) => note.id !== id),
            })),

            updateNote: (id: number, newText: string) => set((state) => ({
                notes: state.notes.map((note) => note.id === id ? {...note, text: newText} : note),
            })),

            toggleEditing: (id: number, isEditing: boolean) =>
                set((state) => ({
                    notes: state.notes.map((note) =>
                        note.id === id ? {...note, isEditing} : note
                    ),
                })),

            changeColor: (id: number, color: string) =>
                set((state) => ({
                    notes: state.notes.map((note) => note.id === id ? {...note, color: color} : note),
                })),

            moveNote: (draggedId, targetId) =>
                set((state) => {
                    const draggedNoteIndex = state.notes.findIndex(note => note.id === draggedId);
                    const targetNoteIndex = state.notes.findIndex(note => note.id === targetId);

                    const updatedNotes = [...state.notes];
                    const [draggedNote] = updatedNotes.splice(draggedNoteIndex, 1);
                    updatedNotes.splice(targetNoteIndex, 0, draggedNote);

                    return {notes: updatedNotes};
                }),

            setDeadline: (id, deadline) => set((state) => ({
                notes: state.notes.map((note) => note.id === id ? {...note, deadline} : note),
            }))

        }
    }),
    {
        name: "local-note",
        onRehydrateStorage: () => (state) => {
            if (state) {
                state.notes = state.notes.map(note => ({
                    ...note,
                    createdAt: new Date(note.createdAt),
                    deadline: note.deadline ? new Date(note.deadline) : null
                }));
            }
        },
        partialize: (state) =>
            Object.fromEntries(
                Object.entries(state).filter(([key]) => !['actions'].includes(key)),
            ) as NotesState,
    }
))