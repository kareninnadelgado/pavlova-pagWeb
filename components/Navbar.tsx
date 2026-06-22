'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { EB_Garamond } from 'next/font/google';
import Link from 'next/link';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Navbar() {
  const pathname = usePathname();
  const [movilAbierto, setMovilAbierto] = useState(false);

  // Agregado 'Inicio' al principio para que sea totalmente explícito y visible
  const rutas = [
    { nombre: 'Inicio', path: '/' },
    { nombre: 'Grados', path: '/grados' },
    { nombre: 'Maestras', path: '/maestras' },
    { nombre: 'Examenes', path: '/examenes' },
    { nombre: 'Nuestra Historia', path: '/historia' },
    { nombre: 'Galeria', path: '/galeria' },
    { nombre: 'Contacto', path: '/contacto' }, // Corregido de /contactos a /contacto para hacer match con tu archivo
  ];
  
  return (
    <>
      <nav className="border-b border-gray-100 py-3 px-6 md:px-8 flex justify-between items-center bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
        
        {/* Logo Royal y Nombre - Ahora Desvinculados (Sin Link ni cursor-pointer) */}
        <div className="flex items-center space-x-3 select-none">
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
        </div>

        {/* Opciones (Menú Escritorio Dinámico) */}
        <ul className="hidden md:flex items-center space-x-8 text-sm tracking-[0.2em] font-medium uppercase">
          {rutas.map((ruta) => {
            // Validación exacta para evitar que "Inicio" se quede rojo en otras páginas
            const estaActivo = pathname === ruta.path;
            
            return (
              <li 
                key={ruta.path}
                className={`hover:text-[#dc2626] hover:scale-110 transition-all cursor-pointer duration-200 font-bold ${
                  estaActivo ? 'text-[#dc2626] scale-110' : 'text-gray-600'
                }`}
              >
                <Link href={ruta.path}>{ruta.nombre}</Link>
              </li>
            );
          })}
        </ul>

        {/* Menú pantalla pequeña */}
        <button 
          onClick={() => setMovilAbierto(!movilAbierto)}
          className="md:hidden p-2 text-gray-600 hover:text-[#6b1d2f] text-2xl focus:outline-none"
        >
          {movilAbierto ? '✕' : '☰'}
        </button>
      </nav>

      {/* Menu desplegable (Menú Móvil Dinámico) */}
      <div className={`fixed top-[65px] left-0 w-full bg-white border-b border-gray-200 shadow-lg z-40 md:hidden transition-all duration-300 ease-in-out ${movilAbierto ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'}`}>
        <ul className="flex flex-col p-6 space-y-4 text-xs tracking-[0.2em] font-bold uppercase">
          {rutas.map((ruta, index) => {
            const estaActivo = pathname === ruta.path;
            const esUltimo = index === rutas.length - 1;

            return (
              <li 
                key={ruta.path}
                onClick={() => setMovilAbierto(false)} 
                className={`hover:text-[#dc2626] py-2 cursor-pointer ${
                  esUltimo ? '' : 'border-b border-gray-50'
                } ${estaActivo ? 'text-[#dc2626]' : 'text-gray-600'}`}
              >
                <Link href={ruta.path}>{ruta.nombre}</Link>   
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}