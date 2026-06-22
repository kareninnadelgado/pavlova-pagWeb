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

const maestrasRAD = [
  {
    id: 'maestra-1',
    rol: 'DIRECTORA ARTÍSTICA',
    nombre: 'Nombre de la Maestra 1, RAD RTS',
    descripcion: 'Años de trayectoria internacional, pedagogía avanzada y especialista en la formación integral de bailarines bajo la metodología RAD.',
    imagen: '/maestra1.jpg',
  },
  {
    id: 'maestra-2',
    rol: 'FACULTAD SENIOR',
    nombre: 'Nombre de la Maestra 2, RAD RTS',
    descripcion: 'Especialista en niveles iniciales y vocacionales, comprometida con la excelencia técnica, la musicalidad y el desarrollo artístico.',
    imagen: '/maestra2.jpg',
  },
];

export default function MaestrasPage() {
  return (
    <div className={`${inter.className} bg-white min-h-screen text-gray-800 antialiased pt-[60px]`}>
      
      <Navbar />

      {/* Encabezado principal */}
      <header className="bg-white pt-20 pb-20 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Bloque Izquierdo*/}
          <div className="md:col-span-7 space-y-6 text-left">
            <h1 className={`${ebGaramond.className} titulo-seccion text-left`}>
              Garantía de excelencia y seguridad en el salón de clases.
            </h1>

            <p className="cuerpo-texto-xl">
              Detrás de cada gran bailarín hay un maestro excepcional. En nuestra escuela, la enseñanza va más allá de marcar pasos; cuidamos la salud física, el desarrollo emocional y el crecimiento artístico de cada alumno. Contar con la certificación de la Royal Academy of Dance (RAD) es nuestra mayor garantía.
            </p>
          </div>

          {/* Bloque Derecho */}
          <div className="md:col-span-5">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/5] bg-gray-50 rounded-sm overflow-hidden border border-gray-200/60 shadow-sm">
              <img 
                src="/maestras.jpg" 
                alt="Enseñanza de danza clásica RAD" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </header>

      {/* Mestra Rad */}
      <section className="bg-[#f3f3f3] border-t border-b border-gray-100 py-20 px-6">
        <main className="max-w-5xl mx-auto space-y-24">
          
          {/* PRESTIGIO Y PEDAGOGÍA */}
          <section className="space-y-8">
            <div className="border-b border-gray-200/60 pb-6 space-y-4">
              <span className="seccion-etiqueta-roja">
                PRESTIGIO Y PEDAGOGÍA
              </span>
              <h2 className={`${ebGaramond.className} titulo-seccion`}>
                ¿Qué significa ser una Maestra Certificada RAD?
              </h2>
              <p className="cuerpo-texto-xl pt-2">
                Ser una Maestra Registrada ante la RAD (Registered Teacher Status - RTS) significa poseer una de las acreditaciones más rigurosas y respetadas en el mundo de la danza clásica. No cualquiera puede enseñar este método; nuestras maestras han pasado por años de formación universitaria y evaluaciones pedagógicas directas desde Londres.
              </p>
              <p className="cuerpo-texto-xl">
                Una maestra RAD no solo domina la técnica del ballet, sino que es una especialista en:
              </p>
            </div>

            {/* Tarjetas de Especialidad */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200/40 rounded-sm p-6 space-y-3 shadow-sm">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase block">
                  Anatomía y Kinesiología
                </span>
                <p className="cuerpo-texto">
                  Entiende el cuerpo de los niños y jóvenes, sabiendo exactamente qué movimientos son seguros para cada edad sin arriesgar sus articulaciones o crecimiento.
                </p>
              </div>

              <div className="bg-white border border-gray-200/40 rounded-sm p-6 space-y-3 shadow-sm">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase block">
                  Psicología del Desarrollo
                </span>
                <p className="cuerpo-texto">
                  Sabe cómo motivar, corregir con amabilidad y estructurar una clase para que sea tan divertida para una niña de 4 años como desafiante para una joven de 16.
                </p>
              </div>

              <div className="bg-white border border-gray-200/40 rounded-sm p-6 space-y-3 shadow-sm">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase block">
                  Actualización Continua
                </span>
                <p className="cuerpo-texto">
                  La RAD exige a sus maestras activas un programa obligatorio de desarrollo profesional anual. Esto garantiza que nuestras aulas siempre estén alineadas con las últimas metodologías de enseñanza mundial.
                </p>
              </div>
            </div>
          </section>

          {/* LA DIFERENCIA RAD */}
          <section className="space-y-8">
            <div className="border-b border-gray-200/60 pb-6 space-y-4">
              <span className="seccion-etiqueta-roja">
                LA DIFERENCIA RAD
              </span>
              <h2 className={`${ebGaramond.className} titulo-seccion`}>
                Los Beneficios de Entrenar con el Sello RAD
              </h2>
              <p className="cuerpo-texto-xl pt-2">
                Aprender ballet bajo esta metodología internacional marca una diferencia que tus hijos llevarán para toda la vida. These are the key benefits offered by our school:
              </p>
            </div>

            {/* Cuadro de Beneficios */}
            <div className="bg-white border border-gray-200/40 rounded-sm p-6 md:p-8 shadow-sm space-y-6">
              <span className="text-xs font-bold tracking-wider text-gray-400 uppercase block border-b border-gray-100 pb-2">
                Beneficios Clave del Método
              </span>
              
              <ul className="space-y-5">
                <li className="cuerpo-texto flex items-start gap-3">
                  <span className="text-[#dc2626] font-bold text-base mt-0.5 shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-950 font-semibold block sm:inline">Evaluaciones con Validez Internacional:</strong> Cada año, tus hijos tienen la oportunidad de presentar exámenes oficiales. Sinodales enviados directamente por la RAD de Londres viajan a nuestra escuela para evaluarlos, otorgándoles boletas de calificaciones y certificados con validez global.
                  </div>
                </li>

                <li className="cuerpo-texto flex items-start gap-3">
                  <span className="text-[#dc2626] font-bold text-base mt-0.5 shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-950 font-semibold block sm:inline">Un Camino Seguro y Progresivo:</strong> El plan de estudios está perfectamente estructurado paso a paso. Ningún alumno es forzado a realizar movimientos para los que su cuerpo no esté físicamente maduro (como el uso prematuro de zapatillas de punta), previniendo lesiones graves.
                  </div>
                </li>

                <li className="cuerpo-texto flex items-start gap-3">
                  <span className="text-[#dc2626] font-bold text-base mt-0.5 shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-950 font-semibold block sm:inline">Desarrollo de Habilidades para la Vida:</strong> Más allá de formar bailarines, el método RAD cultiva la disciplina, la memoria, la resiliencia, el trabajo en equipo y una profunda apreciación musical y artística.
                  </div>
                </li>

                <li className="cuerpo-texto flex items-start gap-3">
                  <span className="text-[#dc2626] font-bold text-base mt-0.5 shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-950 font-semibold block sm:inline">Portafolio de Créditos Escolares:</strong> En muchos sistemas educativos internacionales, las certificaciones de los grados superiores de la RAD de Londres otorgan créditos académicos oficiales válidos para preparatorias y universidades.
                  </div>
                </li>
              </ul>
            </div>
          </section>

        </main>
      </section>

      {/* Maestras */}
      <section className="bg-[#f9f9f9] py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="flex items-center justify-center gap-6 pb-4">
            <div className="w-16 h-[1px] bg-[#dc2626]"></div>
            <span className="seccion-etiqueta-roja !mb-0 text-center">
              MAESTRAS RAD
            </span>
            <div className="w-16 h-[1px] bg-[#dc2626]"></div>
          </div>

          {/* Cuadrícula de 2 espacios */}
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
            {maestrasRAD.map((maestra) => (
              <div 
                key={maestra.id} 
                className="bg-white border border-gray-200/50 rounded-sm shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                {/* Foto */}
                <div className="w-full aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img 
                    src={maestra.imagen} 
                    alt={maestra.nombre} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                  />
                </div>

                {/* Textos de la tarjeta */}
                <div className="p-6 md:p-8 space-y-3 bg-white flex-grow border-t border-gray-50">
                  <span className="text-[10px] font-bold tracking-widest text-[#dc2626] uppercase block">
                    {maestra.rol}
                  </span>

                  <h3 className={`${ebGaramond.className} text-xl md:text-2xl text-gray-900 font-bold leading-tight`}>
                    {maestra.nombre}
                  </h3>

                  <p className="cuerpo-texto pt-1">
                    {maestra.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}