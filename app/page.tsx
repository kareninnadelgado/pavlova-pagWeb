'use client'; 

import { useState, useEffect } from 'react';
import { EB_Garamond, Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function Home() {
  const [fotoActiva, setFotoActiva] = useState(0);

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
      imagen: "/carrusel3.jpeg"
    }
  ];

  useEffect(() => {
    const temporizador = setInterval(() => {
      setFotoActiva((prev) => (prev + 1) % diapositivas.length);
    }, 5000); 
    return () => clearInterval(temporizador); 
  }, [diapositivas.length]);

  return (
    <div className={`${inter.className} bg-white min-h-screen text-gray-800 antialiased relative overflow-x-hidden`}>
      
      <Navbar/>

      {/* Carrusel*/}
      <section className="relative h-[700px] bg-gray-900 overflow-hidden flex flex-col justify-center items-center text-center px-4 pt-[70px]">
        <div className="absolute inset-0 w-full h-full">
          <img src={diapositivas[fotoActiva].imagen} alt="Ballet Pavlova" className="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000" /> 
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-white max-w-3xl">
          <h2 className={`${ebGaramond.className} titulo-principal`}>{diapositivas[fotoActiva].titulo}</h2>
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

        {/* Logo pavlova */}
        <div className="absolute bottom-[-50px] left-[-50px] z-20 w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-85 hover:opacity-100 transition-opacity duration-300">
          <img 
            src="/LogoPavlova.png" 
            alt="Sello Pavlova Colima" 
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-zinc-200 shadow-xl overflow-hidden aspect-square relative w-full h-full min-h-[400px]">
          <img src="/QuienesSomos.png" alt="Instalaciones Pavlova" className="w-full h-full object-cover absolute inset-0" />
        </div>
        <div className="space-y-6">
          <span className="seccion-etiqueta-roja">Sobre Nosotros</span>
          <h3 className={`${ebGaramond.className} titulo-seccion`}>¿Qué es la RAD?</h3>
          <p className="cuerpo-texto-xl">
            Somos una escuela certificada por la Royal Academy of Dance (RAD) de Londres, uno de los organismos de educación y formación en danza más influyentes del mundo. Nuestro objetivo es enseñar ballet con una metodología segura, progresiva y divertida.
          </p>
          <button className="boton-elegante">Nuestra Historia</button>
        </div>
      </section>

      {/* Pie de página */}
      <Footer />
    </div>

  );
}