import {create} from "zustand";
import {NotesState} from "@/stores/sticky-note/note.types";
import {colors} from "@/app/utils/colors";
import {state} from "sucrase/dist/types/parser/traverser/base";

export const useNoteStore = create<NotesState>((set) => ({
    notes: [
        {id: 1, text: "test", isEditing: false, color: colors[0]},
        {id: 2, text: "test", isEditing: false, color: colors[1]},
        {id: 3, text: "test", isEditing: false, color: colors[2]}
    ],

    actions: {

        addNote: (text: string) => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            set((state) => ({
                notes: [...state.notes, {id: state.notes.length + 1, text, isEditing: true, color: randomColor}],
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

        changeColor: (id: number, color: string) => {
            set((state) => ({
                notes: state.notes.map((note) => note.id === id ? {...note, color: color} : note),
            }))
        }
    }
}))