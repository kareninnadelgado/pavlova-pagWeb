'use client';

import { EB_Garamond, Inter } from 'next/font/google';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function GaleriaPage() {
  const imagenes = [
    {
      src: '/clase-examen.jpg',
      alt: 'Alumnas en clase grupal con maestra',
      clase: 'md:col-span-8 md:row-span-2 aspect-[4/3] md:aspect-auto',
    },
    {
      src: '/examenes-hero.jpg',
      alt: 'Zapatillas de ballet en punta',
      clase: 'md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto',
    },
    {
      src: '/galeria-salto-varon.jpg',
      alt: 'Bailarín ejecutando un salto junto al ventanal',
      clase: 'md:col-span-5 md:row-span-3 aspect-[3/4] md:aspect-auto',
    },
    {
      src: '/galeria-salto-bailarina.jpg',
      alt: 'Bailarina suspendida en salto clásico',
      clase: 'md:col-span-7 md:row-span-3 aspect-[4/5] md:aspect-auto',
    }
  ];

  return (
    <div className={`${inter.className} bg-white min-h-screen text-gray-800 antialiased pt-[60px]`}>
      
      <Navbar />

      {/* ================= ENCABEZADO DE LA GALERÍA ================= */}
      <header className="pt-20 pb-16 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Título principal limpio y estilizado */}
          <h1 className={`${ebGaramond.className} titulo-principal text-[#6b1d2f]`}>
            Galería
          </h1>
          {/* Línea decorativa roja institucional */}
          <div className="w-12 h-[2px] bg-[#dc2626] mx-auto mt-2"></div>
        </div>
      </header>

      {/* ================= REJILLA ASIMÉTRICA (BENTO GRID) ================= */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:auto-rows-[180px]">
          
          {imagenes.map((img, idx) => (
            <div
              key={idx}
              className={`${img.clase} group relative bg-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 rounded-sm`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

        </div>
      </main>

      <Footer />

    </div>
  );
}