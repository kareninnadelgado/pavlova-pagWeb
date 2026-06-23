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

const bloquesEstudios = [
  {
    id: 'bloque-1',
    titulo: 'PRIMERAS ETAPAS',
    subtitulo: 'Niveles Iniciales',
    descripcionGeneral: 'El viaje en la danza comienza despertando la imaginación. En estas etapas formativas, nos enfocamos del desarrollo de las habilidades motoras básicas, la musicalidad y la confianza física a través de dinámicas lúdicas pero rigurosamente estructuradas, preparando el cuerpo para el futuro entrenamiento técnico.',
    colorEtiqueta: 'bg-[#6b1d2f]',
    imagenBloque: '/primary.webp',
    grados: [
      {
        id: 'g-01',
        numero: '01',
        categoria: 'PRIMERA INFANCIA',
        nombre: 'Pre-School',
        descripcion: 'Diseñado para los más pequeños, este nivel celebra la alegría del movement libre. Se fomenta la expresión corporal y la autonomía de forma totalmente divertida.',
        puntos: [
          'Habilidades motrices gruesas: Caminar en puntas, correr con ligereza, marchar y saltar de forma coordinada.',
          'Conciencia espacial: Aprender a ubicarse en el salón, seguir trayectorias en círculo y respetar el espacio de los compañeros.',
          'Creatividad y ritmo: Interpretación de historias con música e imitación de movimientos de la naturaleza o animales.'
        ]
      },
      {
        id: 'g-02',
        numero: '02',
        categoria: 'INICIACIÓN TÉCNICA',
        nombre: 'Pre-Primary',
        descripcion: 'La transición perfecta hacia la estructura de una clase de ballet. Se introduce la disciplina básica del aula manteniendo un ambiente de juego y exploración.',
        puntos: [
          'Control del cuerpo: Desarrollo de la postura alineada, equilibrio en un solo pie y control del centro corporal.',
          'Coordinación física: Sincronización básica de brazos y piernas, y saltos continuos sobre ambos pies.',
          'Respuesta rítmica: Capacidad para identificar diferentes tempos musicales y reaccionar corporalmente a los cambios de ritmo.'
        ]
      },
      {
        id: 'g-03',
        numero: '03',
        categoria: 'FUNDAMENTOS',
        nombre: 'Primary',
        descripcion: 'El último peldaño de la iniciación. Aquí los alumnos consolidan las bases físicas y la terminología técnica elemental que requerirán en los Grados superiores.',
        puntos: [
          'Fortalecimiento muscular: Trabajo inicial en pies (articulación de empeines) y fortalecimiento de piernas para el despegue de saltos.',
          'Memoria coreográfica: Capacidad para recordar y ejecutar secuencias cortas de pasos de manera independiente.',
          'Expresividad escénica: Proyección de la mirada, uso de gestos expresivos y desarrollo de la presencia escénica formal.'
        ]
      }
    ]
  },
  {
    id: 'bloque-2',
    titulo: 'GRADOS INICIALES',
    subtitulo: 'Formación Base',
    descripcionGeneral: 'En esta etapa comienza el entrenamiento formal del ballet clásico. Los alumnos aprenden la rigurosidad de la técnica, la colocación en el espacio y se introducen en las danzas folclóricas del mundo, desarrollando una base física fuerte y una gran disciplina.',
    colorEtiqueta: 'bg-[#6b1d2f]',
    imagenBloque: '/grade1.webp',
    grados: [
      {
        id: 'g-04',
        numero: '04',
        categoria: 'Estructura Clásica',
        nombre: 'Grado 1',
        descripcion: 'El verdadero inicio de la estructura clásica. Se introduce formalmente el centro y el fascinante mundo de la danza teatral.',
        puntos: [
          'Introducción a la Danza de Carácter: Uso de zapatos y falda de carácter. Desarrolla ritmos complejos y la coordinación teatral mediante danzas folclóricas.',
          'Postura Básica: Enfoque en la alineación de la columna, el control del peso del cuerpo sobre los pies y la estabilidad inicial.',
          'Uso del Espacio: Comprensión de las direcciones del salón (frente y diagonales) para empezar a desplazarse con gracia.'
        ]
      },
      {
        id: 'g-05',
        numero: '05',
        categoria: 'Fluidez y Armonía',
        nombre: 'Grado 2',
        descripcion: 'Un nivel enfocado en dar fluidez y armonía al movimiento. La técnica se vuelve más detallada y se exige mayor precisión en los pies.',
        puntos: [
          'Trabajo de Pies (Battements): Desarrollo de la fuerza en los metatarsos y el empeine para lograr un estiramiento limpio de la pierna.',
          'Coordinación de Brazos (Port de Bras): Suavidad en el recorrido de los brazos coordinándolos con la mirada y ligeros movimientos del torso.',
          'Estilo Rítmico: En las danzas de carácter se introducen pasos típicos del folclor húngaro, retando la agilidad musical de la alumna.'
        ]
      },
      {
        id: 'g-06',
        numero: '06',
        categoria: 'Rigurosidad y Rotación',
        nombre: 'Grado 3',
        descripcion: 'Un escalón clave donde el ballet clásico se vuelve más riguroso. Se aumenta la exigencia física y se prepara a la alumna para movimientos con giros.',
        puntos: [
          'Preparación para Piruetas: Ejercicios específicos en la barra y el centro para encontrar el equilibrio sobre un solo pie en relevé.',
          'El "En Dehors" (Rotación): Trabajo consciente desde la articulación de la cadera para mantener las piernas rotadas correctamente hacia afuera.',
          'Danza de Carácter Avanzada: Introducción al estilo ucraniano, que requiere saltos rápidos, fuerza y una gran energía en el escenario.'
        ]
      },
      {
        id: 'g-07',
        numero: '07',
        categoria: 'Estilización del Movimiento',
        nombre: 'Grado 4',
        descripcion: 'La técnica se estiliza y los pasos se vuelven más largos y ligados. Se busca que la alumna deje de verse como principiante y empiece a lucir como una bailarina en formación.',
        puntos: [
          'Líneas Corporales (Arabesques): Enfoque en sostener la pierna en el aire hacia atrás manteniendo el torso erguido y elegante.',
          'Saltos Medianos (Allegro): Desarrollo de la potencia en los saltos, exigiendo que las piernas se estiren por completo en el aire y caigan con suavidad.',
          'Madurez Musical: Capacidad para bailar frases musicales más largas, interpretando los cambios de matiz en el piano.'
        ]
      },
      {
        id: 'g-08',
        numero: '08',
        categoria: 'Consolidación Académica',
        nombre: 'Grado 5',
        descripcion: 'La culminación de la primera etapa de grados académicos. Este nivel consolida todo lo aprendido, exigiendo una técnica limpia, fuerza y una presencia escénica segura.',
        puntos: [
          'Consolidación de Giros: Ejecución formal de piruetas en el centro controlando el inicio y el final del giro de manera limpia.',
          'Precisión en la Barra: Combinaciones más largas que desafían la memoria, la resistencia muscular y el control del eje corporal.',
          'Expresión Artística: Integración total de la mirada, la proyección del torso y la intención dramática en cada secuencia de examen.'
        ]
      }
    ]
  },
  {
    id: 'bloque-3',
    titulo: 'GRADOS SUPERIORES',
    subtitulo: 'Desarrollo Artístico Lírico',
    descripcionGeneral: 'Esta suite de niveles avanzados está destinada a desarrollar un movimiento poético, maduro y fluido. El enfoque principal se traslada hacia la interpretación dramática, el romanticismo y la conexión profunda entre la música y el cuerpo.',
    colorEtiqueta: 'bg-[#6b1d2f]',
    imagenBloque: '/grade6.webp',
    grados: [
      {
        id: 'g-09',
        numero: '09',
        categoria: 'Arte y Ligereza Lírica',
        nombre: 'Grado 6',
        descripcion: 'Un nivel bellísimo de corte lírico y romántico. Se asume que la técnica base está dominada, por lo que el enfoque se vuelca hacia el arte y la ligereza del movimiento.',
        puntos: [
          'Uso de Telas (Chiffon Scarves): Uso de lienzos de gasa ligeros para aprender a suavizar los brazos y visualizar la continuidad del movimiento.',
          'Estilo Clásico Romántico: Estudio de posturas inspiradas en ballets del siglo XIX, con uso expresivo de la cabeza y el torso inclinado.',
          'Control del Equilibrio: Sostener posiciones complejas en el centro durante varios segundos sin perder la línea elegante.'
        ]
      },
      {
        id: 'g-10',
        numero: '10',
        categoria: 'Interpretación Dramática',
        nombre: 'Grado 7',
        descripcion: 'La exigencia artística sube de nivel. El repertorio clásico se vuelve dramático, demandando una bailarina que transmita emociones complejas mientras ejecuta pasos de gran precisión.',
        puntos: [
          'Uso de Telas Avanzado: Coreografías con lienzos que incorporan dinámicas de saltos y giros, coordinando el accesorio con el espacio de forma perfecta.',
          'Trabajo de Adagio: Extensiones de piernas más altas controladas por la fuerza del abdomen, manteniendo la fluidez y respiración correcta.',
          'Variaciones de Estilo: Capacidad de transicionar entre la suavidad del ballet clásico lírico y la energía de las danzas de carácter clásicas.'
        ]
      },
      {
        id: 'g-11',
        numero: '11',
        categoria: 'Presentación Profesional Individual',
        nombre: 'Grado 8',
        descripcion: 'La cúspide de los grados generales. El examen se convierte en una presentation individual simulando una función real de ballet frente al sinodal internacional.',
        puntos: [
          'Solo Award (Examen Individual): La alumna realiza toda la sección de centro sola en el escenario, demostrando magnetismo, madurez y dominio absoluto.',
          'Refinamiento del Port de Bras: Máxima sofisticación en el movimiento de brazos, manos y cuello, logrando una estética profesional.',
          'Interpretación Escénica Superior: El alumno debe comportarse como un artista completo, demostrando que puede sostener la atención de una audiencia.'
        ]
      }
    ]
  },
  {
    id: 'bloque-4',
    titulo: 'NIVELES VOCACIONALES',
    subtitulo: 'Línea Profesional de Puntas',
    descripcionGeneral: 'Diseñado para alumnas con un alto compromiso que desean llevar el ballet a un nivel profesional o semi-profesional. Este exigente currículo introduce el uso diario de las zapatillas de punta y requiere condiciones físicas de alto rendimiento.',
    colorEtiqueta: 'bg-[#6b1d2f]',
    imagenBloque: '/inter.jpg',
    grados: [
      {
        id: 'g-12',
        numero: '12',
        categoria: 'Introducción al Alto Rendimiento',
        nombre: 'Intermediate Foundation',
        descripcion: 'La puerta de entrada al universo profesional de la RAD. Las clases aumentan en frecuencia semanal y se introducen las bases anatómicas para el uso de puntas.',
        puntos: [
          'Introducción a las Puntas: Trabajo inicial y minucioso en la barra para fortalecer tobillos, pantorrillas y los arcos de los pies de forma segura.',
          'Colocación Vocacional: Ajuste estricto del eje del cuerpo necesario para soportar el peso sobre la pequeña plataforma de las puntas.',
          'Giros Técnico: Práctica de giros en el centro con preparaciones formales de nivel profesional.'
        ]
      },
      {
        id: 'g-13',
        numero: '13',
        categoria: 'Consolidación de Puntas',
        nombre: 'Intermediate',
        descripcion: 'Un nivel de alta exigencia técnica donde el trabajo de puntas se traslada oficialmente al centro del salón y se requiere una musculatura muy fuerte.',
        puntos: [
          'Puntas en el Centro: Ejecución de pasos básicos, equilibrios y pequeños desplazamientos sin el soporte de la barra.',
          'Grand Allegro: Introducción a los grandes saltos que cruzan el salón, exigiendo potencia en el despegue y control en la caída.',
          'Vocabulario Profesional: Dominio completo de la terminología técnica internacional de ballet y combinaciones coreográficas complejas.'
        ]
      },
      {
        id: 'g-14',
        numero: '14',
        categoria: 'Virtuosismo y Velocidad',
        nombre: 'Advanced Foundation',
        descripcion: 'Un puente de perfeccionamiento técnico. Se pule la velocidad de los pies, la altura de las extensiones y se añade complejidad a los giros en puntas.',
        puntos: [
          'Virtuosismo en Giros: Piruetas dobles y giros continuos tanto en zapatillas de media punta como en zapatillas de punta.',
          'Velocidad de Pies (Batterie): Pasos de salto donde las piernas deben cruzarse o golpearse entre sí en el aire con máxima rapidez.',
          'Líneas de Élite: Búsqueda de la máxima extensión física permitida por la anatomía de la alumna de manera limpia y estética.'
        ]
      },
      {
        id: 'g-15',
        numero: '15',
        categoria: 'Calibre Profesional Avanzado',
        nombre: 'Advanced 1',
        descripcion: 'Nivel de calibre profesional avanzado. Preparación directa para audiciones en compañías o universidades de danza del mundo. La exigencia es absoluta.',
        puntos: [
          'Variaciones Clásicas de Repertorio: Ejecución de coreografías solistas inspiradas en el repertorio profesional clásico, manteniendo la resistencia física.',
          'Puntas Avanzadas: Giros, saltos y combinaciones rápidas sobre las puntas en el centro del salón.',
          'Consistencia Técnico: Capacidad para repetir secuencias de alta dificultad manteniendo la misma calidad, colocación y elegancia.'
        ]
      },
      {
        id: 'g-16',
        numero: '16',
        categoria: 'Máxima Perfección Escénica',
        nombre: 'Advanced 2',
        descripcion: 'El examen técnico más alto que ofrece la RAD. Diseñado para bailarines ready para pisar escenarios profesionales internacionales como solistas.',
        puntos: [
          'Madurez de Compañía: Demostración de una técnica impecable que ya no requiere correcciones básicas, enfocada en la perfección del detalle.',
          'Máxima Resistencia: Clases intensas que evalúan la fuerza cardiopulmonar para soportar variaciones completas de alta dificultad.',
          'Calificación de Distinción: Obtener la máxima nota en este nivel otorga el derecho de aspirar al galardón supremo de la RAD.'
        ]
      }
    ]
  },
  {
    id: 'bloque-5',
    titulo: 'BAILARINA PROFESIONAL',
    subtitulo: 'Graduación',
    descripcionGeneral: 'El honor más prestigioso del universo RAD. No es un grado de clase; es un examen-audición público sobre un escenario real frente a un panel de jueces internacionales.',
    colorEtiqueta: 'bg-[#6b1d2f]',
    imagenBloque: '/soloseal.jpg',
    grados: [
      {
        id: 'g-17',
        numero: '17',
        categoria: 'Examen de Gala Internacional',
        nombre: 'Solo Seal Award',
        descripcion: 'El honor más prestigioso del universo RAD. No es un grado de clase; es un examen-audición público sobre un escenario real frente a un panel de jueces internacionales.',
        puntos: [
          'Requisito Exclusivo: Solo pueden presentarse aquellas alumnas que hayan alcanzado la calificación de "Distinción" en el examen de Advanced 2.',
          'Formato de Gala: La candidata debe ejecutar secciones de técnica avanzada en el centro y tres variaciones solistas de ballets clásicos famosos vestida de gala.',
          'Pasaporte al Éxito: Ganar el Solo Seal es un sello internacional que valida a la bailarina ante directores de compañías de ballet de todo el mundo.'
        ]
      }
    ]
  }
];

