import Image from "next/image";
import backgroundImageLight from '../assets/8169814.jpg'

export default function Contact() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="">
          <Image className="absolute z-10 min-h-screen w-auto" src={backgroundImageLight} width={3000} height={2000} alt="background" />
        </div>
        <div className="min-h-screen bg-transparent relative w-full flex items-center justify-center p-4 py-6 z-30">
          <div>
          <p className="text-4xl font-black max-w-sm">
            ¿Estás listo? ¡Queremos trabajar con vos!
          </p>
          <p className="max-w-sm text-sm mt-3">
            Agendá hoy una entrevista con nosotros sin cargo, empezá a vender, publicar y compartir tu producto bajo nuestro asesoramiento.
          </p>
          <button className="mt-6 border-2 border-black bg-white px-6 py-2 rounded-full">
            Mandanos un correo
          </button>
          </div>
        </div>
        <div className="relative w-full flex justify-between items-center p-10 z-30 bg-white">
          <p className="">Contacto</p>
          <p className="">Contacto</p>
          <p className="">Contacto</p>
        </div>
      </div>
    </div>
  )
}