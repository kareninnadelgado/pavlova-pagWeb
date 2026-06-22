'use client';

import { useState } from 'react';
import { EB_Garamond } from 'next/font/google';
import Link from 'next/link';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [movilAbierto, setMovilAbierto] = useState(false);

  return (
    <>
      <nav className="border-b border-gray-100 py-3 px-6 md:px-8 flex justify-between items-center bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
        
        {/* Logo Royal y Nombre */}
        <Link href ="/" className="flex items-center space-x-3 cursor-pointer">
         <div className="w-10 h-10 relative flex items-center justify-center shrink-0">
            <img 
              src="/LogoRoyal.jpeg" 
              alt="Royal Academy of Dance Logo" 
              className="object-contain max-h-full max-w-full" 
            />
          </div>
          <h1 className={`${ebGaramond.className} text-xl md:text-2xl tracking-wider text-[#6b1d2f] font-bold uppercase`}>
            Pavlova Royal Academy
          </h1>
        </Link>

        {/* Opciones */}
        <ul className="hidden md:flex items-center space-x-8 text-sm tracking-[0.2em] font-medium text-gray-600 uppercase">
          <li className="hover:text-[#dc2626] hover:scale-110 transition-all cursor-pointer duration-200 font-bold">
            <Link href="/grados">Grados</Link>
          </li>
          <li className="hover:text-[#dc2626] hover:scale-110 transition-all cursor-pointer duration-200 font-bold">
           <Link href="/maestras">Maestras</Link>
          </li>
          <li className="hover:text-[#dc2626] hover:scale-110 transition-all cursor-pointer duration-200 font-bold">
            <Link href="/historia">Nuestra Historia</Link>
          </li>
          <li className="hover:text-[#dc2626] hover:scale-110 transition-all cursor-pointer duration-200 font-bold">
            <Link href="/galeria">Galeria</Link>
          </li>
          <li className="hover:text-[#dc2626] hover:scale-110 transition-all cursor-pointer duration-200 font-bold">
            <Link href="/contactos">Contacto</Link>
          </li>
        </ul>

        {/* Menú pantalla pequeña */}
        <button 
          onClick={() => setMovilAbierto(!movilAbierto)}
          className="md:hidden p-2 text-gray-600 hover:text-[#6b1d2f] text-2xl focus:outline-none"
        >
          {movilAbierto ? '✕' : '☰'}
        </button>
      </nav>

      {/* Menu desplegable */}
      <div className={`fixed top-[65px] left-0 w-full bg-white border-b border-gray-200 shadow-lg z-40 md:hidden transition-all duration-300 ease-in-out ${movilAbierto ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'}`}>
        <ul className="flex flex-col p-6 space-y-4 text-xs tracking-[0.2em] font-bold text-gray-600 uppercase">
          <li onClick={() => setMovilAbierto(false)} className="hover:text-[#dc2626] py-2 border-b border-gray-50 cursor-pointer">
            <Link href="/grados">Grados</Link>  
          </li>
          <li onClick={() => setMovilAbierto(false)} className="hover:text-[#dc2626] py-2 border-b border-gray-50 cursor-pointer">
            <Link href="/maestras">Maestras</Link>         
          </li>
          <li onClick={() => setMovilAbierto(false)} className="hover:text-[#dc2626] py-2 border-b border-gray-50 cursor-pointer">
            <Link href="/historia">Nuestra Historia</Link>         
          </li>
          <li onClick={() => setMovilAbierto(false)} className="hover:text-[#dc2626] py-2 border-b border-gray-50 cursor-pointer">
            <Link href="/galeria">Galeria</Link>          
          </li>
          <li onClick={() => setMovilAbierto(false)} className="hover:text-[#dc2626] py-2 cursor-pointer">
            <Link href="/contactos">Contacto</Link>         
          </li>
        </ul>
      </div>
    </>
  );
}