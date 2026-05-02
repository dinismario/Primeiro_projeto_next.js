'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdMenu, MdOutlineOpenInNew } from 'react-icons/md';

export const Header = () =>{    
    const currentPatch = usePathname();
    const [title, setTitle] = useState('CodarSe');
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        setTitle(document.title);
        setDrawer(false);
    }, [currentPatch]);

    useEffect(() =>{
        const handle = (e:KeyboardEvent) =>{
            if(e.key === 'Escape'){
               setDrawer(false); 
            }
        };
        window.addEventListener('keydown', handle);
        return () => window.removeEventListener('keydown', handle);
    }, [])

    return(
        <>
            <nav className='flex items-center gap-6 justify-start fixed top-0 right-0 left-0 md:justify-center bg-emerald-700 py-2 sm:py-4 px-6'>
            <button className='sm:hidden' onClick={() => setDrawer(true)}>
                <MdMenu size={24}/>
            </button>

            <ul className='flex gap-4 items-center' tabIndex={drawer ? -1 : undefined}>
                <li className='my-2'>
                    <Link href='/' className='border-2 rounded-md py-2 px-2 font-bolder'>
                    CORDASE
                    </Link>
                </li>

                <li className='hidden sm:block'>
                    <Link href='/' data-active ={currentPatch === '/'} className = 'data-[active=true]:underline outline-offset-4'>
                    Página Inicial
                    </Link>
                </li>

                <li className='hidden sm:block'>
                    <Link href='/cursos' data-active ={currentPatch === '/cursos'} className = 'data-[active=true]:underline outline-offset-4'>
                    Cursos
                    </Link>
                </li>

                <li className='hidden sm:block'>
                    <Link href="#" target='_blank' className='flex gap-1.5 items-center outline-offset-4'>
                    Blog
                    <MdOutlineOpenInNew/>
                    </Link>
                </li>
             </ul> 

        <div 
        data-open ={drawer}
        tabIndex={drawer ? undefined : -1}
        onClick={() => setDrawer(false)}
        className='sm:hidden bg-gradient-to-r from-black fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full'>
             <ul className='flex gap-4 flex-col p-4 w-60 h-full bg-black' onClick={e => e.stopPropagation()}> 
                 <li className=''>
                    <Link href='/' data-active ={currentPatch === '/'} className = 'data-[active=true]:underline'>
                    Página Inicial
                    </Link>
                </li>

                <li className=''>
                    <Link href='/cursos' data-active ={currentPatch === '/cursos'} className = 'data-[active=true]:underline'>
                    Cursos
                    </Link>
                </li>

                <li className=''>
                    <Link href="#" target='_blank' className='flex gap-1.5 items-center'>
                    Blog
                    <MdOutlineOpenInNew/>
                    </Link>
                </li>
            </ul> 
        </div>
            <h1 className='sm:hidden line-clamp-1'>
                {title}
            </h1>
            </nav>
            <div className='h-12 sm:h-18'/>
        </>
    );
};
