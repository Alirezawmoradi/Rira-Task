'use client'
import React, {useState} from "react";
import {Stickies} from "@/app/_components/stickies/stickies";
import {useNoteStore} from "@/stores/sticky-note/useNoteStore";
import {Button} from "@/app/_components/button/button";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

export const StickyNote: React.FC = () => {
    const {notes} = useNoteStore();
    const {addNote, deleteNote, updateNote} = useNoteStore((state) => state.actions);

    return (
        <div className='container mt-20'>
            <div className="flex justify-center mb-8">
                <Button buttonText={'Add New Note'} onClick={() => addNote('')}/>
            </div>
            <div
                className=' container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-20'>
                {
                    notes.map((note) => {
                        return (
                            <div className='flex flex-col items-center' key={note.id}>
                                <DndProvider backend={HTML5Backend}>
                                    <Stickies text={note.text} id={note.id} handleDelete={deleteNote}
                                              handleEdit={updateNote}/>
                                </DndProvider>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
