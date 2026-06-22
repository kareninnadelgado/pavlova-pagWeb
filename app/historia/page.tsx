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

export default function HistoriaPage() {
  return (
    <div className={`${inter.className} bg-white min-h-screen text-gray-800 antialiased pt-[60px]`}>
      
      <Navbar />

      {/* ================= ENCABEZADO PRINCIPAL ================= */}
      <header className="pt-20 pb-16 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="seccion-etiqueta-roja text-xs md:text-sm">
            NUESTRA HISTORIA
          </span>
          {/* Se aplicó la clase 'titulo-principal' para igualar el grosor y estilo visual de los otros títulos */}
          <h1 className={`${ebGaramond.className} titulo-principal text-[#6b1d2f]`}>
            Una Danza a través del Tiempo
          </h1>
          <p className="text-gray-500 italic font-light text-sm md:text-base max-w-xl mx-auto pt-2 border-t border-gray-100 mt-4">
            "Para nosotros la danza no es solo movimiento, es una forma de expresión que transforma vidas."
          </p>
        </div>
      </header>

      {/* ================= CONTENEDOR DE LA LÍNEA DE TIEMPO VERTICAL ================= */}
      <main className="max-w-5xl mx-auto px-6 pb-28 relative">
        
        {/* Línea divisoria central decorativa */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-red-200/60 transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-24 md:space-y-32 relative">

          {/* BLOCK 1: EL ORIGEN (Imagen Izquierda - Texto Derecha) */}
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            {/* Imagen Izquierda */}
            <div className="flex justify-center md:justify-start order-1">
              <div className="w-full max-w-md aspect-square bg-gray-50 border border-gray-200 shadow-sm overflow-hidden rounded-sm relative">
                <img 
                  src="/historia-origen.jpg" 
                  alt="Origen Pavlova Colima" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b border-r border-gray-200/80 -z-10 hidden md:block"></div>
              </div>
            </div>

            {/* Texto Derecha */}
            <div className="space-y-4 md:pl-8 order-2">
              <span className="seccion-etiqueta-roja text-xs">EL INICIO</span>
              <h2 className={`${ebGaramond.className} titulo-seccion`}>El Origen</h2>
              <p className="cuerpo-texto">
                Nuestra historia comenzó en el año 2012. Inspirada por la legendaria bailarina Anna Pavlova y su capacidad para conmover al mundo, la escuela abrió sus puertas en una pequeña sala equipada con apenas una barra de madera y un gran espejo, pero con una visión gigante: convertirse en el referente de ballet clásico en Colima.
              </p>
              <blockquote className="border-l-2 border-[#dc2626] pl-4 py-1 italic text-xs text-gray-500 max-w-sm">
                "Bastar un gran espejo y una barra de madera para iniciar un gran proyecto."
              </blockquote>
            </div>
          </div>

          {/* BLOCK 2: CRECIMIENTO Y EXCELENCIA (Texto Izquierda - Imagen Derecha) */}
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            {/* Texto Izquierda */}
            <div className="space-y-4 md:pr-8 text-left md:text-right order-2 md:order-1">
              <span className="seccion-etiqueta-roja text-xs">ACREDITACIÓN</span>
              <h2 className={`${ebGaramond.className} titulo-seccion`}>Crecimiento y Excelencia</h2>
              <p className="cuerpo-texto">
                Desde el primer día, el objetivo no fue solo enseñar coreografías, sino buscar la certificación internacional de la <strong className="text-gray-900 font-medium">Royal Academy of Dance</strong>. Tras años de auditorías y capacitación constante, logramos el estatus de escuela registrada, permitiendo que el talento colimense sea evaluado bajo estándares de nivel europeo.
              </p>
            </div>

            {/* Imagen Derecha */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="w-full max-w-md aspect-square bg-gray-50 border border-gray-200 shadow-sm overflow-hidden rounded-sm relative">
                <img 
                  src="/historia-crecimiento.jpg" 
                  alt="Zapatillas de punta en Pavlova" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute -top-3 -left-3 w-24 h-24 border-t border-l border-gray-200/80 -z-10 hidden md:block"></div>
              </div>
            </div>
          </div>

          {/* BLOCK 3: LIDERAZGO CON PASIÓN / LEGADO (Imagen Izquierda - Texto Derecha) */}
          <div className="grid md:grid-cols-2 gap-12 items-start relative">
            {/* Imagen Izquierda (Perfil + Currículum) */}
            <div className="flex flex-col items-center md:items-start order-1 space-y-6">
              <div className="w-full max-w-md aspect-[4/5] bg-gray-50 border border-gray-200 shadow-sm overflow-hidden rounded-sm">
                <img 
                  src="/directora-perfil.jpg" 
                  alt="Directora de Pavlova Colima" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bloque de Trayectoria Profesional */}
              <div className="w-full max-w-md bg-gray-50/60 border border-gray-200/60 p-6 rounded-sm space-y-4">
                <h4 className={`${ebGaramond.className} text-base font-bold text-[#6b1d2f] tracking-wide border-b border-gray-200 pb-2 uppercase`}>
                  Trayectoria Profesional
                </h4>
                <ul className="space-y-3">
                  <li className="text-xs md:text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#dc2626] font-bold mt-0.5">▪</span>
                    <span><strong className="text-gray-900 font-medium">Licenciatura en Danza Clásica:</strong> Egresada con honores de la Escuela Nacional de Danza (México).</span>
                  </li>
                  <li className="text-xs md:text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#dc2626] font-bold mt-0.5">▪</span>
                    <span><strong className="text-gray-900 font-medium">Certificación RAD (RTS):</strong> Maestra Registrada ante la Royal Academy of Dance de Londres (Registro No. 554321).</span>
                  </li>
                  <li className="text-xs md:text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#dc2626] font-bold mt-0.5">▪</span>
                    <span><strong className="text-gray-900 font-medium">Especialidad en Primera Infancia:</strong> Diplomada en el método Dance to Your Own Tune de la RAD en Inglaterra.</span>
                  </li>
                  <li className="text-xs md:text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#dc2626] font-bold mt-0.5">▪</span>
                    <span><strong className="text-gray-900 font-medium">Coreógrafa Destacada:</strong> Directora de más de 20 producciones locales, incluyendo El Cascanueces presentadas en los teatros más importantes de Colima.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Texto Derecha (Directora) */}
            <div className="space-y-4 md:pl-8 order-2 md:sticky md:top-24">
              <span className="seccion-etiqueta-roja text-xs">DIRECTORA ARTÍSTICA</span>
              <h2 className={`${ebGaramond.className} titulo-seccion`}>Legado en Movimiento</h2>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  Maestra [Nombre de tu Maestra]
                </p>
                <div className="w-8 h-[1px] bg-[#dc2626]"></div>
              </div>

              <p className="cuerpo-texto">
                Fundadora y Directora Artística de Pavlova Colima, es una apasionada de la pedagogía de la danza con más de 15 años de trayectoria en los escenarios y las aulas.
              </p>
              <p className="cuerpo-texto">
                Su filosofía se basa en que el rigor técnico del ballet jamás debe estar peleado con la salud emocional y la felicidad del alumno. Para ella, el salón de clases es un santuario donde se construyen personas seguras, disciplinadas y sensibles al arte. 
              </p>
              <p className="cuerpo-texto">
                Bajo su dirección, Pavlova Colima ha mantenido una tasa de aprobación del 100% en los exámenes internacionales de la RAD, consolidando un legado de excelencia en el estado.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}