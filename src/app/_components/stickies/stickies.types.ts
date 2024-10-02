export type StickiesTypes = {
    id: number;
    text: string;
    handleDelete: (id: number) => void;
    handleEdit: (id: number, text: string) => void;
}