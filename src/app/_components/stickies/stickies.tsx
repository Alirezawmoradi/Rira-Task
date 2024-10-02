'use client'
import React, {useState, useEffect, useRef} from "react";
import {IoColorPalette} from "react-icons/io5";
import {StickiesTypes} from "@/app/_components/stickies/stickies.types";
import {colors} from "@/app/utils/colors";
import {MdDelete} from "react-icons/md";
import {FiEdit} from "react-icons/fi";
import {Textarea} from "@/app/_components/text-area/text-area";
import {useNoteStore} from "@/stores/sticky-note/useNoteStore";
import {useDrag, useDrop} from "react-dnd";
import {TbDragDrop2} from "react-icons/tb";

export const Stickies: React.FC<StickiesTypes> = ({id, text, handleDelete, handleEdit}: StickiesTypes) => {
    const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

    const [isDropping, setIsDropping] = useState(false);

    const note = useNoteStore((state) => state.notes.find((note) => note.id === id));
    const {toggleEditing, changeColor, moveNote} = useNoteStore((state) => state.actions);

    const [updatedText, setUpdatedText] = useState(text);

    const cardRef = useRef<HTMLDivElement | null>(null);

    const ITEM_TYPE = 'STICKY_NOTE';


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                toggleEditing(id, false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [cardRef]);


    const [{isDragging}, drag] = useDrag({
        type: ITEM_TYPE,
        item: {id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover: (draggedItem: { id: number }) => {
            if (draggedItem.id !== id) {
                moveNote(draggedItem.id, id);
                setIsDropping(true);

                cardRef.current?.classList.add('sliding');

                setTimeout(() => {
                    setIsDropping(false);
                    cardRef.current?.classList.remove('sliding');
                }, 500);
            }
        },
        drop: () => {
            setIsDropping(false);
        },
    });

    drag(drop(cardRef));

    const handleColorChange = (newColor: string) => {
        changeColor(id, newColor);
        setIsColorPickerVisible(false);
    };

    return (
        <div
            ref={cardRef}
            className={`flex flex-col w-5/6 h-64 p-6 relative m-4 text-center shadow-lg transform rounded-xl transition-all duration-500 
            ${note?.color}
             ${isDragging ? 'opacity-75 scale-105' : ''}
             ${isDropping ? 'sliding' : ''}`}
        >
            <div
                className={`absolute top-2 right-2 cursor-grabbing ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            >
                <TbDragDrop2 size={18} className="text-gray-500 hover:text-gray-800 transition-colors duration-300"/>
            </div>

            <div className='flex mt-2 justify-start items-start text-start w-full h-full relative'>
                {note?.isEditing ? (
                    <Textarea
                        value={updatedText}
                        onChange={setUpdatedText}
                        onBlur={() => {
                            handleEdit(id, updatedText);
                            toggleEditing(id, false);
                        }}
                        handleEnterKey={() => {
                            handleEdit(id, updatedText);
                            toggleEditing(id, false);
                        }}
                    />
                ) : (
                    <p className={`${note?.color !== 'bg-yellow-200' ? 'text-gray-200' : ''} transition-all duration-500 break-all`}>{updatedText}</p>
                )}
            </div>
            <div
                className="flex justify-center border rounded-2xl bg-gray-200 items-center absolute bottom-2 right-2 p-1 px-2 cursor-pointer gap-2">

                <IoColorPalette className='text-gray-900 hover:text-gray-700 transition-colors duration-300'
                                onClick={() => setIsColorPickerVisible(!isColorPickerVisible)} size={20}/>
                <MdDelete className='text-red-600 hover:text-red-700 transition-colors duration-300' size={20}
                          onClick={() => handleDelete(id)}
                />
                <FiEdit className='text-gray-800 hover:text-gray-700 transition-colors duration-300' size={20}
                        onClick={() => toggleEditing(id, true)}
                />
            </div>
            {isColorPickerVisible && (
                <div className="absolute bottom-10 right-2 flex space-x-2 p-2 bg-white shadow-lg rounded-lg">
                    {colors.map((colorClass, index) => (
                        <div
                            key={index}
                            className={`w-6 h-6 rounded-full cursor-pointer ${colorClass}
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                            `}
                            onClick={() => handleColorChange(colorClass)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
