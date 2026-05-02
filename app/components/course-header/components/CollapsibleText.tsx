'use client'
import React, { useState } from "react";

interface ICollapsibleTextProps{
    numberOfLineswhenClosed: number;
    children: React.ReactNode;
}

export const CollapsibleText = ({children, numberOfLineswhenClosed}: ICollapsibleTextProps) =>{
    const [open, setOpen] = useState(false);


    return(
    <div className="flex flex-col items-end">        
        <p 
        data-open={open}
        className='data-[open=false]:line-clamp-[var(--number-of-lines-when-closed)]'
        style={{'--number-of-lines-when-closed': numberOfLineswhenClosed} as any}
        > 
        {children}
        </p>

        <button 
        className="px-1 bg-neutral-800 border border-b-gray-800 data-[open=false]:-mt-7"
        onClick={() => setOpen(!open)}
        >
            {open ? 'Ver menos' : 'Ver mais'}
        </button>
    </div>
    );
};