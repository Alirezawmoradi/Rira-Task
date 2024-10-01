interface TextareaProps {
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    handleEnterKey: () => void;
}