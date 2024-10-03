'use client';
import React, {useRef, useEffect} from 'react';
import {useNoteStore} from "@/stores/sticky-note/useNoteStore";

export const Textarea: React.FC<TextareaProps> = ({
                                                      id,
                                                      value,
                                                      onChange,
                                                      onBlur,
                                                      handleEnterKey,
                                                  }) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const note = useNoteStore((state) => state.notes.find((note) => note.id === id));

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, []);

    return (
        <textarea
            ref={textareaRef}
            className={`bg-transparent outline-none font-semibold w-full h-full p-0 m-0 focus:ring-0 border-none resize-none overflow-hidden transition-colors duration-200 ease-in-out focus:border-none  ${note!.color==='bg-yellow-200'?'text-gray-800':'text-gray-200'}`}
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
