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
  
  // Estado para controlar qué pregunta frecuente está abierta (por defecto la primera)
  const [preguntasAbiertas, setPreguntasAbiertas] = useState<number | null>(0);

  const togglePregunta = (index: number) => {
    setPreguntasAbiertas(preguntasAbiertas === index ? null : index);
  };

  const diapositivas = [
    {
      titulo: "Formación Clásica \n Desde 1984",
      subtitulo: "Casi cuatro décadas inspirando el arte",
      imagen: "/carrusel1.jpg"
    },
    {
      titulo: "Donde la pasión \n inspira vidas",
      subtitulo: "Exámenes oficiales de la Royal Academy of Dance",
      imagen: "/carrusel2.jpg"
    },
    {
      titulo: "Formando bailarines, \n el Movimiento",
      subtitulo: "Clases para todas las edades y niveles",
      imagen: "/carrusel3.jpeg"
    }
  ];

  // Arreglo con la información de las Preguntas Frecuentes adaptado a tu formato
  const faqSecciones = [
    {
      titulo: "¿A qué edad pueden ingresar las niñas y niños?",
      subtitulo: "EDADES DE INGRESO",
      contenido: "Recibimos alumnas y alumnos desde los 3 años en adelante para nuestro grupo de Pre-Primary. No se requiere experiencia previa para los grados iniciales, ya que llevamos un proceso formativo paso a paso."
    },
    {
      titulo: "¿Qué es la certificación RAD y por qué es importante?",
      subtitulo: "MÉTODO INTERNACIONAL",
      contenido: "La Royal Academy of Dance (RAD) de Londres es una de las organizaciones de danza más prestigiosas del mundo. Estudiar con este método garantiza que la enseñanza es segura, profesional y que los exámenes anuales tienen validez internacional."
    },
    {
      titulo: "¿Ofrecen clases de muestra o inducción?",
      subtitulo: "CLASE DE PRUEBA",
      contenido: "¡Sí! Sabemos que iniciar en el ballet es una decisión importante. Ofrecemos una clase muestra sin costo para que tu hija o hijo experimente la dinámica del salón, conozca a la maestra y evalúemos el grupo ideal para su nivel. Puedes agendarla desde nuestra sección de Contacto."
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

      {/* Carrusel */}
      <section className="relative h-[700px] bg-gray-900 overflow-hidden flex flex-col justify-center items-center text-center px-4 pt-[70px]">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={diapositivas[fotoActiva].imagen} 
            alt="Ballet Pavlova" 
            className="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000" 
          /> 
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-white max-w-3xl">
          <h2 className={`${ebGaramond.className} titulo-principal whitespace-pre-line`}>
            {diapositivas[fotoActiva].titulo}
          </h2>
          <div className="w-16 h-[2px] bg-[#dc2626] my-6 mx-auto"></div>
          <p className="subtitulo-carrusel">{diapositivas[fotoActiva].subtitulo}</p>
          
          <div className="flex justify-center space-x-3 mt-12">
            {diapositivas.map((_, indice) => (
              <button
                key={indice}
                onClick={() => setFotoActiva(indice)} 
                className={`h-[3px] transition-all duration-300 ${
                  fotoActiva === indice ? 'w-10 bg-[#dc2626]' : 'w-6 bg-gray-400/60 hover:bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Logo Pavlova */}
        <div className="absolute bottom-[-50px] left-[-50px] z-20 w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-85 hover:opacity-100 transition-opacity duration-300">
          <img 
            src="/LogoPavlova.png" 
            alt="Sello Pavlova Colima" 
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-zinc-200 shadow-xl overflow-hidden aspect-square relative w-full h-full min-h-[400px] rounded-sm">
          <img src="/QuienesSomos.png" alt="Instalaciones Pavlova" className="w-full h-full object-cover absolute inset-0" />
        </div>
        <div className="space-y-6">
          <span className="seccion-etiqueta-roja">Sobre Nosotros</span>
          <h3 className={`${ebGaramond.className} titulo-seccion`}>¿Qué es la RAD?</h3>
          <p className="cuerpo-texto-xl">
            Somos una escuela certificada por la Royal Academy of Dance (RAD) de Londres, uno de los organismos de educación y formación en danza más influyentes del mundo. Nuestro objetivo es enseñar ballet con una metodología segura, progresiva y divertida.
          </p>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="bg-white pb-24 px-6 border-t border-gray-100 pt-16">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Encabezado de la sección */}
          <div className="text-center space-y-2 mb-10">
            <span className="seccion-etiqueta-roja text-xs md:text-sm">
              RESOLVEMOS TUS DUDAS
            </span>
            <h2 className={`${ebGaramond.className} text-2xl md:text-3xl text-[#6b1d2f] font-semibold`}>
              Preguntas Frecuentes
            </h2>
            <div className="w-12 h-[2px] bg-[#dc2626] mx-auto mt-2"></div>
          </div>

          {/* Acordeón dinámico */}
          <div className="space-y-3">
            {faqSecciones.map((sec, idx) => {
              const estaAbierto = preguntasAbiertas === idx;

              return (
                <div 
                  key={idx} 
                  className="border-b border-gray-200 pb-3 transition-all duration-300"
                >
                  <button
                    onClick={() => togglePregunta(idx)}
                    className="w-full flex items-center justify-between text-left py-4 group"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="seccion-etiqueta-roja text-xs md:text-sm">
                        {sec.subtitulo}
                      </span>
                      <h3 className={`${ebGaramond.className} text-base md:text-lg text-gray-900 font-semibold group-hover:text-[#6b1d2f] transition-colors`}>
                        {sec.titulo}
                      </h3>
                    </div>

                    {/* Icono de flecha */}
                    <span className={`text-[#dc2626] transition-transform duration-300 shrink-0 ${estaAbierto ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      estaAbierto ? 'max-h-[300px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-2 border-t border-gray-50 mt-1">
                      <p className="cuerpo-texto text-gray-600 font-light leading-relaxed">
                        {sec.contenido}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}