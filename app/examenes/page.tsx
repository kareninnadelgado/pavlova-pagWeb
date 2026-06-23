'use client';

import { useState } from 'react';
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

export default function ExamenesPage() {
  // Estado para controlar qué sección del acordeón está abierta (por defecto la primera)
  const [acordeonAbierto, setAcordeonAbierto] = useState<number | null>(0);

  const toggleAcordeon = (index: number) => {
    setAcordeonAbierto(acordeonAbierto === index ? null : index);
  };

  const secciones = [
    {
      titulo: "¿Cómo es el día del examen?",
      subtitulo: "LA DINÁMICA EN EL SALÓN",
      introduccion: "Olvídate de la idea de un examen frío y estresante. La RAD cuida muchísimo la atmósfera para que las alumnas se sientan seguras y den lo mejor de sí:",
      contenido: (
        <ul className="space-y-4 mt-2">
          <li className="cuerpo-texto">
            <strong className="text-gray-900 font-medium">Grupos Pequeños:</strong> Las alumnas entran al salón en grupos de máximo 4 niñas. Esto garantiza que la evaluación sea totalmente personalizada y que no se sientan abrumadas.
          </li>
          <li className="cuerpo-texto">
            <strong className="text-gray-900 font-medium">Enfoque en Equipo:</strong> Durante el examen, bailan juntas las secuencias que practicaron en clase. Se apoyan mutuamente, lo que transforma el examen en una experiencia de compañerismo.
          </li>
          <li className="cuerpo-texto">
            <strong className="text-gray-900 font-medium">El Salón a Puerta Cerrada:</strong> Para evitar distracciones y cuidar la concentración, solo entran las candidatas, la examinadora y el pianista (o la música oficial). Ni los papás ni las maestras están presentes, permitiendo que las niñas se empoderen de su propio espacio.
          </li>
        </ul>
      )
    },
    {
      titulo: "¿Quiénes son los Examinadores RAD?",
      subtitulo: "SINODALES INTERNACIONALES",
      introduccion: "El prestigio de la Royal Academy of Dance radica en la imparcialidad y el nivel de sus jueces:",
      contenido: (
        <ul className="space-y-4 mt-2">
          <li className="cuerpo-texto">
            <strong className="text-gray-900 font-medium">Expertos de todo el Mundo:</strong> Las examinadoras son un panel selecto de profesionales de la danza que viajan desde diferentes países (Reino Unido, Canadá, Australia, Europa) exclusivamente a evaluar a nuestras alumnas.
          </li>
          <li className="cuerpo-texto">
            <strong className="text-gray-900 font-medium">Criterio Unificado:</strong> Una niña evaluada en nuestra escuela recibe exactamente la misma calidad de revisión y exigencia que una niña que presenta su examen en Londres o Tokio.
          </li>
          <li className="cuerpo-texto">
            <strong className="text-gray-900 font-medium">¿Cómo se llega a ser Examinadora?</strong> El proceso es sumamente estricto. Se requiere haber sido una bailarina o maestra de trayectoria impecable, pasar por filtros rigurosos de selección en el Reino Unido y completar un entrenamiento continuo en psicología infantil y criterios de evaluación médica y técnica.
          </li>
        </ul>
      )
    },
    {
      titulo: "Calificaciones y Reconocimientos",
      subtitulo: "EL SISTEMA DE EVALUACIÓN",
      introduccion: "La RAD no solo evalúa si el paso 'salió bien o mal'. Se miden tres áreas de forma muy completa: Técnica (colocación y fuerza), Musicalidad (ritmo y tiempo) y Ejecución Performance (expresión y gracia). Al terminar, cada alumna recibe desde Londres una boleta detallada con sus puntos y su medalla oficial. El sistema de puntajes se divide así:",
      contenido: (
        <div className="space-y-4 mt-3">
          <div className="p-3 bg-red-50/30 border-l-2 border-red-700 rounded-r-sm">
            <p className="cuerpo-texto">
              <strong className="text-red-900 font-semibold block mb-0.5">Distinction (Distinción | 75 - 100 puntos)</strong>
              La calificación más alta. Indica que la alumna domina la técnica con un nivel excepcional de musicalidad, fluidez y una presencia artística brillante.
            </p>
          </div>
          <div className="p-3 bg-gray-50 border-l-2 border-gray-400 rounded-r-sm">
            <p className="cuerpo-texto">
              <strong className="text-gray-900 font-semibold block mb-0.5">Merit (Mérito | 55 - 74 puntos)</strong>
              Una calificación excelente. Demuestra que la alumna tiene una base técnica muy sólida, buena coordinación y ejecuta sus coreografías con confianza y ritmo correcto.
            </p>
          </div>
          <div className="p-3 bg-gray-50 border-l-2 border-gray-300 rounded-r-sm">
            <p className="cuerpo-texto">
              <strong className="text-gray-800 font-semibold block mb-0.5">Pass (Aprobado | 40 - 54 puntos)</strong>
              ¡Logro alcanzado! Significa que la alumna cumple con los requisitos necesarios del grado para avanzar con seguridad al siguiente nivel.
            </p>
          </div>
        </div>
      )
    },
    {
      titulo: "¿Qué reciben las alumnas al aprobar?",
      subtitulo: "UN DETALLE EXTRA",
      introduccion: "Para cerrar el bloque con broche de oro, el esfuerzo internacional de las alumnas es recompensado con los reconocimientos oficiales enviados directamente desde el Reino Unido:",
      contenido: (
        <ul className="space-y-4 mt-2">
          <li className="cuerpo-texto">
            <strong className="text-gray-900 font-medium">Certificado Oficial:</strong> Un diploma impreso desde las oficinas centrales de la RAD en Londres, con el nombre de la alumna, el grado aprobado y la firma de las autoridades globales de la academia.
          </li>
          <li className="cuerpo-texto">
            <strong className="text-gray-900 font-medium">La Medalla de Grado:</strong> Una medalla conmemorativa oficial de la RAD (el color de la cinta cambia según la etapa del currículo), que las alumnas guardan como su tesoro más preciado y que simboliza su éxito internacional.
          </li>
        </ul>
      )
    }
  ];

  return (
    <div className={`${inter.className} bg-white min-h-screen text-gray-800 antialiased pt-[60px]`}>
      
      <Navbar />

      {/* HERO PRINCIPAL  */}
      <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-start bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/examen.webp" 
            alt="Zapatillas de ballet RAD Exámenes" 
            className="w-full h-full object-cover opacity-45 brightness-95"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 w-full space-y-5">
          <span className="subtitulo-carrusel block text-white/90">
            ROYAL ACADEMY OF DANCE
          </span>
          
          <h1 className={`${ebGaramond.className} titulo-principal`}>
            Exámenes RAD
          </h1>
          
          <p className="text-gray-200 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
            Nuestra academia se enorgullece de seguir los estándares internacionales de la Royal Academy of Dance (Londres). Un proceso de evaluación globalmente reconocido que fomenta la excelencia técnica y artística.
          </p>
        </div>
      </div>

      {/* Texto de introducción*/}
      <section className="bg-white py-16 md:py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className={`${ebGaramond.className} titulo-seccion`}>
            Excelencia en cada paso
          </h2>
          
          <div className="w-12 h-[2px] bg-[#dc2626] mx-auto mt-2"></div>
          
          <p className="cuerpo-texto-xl max-w-2xl mx-auto pt-4 text-gray-600 font-light">
            Los exámenes anuales de la RAD son una experiencia maravillosa y un gran logro en la vida de cada bailarina. Más que una prueba, son una celebración del esfuerzo de todo el año, diseñados para motivar a las alumnas, elevar su autoestima y recompensar su dedicación con una certificación oficial de validez mundial.
          </p>
        </div>
      </section>

      {/*secciones*/}
      <section className="bg-white pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          
          {/* Acordeón interactivo */}
          <div className="md:col-span-7 lg:col-span-7 space-y-3 order-2 md:order-1">
            {secciones.map((sec, idx) => {
              const estaAbierto = acordeonAbierto === idx;

              return (
                <div 
                  key={idx} 
                  className="border-b border-gray-200 pb-3 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAcordeon(idx)}
                    className="w-full flex items-center justify-between text-left py-4 group"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="seccion-etiqueta-roja text-xs md:text-sm">
                        {sec.subtitulo}
                      </span>
                      <h3 className={`${ebGaramond.className} text-lg md:text-xl text-gray-900 font-semibold group-hover:text-[#6b1d2f] transition-colors`}>
                        {sec.titulo}
                      </h3>
                    </div>

                    <span className={`text-[#dc2626] transition-transform duration-300 shrink-0 ${estaAbierto ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      estaAbierto ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-2 border-t border-gray-50 mt-1">
                      <p className="cuerpo-texto text-gray-600 font-light mb-3">
                        {sec.introduccion}
                      </p>
                      {sec.contenido}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Imagen derecha */}
          <div className="md:col-span-5 lg:col-span-5 order-1 md:order-2">
            <div className="w-full aspect-[4/3] md:aspect-[4/5] bg-gray-100 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
              <img 
                src="/examen2.jpg" 
                alt="Alumnas en clase de ballet formal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}