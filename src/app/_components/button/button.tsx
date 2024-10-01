export const Button: React.FC<ButtonProps> = ({
                                                  buttonText,
                                                  onClick,
                                                  className = '',
                                              }) => {
    return (
        <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-400 transition-all ${className}`}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};