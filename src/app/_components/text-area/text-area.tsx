'use client';
import React, { useRef, useEffect } from 'react';

export const Textarea: React.FC<TextareaProps> = ({
                                                                      value,
                                                                      onChange,
                                                                      onBlur,
                                                                      handleEnterKey,
                                                                  }) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, []);

    return (
        <textarea
            ref={textareaRef}
            className="bg-transparent outline-none font-semibold w-full h-full p-0 m-0 focus:ring-0 border-none resize-none overflow-hidden transition-colors duration-200 ease-in-out focus:border-none text-blue-700"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder='Type a text here...'
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleEnterKey();
                }
            }}
            style={{
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
            }}
        />
    );
};
