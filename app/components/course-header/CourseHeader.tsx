'use client';

import {MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { ContentCopy } from "./components/CopyContext";


interface ICourseHeaderProps{
    title: string;
    description: string;
    numberOfClsses: number;
}

export const CourseHeader = ({title, description, numberOfClsses}: ICourseHeaderProps) =>{

    return(

    <div className="flex flex-col gap-2">
        <h1 className="font-extrabold text-xl">
            {title}  
        </h1>
        
        <CollapsibleText numberOfLineswhenClosed={3}>   
           {description}
        </CollapsibleText>

        <div className="flex gap-2 items-center">

           <ContentCopy title='Copie o conteúdo abaixo' content={window.location.href}>
             <button className="py-2 px-4 bg-neutral-800 rounded-full flex gap-2 items-center">
                <MdShare/>
                Compartilhar 
            </button>
            </ContentCopy>
            <span>
                {numberOfClsses} aulas
            </span>
        </div>
    </div>
    );
};