export default function GradosPage() {
  const [gradoAbierto, setGradoAbierto] = useState<string | null>(null);

  return (
    <div className={`${inter.className} bg-white min-h-screen text-gray-800 antialiased pt-[60px]`}>
      
      <Navbar />

      {/* Encabezado */}
      <div className="bg-white">
        <header className="pt-20 pb-12 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className={`${ebGaramond.className} text-4xl md:text-5xl lg:text-6xl text-[#6b1d2f] font-semibold tracking-normal`}>
              Conoce Nuestros Grados
            </h1>
            
            <p className="text-gray-600 italic font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Descubre la excelencia técnica a través del currículo de la Royal Academy of Dance, una progresión artística diseñada para formar bailarines de clase mundial.
            </p>

            {/* Ajustado color de las líneas unificadoras a Rojo Vivo */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="w-12 h-[1px] bg-[#dc2626]"></div>
              <span className="seccion-etiqueta-roja !mb-0 text-center">
                Excelencia RAD
              </span>
              <div className="w-12 h-[1px] bg-[#dc2626]"></div>
            </div>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-6 pb-20 pt-8 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-8">
            <h2 className={`${ebGaramond.className} titulo-seccion text-left`}>
              Una trayectoria de disciplina y arte.
            </h2>
            <p className="cuerpo-texto-xl">
              Nuestro sistema educativo se basa en los estándares internacionales más rigurosos. Cada nivel está meticulosamente estructurado para desarrollar no solo la fuerza física y la técnica, sino también la musicalidad, la presencia escénica y la comprensión intelectual de la danza clásica.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div className="space-y-1">
                <span className={`${ebGaramond.className} text-3xl font-bold text-[#dc2626] block`}>17</span>
                <span className="text-[10px] tracking-widest text-gray-400 font-bold uppercase block">Niveles Académicos</span>
              </div>
              <div className="space-y-1">
                <span className={`${ebGaramond.className} text-3xl font-bold text-[#dc2626] block`}>RAD</span>
                <span className="text-[10px] tracking-widest text-gray-400 font-bold uppercase block">Certificación Global</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 relative pb-12 md:pb-0">
            <div className="w-full aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden border border-gray-200/60 shadow-sm flex items-center justify-center">
              <img src="/medallas.jpg" alt="Zapatillas de punta RAD" className="w-full h-full object-cover" /> 
            </div>

            <div className="absolute bottom-[-20px] left-4 md:left-[-40px] bg-white p-6 shadow-xl border border-gray-100 max-w-sm rounded-sm z-10">
              <p className="text-gray-950 italic text-sm font-medium leading-relaxed">
                "La danza es el lenguaje oculto del alma."
              </p>
              <span className="text-[9px] tracking-wider font-bold text-[#dc2626] uppercase block mt-3">
                — Martha Graham
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* bloques que cambian color*/}
      <div>
        {bloquesEstudios.map((bloque, index) => {
        
          const esGris = index % 2 === 0;
          
          return (
            <div 
              key={bloque.id} 
              className={`${esGris ? 'bg-[#f3f3f3] border-t border-b border-gray-200/40' : 'bg-white'} py-20 px-6 transition-colors duration-300`}
            >
              <section className="max-w-5xl mx-auto space-y-8">
                
                {/* Texto descriptivo + Foto del bloque */}
                <div className="grid md:grid-cols-3 gap-8 items-center border-b border-gray-300/60 pb-8">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] text-white font-bold tracking-widest px-3 py-1 rounded-sm uppercase ${bloque.colorEtiqueta}`}>
                        {bloque.subtitulo}
                      </span>
                      <h2 className={`${ebGaramond.className} text-2xl md:text-3xl text-[#6b1d2f] tracking-wide font-bold`}>
                        {bloque.titulo}
                      </h2>
                    </div>
                    <p className="cuerpo-texto-xl">
                      {bloque.descripcionGeneral}
                    </p>
                  </div>

                  <div className="w-full aspect-[16/10] bg-white rounded-sm border border-gray-200 overflow-hidden shadow-sm flex items-center justify-center text-center">
                    <img src={bloque.imagenBloque} alt={bloque.titulo} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Tarjetas de Grados */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bloque.grados.map((grado) => {
                    const abierto = gradoAbierto === grado.id;

                    return (
                      <div 
                        key={grado.id}
                        className={`bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                          abierto ? 'ring-1 ring-[#6b1d2f]/40 md:col-span-2 lg:col-span-3 shadow-xl bg-gradient-to-b from-white to-gray-50/20' : ''
                        }`}
                      >
                        <div className="p-6 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="seccion-etiqueta-roja !mb-0">
                              {grado.categoria}
                            </span>
                            <span className={`${ebGaramond.className} text-xl font-bold text-gray-300`}>
                              #{grado.numero}
                            </span>
                          </div>
                          
                          <h3 className={`${ebGaramond.className} text-lg text-gray-900 font-bold leading-snug`}>
                            {grado.nombre}
                          </h3>

                          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            abierto ? 'max-h-[700px] opacity-100 pt-4 border-t border-gray-100 mt-4 space-y-4' : 'max-h-0 opacity-0'
                          }`}>
                            <p className="cuerpo-texto">
                              {grado.descripcion}
                            </p>

                            <div className="space-y-2 pt-2">
                              <span className="text-xs font-bold tracking-wider text-gray-400 uppercase block">
                                Puntos específicos de trabajo técnico:
                              </span>
                              
                              <ul className="space-y-2.5">
                                {grado.puntos.map((punto, idx) => (
                                  <li key={idx} className="cuerpo-texto flex items-start gap-2.5">
                                    <span className="text-[#dc2626] font-bold text-base mt-0.5 shrink-0">✓</span>
                                    <span>{punto}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Botón desplegable */}
                        <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-right group">
                          <button
                            onClick={() => setGradoAbierto(abierto ? null : grado.id)}
                            className="inline-flex items-center justify-end gap-1 text-[10px] tracking-[0.15em] font-bold uppercase text-[#dc2626] transition-all duration-300 ease-out transform origin-right hover:scale-110 hover:text-red-700"
                          >
                            <span>{abierto ? 'Ocultar enfoque' : 'Ver enfoque técnico'}</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-0.5 font-sans text-xs">
                              {abierto ? ' ✕' : ' ＋'}
                            </span>
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </section>
            </div>
          );
        })}
      </div>

      <Footer />

    </div>
  );
}