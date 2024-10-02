export type NotesState = {
    notes: Note[];
    actions: {
        addNote: (text: string) => void;
        deleteNote: (id: number) => void;
        updateNote: (id: number, newText: string) => void;
        toggleEditing: (id: number, isEditing: boolean) => void;
        changeColor: (id: number, color: string) => void;
        moveNote: (draggedId: number, targetId: number) => void;
    }
};

type Note = {
    id: number;
    text: string;
    isEditing: boolean;
    color: string;
};