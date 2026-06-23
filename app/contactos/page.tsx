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

export default function ContactoPage() {
  return (
    <div className={`${inter.className} bg-white min-h-screen text-gray-800 antialiased pt-[60px]`}>
      
      <Navbar />

      {/* Concactos principales */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* informacion y canales */}
          <div className="md:col-span-6 space-y-8">
            
            {/* Encabezado e Introducción */}
            <div className="space-y-4">
              <span className="seccion-etiqueta-roja text-xs md:text-sm">
                NUESTROS CONTACTOS
              </span>
              <h1 className={`${ebGaramond.className} titulo-principal text-[#6b1d2f]`}>
                Guiamos tu camino hacia el arte.          
              </h1>
              <div className="w-12 h-[2px] bg-[#dc2626] mt-2"></div>
              
              <p className="cuerpo-texto pt-2">
                ¡Queremos escucharte! Si tienes dudas sobre los horarios, las edades de ingreso o quieres agendar una clase de muestra para tu hija o hijo, ponte en contacto con nosotros. Nuestro equipo te atenderá con gusto para guiarte en el inicio de este hermoso viaje en el ballet.
              </p>
            </div>

            {/* Bloque de Información Vertical */}
            <div className="space-y-6 pt-2">
              
              {/* ubicación */}
              <div className="flex items-start gap-4">
                <div className="text-[#dc2626] mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-gray-900">ADDRESS</h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    [Rufino Tamayo 50, Jardines Vista Hermosa III, 28017 Colima, Col.]
                  </p>
                  <p className="text-xs text-[#dc2626]/80 italic font-light">
                    Referencias: A contra esquina de pasteleria Miky de la avenica constitución.
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="text-[#dc2626] mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-gray-900">PHONE</h4>
                  <p className="text-sm text-gray-600 font-light">
                    [Tu número de teléfono de contacto]
                  </p>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start gap-4">
                <div className="text-[#dc2626] mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-gray-900">EMAIL</h4>
                  <p className="text-sm text-gray-600 font-light">
                    informes@pavlovacolima.com
                  </p>
                </div>
              </div>

              {/* Horarios de atención */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="text-[#dc2626] mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-gray-900">HORARIOS DE ATENCIÓN E INFORMES</h4>
                  <p className="text-xs text-gray-600 font-light">
                    <strong className="font-medium text-gray-800">Lunes a Viernes:</strong> 4:00 PM a 8:00 PM
                  </p>
                  
                  <p className="text-xs text-gray-500 font-light italic">
                    Sábados y Domingos: Cerrado.
                  </p>
                </div>
              </div>

            </div>

            {/* Botones auxiliares / whatsapp */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a 
                href="https://wa.me/TU_NUMERO_AQUI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs tracking-wider uppercase font-semibold px-5 py-3 rounded-sm shadow-sm hover:bg-[#20ba5a] transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.748.002-2.607-1.013-5.059-2.859-6.908C16.626 2.1 14.183 1.085 11.6 1.085 6.164 1.085 1.74 5.455 1.736 10.834c-.001 1.687.45 3.331 1.306 4.76l-.994 3.633 3.734-.972zm10.147-4.593c-.303-.151-1.793-.884-2.059-.982-.266-.099-.459-.148-.653.144-.193.291-.747.935-.916 1.129-.168.193-.338.216-.641.066-1.396-.698-2.342-1.221-3.275-2.818-.246-.421.246-.391.704-1.303.076-.151.038-.284-.019-.397-.057-.113-.459-1.106-.63-1.516-.165-.396-.334-.343-.459-.349-.118-.006-.254-.007-.39-.007-.136 0-.356.051-.543.254-.187.203-.714.698-.714 1.701 0 1.004.731 1.973.833 2.108.102.136 1.44 2.198 3.488 3.082.487.21 1.012.334 1.54.388.495.05.943.022 1.3.029.398-.006 1.794-.734 2.059-1.444.265-.71.265-1.319.187-1.445-.078-.126-.253-.203-.556-.354z"/>
                </svg>
                WhatsApp Directo
              </a>
              <span className="text-[11px] text-gray-400 font-light max-w-[180px] leading-tight">
                Da clic aquí para escribirnos por WhatsApp y recibir informes al instante.
              </span>
            </div>

          </div>

          {/* Mapa interactivo */}
          <div className="md:col-span-6 flex justify-center md:justify-end">
            <div className="w-full max-w-lg aspect-square bg-gray-100 border border-gray-200/80 shadow-sm overflow-hidden rounded-sm relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1658.8848589184715!2d-103.71575280106778!3d19.259430707457593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255ab86d9a55f7%3A0x4b108e4e996ee9b2!2sRufino%20Tamayo%2050%2C%20Jardines%20Vista%20Hermosa%20III%2C%2028017%20Colima%2C%20Col.!5e0!3m2!1ses!2smx!4v1782234673255!5m2!1ses!2smx" 
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-all duration-500"
              ></iframe>
            </div>
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}