import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";




export const KeepWatching = () =>{

    return(
        <Link 
        href={'/player/{courseId}/{classId}'}
        className="p-4 mx-4 flex gap-2 bg-emerald-900 rounded-2xl !no-underline hover:!no-underline"
        >
            <div className="flex flex-col gap-2 flex-1">
               <h1 className="font-bold line-clamp-1">NextJS, TailwindCSS e Typescript: #02 - Apresentação do código fonte</h1>
               <p className="line-clamp-1">NextJS, TailwindCSS e Typescript</p> 
            </div>

            <div className="flex gap-2 items-center justify-center">
                <span className="hidden md:block">Continuar assistindo</span>
                 <MdPlayCircle size={28}/>
            </div>
           
        </Link>
    );
};