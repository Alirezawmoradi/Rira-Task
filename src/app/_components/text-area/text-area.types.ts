interface TextareaProps {
    id: number;
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    handleEnterKey: () => void;
}