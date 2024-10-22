'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import backgroundImageLight from '../assets/8169814.jpg'

export default function Plans() {

  return (
    <div className="relative pt-10 bg-white z-20">
      <div className="flex items-center justify-between py-10 px-4">
        <p className="text-3xl xl:text-4xl font-black text-start">PLANES</p>
        <p className="text-sm xl:text-md text-end">Pagá en <b>AR$</b>, de forma transparente. <br /> Lo que ves es lo que <i>cobramos</i>.</p>
      </div>
      <div className="py-20 grid grid-cols-2 sm:flex items-center justify-center flex-wrap sm:p-10 p-2 gap-4 sm:gap-8 max-w-5xl mx-auto relative place-items-center overflow-hidden">
        <div className="rounded-t-full apect-square top-0 bottom-0 left-0 right-0 sm:rounded-tr-full sm:rounded-tl-full overflow-hidden z-1 absolute">
          <Image className="" src={backgroundImageLight} width={3000} height={2000} alt="background" />
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0, translateY: 100 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileInView={{ scale: 1, opacity: 1, translateY: 0 }}
          viewport={{once: true}}
          className="border-black border-2 flex-1 flex items-start justify-between flex-col aspect-square bg-white p-4 rounded-2xl light:bg-blue-500">
          <div>
            <p className="text-lg font-black">Kickstart</p>
            <p className="text-xs sm:text-sm font-light">Ideal para comenzar tu emprendimiento</p>
          </div>
          <div className="flex-wrap w-full flex sm:justify-between justify-end items-end">
            <div>
              <p className="text-xl font-black">$99.9</p> 
            </div>
            <button className="rounded-full bg-black text-white py-1 px-6 border text-sm font-bold">
              Ver plan
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0, translateY: 100 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileInView={{ scale: 1, opacity: 1, translateY: 0 }}
          viewport={{once: true}}
          className="border-black relative border-2 flex-1 flex items-start justify-between flex-col aspect-square p-4 rounded-2xl bg-white">
            <div className="absolute top-2 right-3">
              <p className="font-bold">-5% OFF!</p>
            </div>
          <div>
            <p className="text-lg font-black">Pro</p>
            <p className="text-xs sm:text-sm font-light">Para cuando tenés tu negocio armado y querés expandirte a la web</p>
          </div>
          <div className="w-full flex flex-wrap sm:justify-between justify-end items-end">
            <div className="sm:inline flex items-center gap-x-2">
              <p className="text-sm opacity-50 font-normal line-through">$200</p>
              <p className="text-xl font-black">$189.9</p> 
            </div>
            <button className="rounded-full bg-black text-white py-1 px-6 border text-sm font-bold">
              Ver plan
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0, translateY: 100 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileInView={{ scale: 1, opacity: 1, translateY: 0 }}
          viewport={{once: true}}
          className="col-span-1 border-black border-2 flex-1 flex items-start justify-between flex-col aspect-square p-4 rounded-2xl bg-white">
          <div>
            <p className="text-lg font-black">Personalizado</p>
            <p className="text-xs sm:text-sm font-light">Para proyectos grandes, con alto flujo de clientes o propuestas especiales</p>
          </div>
          <p className="self-end text-xl font-black text-end"><span className="font-normal text-sm opacity-50">desde </span>$349.9 </p>
        </motion.div>
      </div>
    </div>
  );
}
