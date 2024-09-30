import React from "react";
import { Stickies } from "@/app/_components/stickies/stickies";

export const StickyNote: React.FC = () => {
    return (
        <div className=' container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-20'>
            <Stickies id={1} text={'test'} />
        </div>
    );
}
