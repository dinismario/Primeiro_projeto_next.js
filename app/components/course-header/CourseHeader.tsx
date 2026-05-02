'use client';
import {MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { ContentCopy } from "./components/CopyContext";


export const CourseHeader = () =>{

    return(

    <div className="flex flex-col gap-2">
        <h1 className="font-extrabold text-xl">
            Curso de Figma para DEVs    
        </h1>
        
        <CollapsibleText numberOfLineswhenClosed={3}>   
           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           obis sint cupiditate necessitatibus aliquam consequatur 
           magnam commodi dolorum officia iusto? Quae doloremque 
           saepe facere quisquam veniam possimus nostrum praesentium, 
           aliquam eveniet.
           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           obis sint cupiditate necessitatibus aliquam consequatur 
           magnam commodi dolorum officia iusto? Quae doloremque 
           saepe facere quisquam veniam possimus nostrum praesentium, 
           aliquam eveniet.
           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           obis sint cupiditate necessitatibus aliquam consequatur 
           magnam commodi dolorum officia iusto? Quae doloremque 
           saepe facere quisquam veniam possimus nostrum praesentium, 
           aliquam eveniet.
           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           obis sint cupiditate necessitatibus aliquam consequatur 
           magnam commodi dolorum officia iusto? Quae doloremque 
           saepe facere quisquam veniam possimus nostrum praesentium, 
           aliquam eveniet.
        </CollapsibleText>

        <div className="flex gap-2 items-center">

           <ContentCopy title='Copie o conteúdo abaixo' content='https://www.youtube.com/watch?v=4rSPV1NbM10&list=PL29TaWXah3iZqMoLjUU8EoKXQXjuc50F1'>
             <button className="py-2 px-4 bg-neutral-800 rounded-full flex gap-2 items-center">
                <MdShare/>
                Compartilhar 
            </button>
            </ContentCopy>

            <span>
                48 aulas
            </span>
        </div>
    </div>
    );
};