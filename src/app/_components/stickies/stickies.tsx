'use client'
import React, {useState} from "react";
import {IoClose, IoColorPalette} from "react-icons/io5";
import {StickiesTypes} from "@/app/_components/stickies/stickies.types";
import {colors} from "@/app/utils/colors";
import {MdDelete} from "react-icons/md";
import {FiEdit} from "react-icons/fi";

export const Stickies: React.FC<StickiesTypes> = ({id, text}: StickiesTypes) => {
    const [color, setColor] = useState<string>('bg-yellow-200');
    const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

    const handleColorChange = (newColor: string) => {
        setColor(newColor);
        setIsColorPickerVisible(false);
    };
    return (
        <div
            className={`flex flex-col w-5/6 h-64 p-6 relative m-4 text-center shadow-lg transform rounded-xl transition-colors duration-300 ${color}`}
        >
            <div className='flex mt-2 justify-start items-start text-start'>
                <p className={`${color != 'bg-yellow-200' ? 'text-gray-200' : ''} transition-colors duration-300`}>{text}</p>
            </div>
            <div className="flex justify-center items-center absolute bottom-2 right-2 p-2 cursor-pointer gap-2">
                <FiEdit className='text-gray-900 hover:text-gray-700 transition-colors duration-300' size={22}/>
                <MdDelete  className='text-gray-900 hover:text-gray-700 transition-colors duration-300' size={22}/>
                <IoColorPalette className='text-gray-900 hover:text-gray-700 transition-colors duration-300'
                                onClick={() => setIsColorPickerVisible(!isColorPickerVisible)} size={22}/>
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
    )
}