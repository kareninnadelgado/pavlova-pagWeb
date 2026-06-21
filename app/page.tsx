'use client'; 

import { useState, useEffect } from 'react';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  const [fotoActiva, setFotoActiva] = useState(0);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const diapositivas = [
    {
      titulo: "Formación Clásica \n Desde 1984",
      subtitulo: "Casi cuatro décadas inspirando el arte",
      imagen: "/carrusel1.jpg"
    },
    {
      titulo: "Donde la pasión \n inspirando vidas",
      subtitulo: "Exámenes oficiales de la Royal Academy of Dance",
      imagen: "/carrusel2.jpg"
    },
    {
      titulo: "Formando bailarines, \n el Movimiento",
      subtitulo: "Clases para todas las edades y niveles",
      imagen: "/carrusel3.avif"
    }
  ];

  useEffect(() => {
    const temporizador = setInterval(() => {
      setFotoActiva((prev) => (prev + 1) % diapositivas.length);
    }, 5000); 
    return () => clearInterval(temporizador); 
  }, [diapositivas.length]);

  return (
    <div className={`${ebGaramond.className} bg-white min-h-screen text-gray-800 antialiased relative overflow-x-hidden`}>
      
      {/* Barra de arriba */}
      <nav className="border-b border-gray-100 py-4 px-6 flex justify-between items-center bg-white fixed top-0 left-0 w-full z-40 shadow-sm">
        <div 
          onClick={() => setMenuAbierto(true)}
          className="flex items-center space-x-2 text-base uppercase tracking-widest font-semibold text-gray-500 cursor-pointer hover:text-red-700 transition-colors"
        >
          <span>☰</span> <span>Menú</span>
        </div>
        
        <div className="text-center">
          <h1 className="text-xl md:text-2xl tracking-wider text-amber-900 font-bold uppercase">
            Pavlova Colima
          </h1>
        </div>
        
        <div className="w-16 h-16 relative flex items-center justify-center">
          <img src="/LogoRoyal.jpeg" alt="Royal Academy of Dance Logo" className="object-contain max-h-full max-w-full" />
        </div>
      </nav>

      {/* Menú lateral */}
      <div 
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ${menuAbierto ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuAbierto(false)}
      />

      <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 p-8 shadow-2xl transition-transform duration-300 ease-in-out transform ${menuAbierto ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end mb-10">
          <button onClick={() => setMenuAbierto(false)} className="text-gray-400 hover:text-gray-800 text-xs tracking-widest uppercase">
            Cerrar ✕
          </button>
        </div>
        <ul className="flex flex-col space-y-6 text-lg tracking-widest uppercase text-gray-600 font-medium">
          <li className="hover:text-red-700 hover:translate-x-2 transform transition-all duration-200 cursor-pointer" onClick={() => setMenuAbierto(false)}>Grados</li>
          <li className="hover:text-red-700 hover:translate-x-2 transform transition-all duration-200 cursor-pointer" onClick={() => setMenuAbierto(false)}>Maestras</li>
          <li className="hover:text-red-700 hover:translate-x-2 transform transition-all duration-200 cursor-pointer" onClick={() => setMenuAbierto(false)}>Exámenes</li>
          <li className="hover:text-red-700 hover:translate-x-2 transform transition-all duration-200 cursor-pointer" onClick={() => setMenuAbierto(false)}>Fotos</li>
          <li className="hover:text-red-700 hover:translate-x-2 transform transition-all duration-200 cursor-pointer" onClick={() => setMenuAbierto(false)}>Contactos</li>
          <li className="hover:text-red-700 hover:translate-x-2 transform transition-all duration-200 cursor-pointer" onClick={() => setMenuAbierto(false)}>Nuestra Historia</li>
        </ul>
      </div>

      {/* Carrusel*/}
      <section className="relative h-[750px] bg-gray-900 overflow-hidden flex flex-col justify-center items-center text-center px-4 pt-[70px]">
        <div className="absolute inset-0 w-full h-full">
          <img src={diapositivas[fotoActiva].imagen} alt="Ballet Pavlova" className="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000" /> 
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-white max-w-3xl">
          <h2 className="titulo-principal">{diapositivas[fotoActiva].titulo}</h2>
          <div className="w-16 h-[2px] bg-red-600 my-6 mx-auto"></div>
          <p className="subtitulo-carrusel">{diapositivas[fotoActiva].subtitulo}</p>
          
          <div className="flex justify-center space-x-3 mt-12">
            {diapositivas.map((_, indice) => (
              <button
                key={indice}
                onClick={() => setFotoActiva(indice)} 
                className={`h-[3px] transition-all duration-300 ${fotoActiva === indice ? 'w-10 bg-red-600' : 'w-6 bg-gray-400/60 hover:bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-zinc-200 shadow-xl overflow-hidden aspect-square relative w-full h-full min-h-[400px]">
          <img src="/QuienesSomos.png" alt="Instalaciones Pavlova" className="w-full h-full object-cover absolute inset-0" />
        </div>
        <div className="space-y-6">
          <span className="seccion-etiqueta-roja">Sobre Nosotros</span>
          <h3 className="titulo-seccion">¿Qué es la RAD?</h3>
          <p className="cuerpo-texto-xl">
            Somos una escuela certificada por la Royal Academy of Dance (RAD) de Londres, uno de los organismos de educación y formación en danza más influyentes del mundo. Nuestro objetivo es enseñar ballet con una metodología segura, progresiva y divertida.
          </p>
          <button className="boton-elegante">Nuestra Historia</button>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-gray-100 text-center py-14 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <h4 className="text-sm tracking-widest uppercase font-bold text-amber-900">
            Pavlova Royal Academy
          </h4>

          <div className="flex justify-center items-start gap-16 pt-2">
            {/* Insta */}
            <a href="https://www.instagram.com/pavlovacolima?igsh=MTh6ZG94N2w4MW91NQ==" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group text-gray-600 hover:text-red-700 transition-colors">
              <svg className="w-5 h-5 mb-2 transition-transform group-hover:scale-105 duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Insta</span>
            </a>
            
            {/* Facebook */}
            <a href="https://www.facebook.com/share/18sfqJJKg3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group text-gray-600 hover:text-red-700 transition-colors">
              <svg className="w-5 h-5 mb-2 transition-transform group-hover:scale-105 duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Facebook</span>
            </a>

            {/* Telefono */}
            <div className="flex flex-col items-center text-gray-600">
              <svg className="w-5 h-5 mb-2 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">(312) 123-4567</span>
            </div>
          </div>
          
          <div className="text-[9px] text-gray-600 tracking-wider pt-6 border-t border-gray-200/50">
            <p>© 2026 PAVLOVA ROYAL ACADEMY. TODOS LOS DERECHOS RESERVADOS.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}