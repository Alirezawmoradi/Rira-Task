import {BiPlus} from "react-icons/bi";
import React from "react";

export const AddButton: React.FC<ButtonProps> = ({
                                                  buttonText,
                                                  onClick,
                                                  className = '',
                                              }) => {
    return (
        <div
            className={`flex flex-col w-5/6 h-64 p-6 relative bg-purple-700/50 hover:bg-purple-500/50 m-4 text-center shadow-lg transform rounded-xl transition-all duration-500 sliding ${className}`}>
            <p className='text-sm text-gray-700 mt-2 font-bold'>{buttonText}</p>
            <div className='flex flex-col h-full items-center justify-center text-gray-800'>
                <BiPlus
                    className='font-extrabold rounded-full p-1 cursor-pointer bg-gray-700/70 hover:bg-gray-500 transition-all duration-500 text-gray-200 text-3xl animate-bounce'
                    onClick={onClick}
                />
            </div>
        </div>
    );
};