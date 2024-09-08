import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header(){

    const [toggleMenu,setToggleMenu]=useState(false);

    return <header className="flex justify-between px-5 py-3 bg-secondary">
            <a href="#" className="font-bold text-black">Jeevitha Dhanasekaran</a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a href="/">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#resume">RESUME</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className="block md:hidden ">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                    <li><a href="/">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#resume">RESUME</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>}
        <button className='block md:hidden' onClick={()=>setToggleMenu(!toggleMenu)}><Bars3Icon className='text-white h-5'/></button>
        </header>
}