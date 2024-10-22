'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import call from '../assets/v910-ning-09a.jpg'
import design from '../assets/5559033.jpg'
import deploy from '../assets/4858981.jpg'

export default function Plans() {

  return (
    <div className="bg-white relative z-40">
      <div className="p-2 sm:p-10 gap-8 max-w-4xl mx-auto relative overflow-hidden gap-y-4 flex flex-col sm:flex-row">
        <motion.div
          className=""
          initial={{ opacity: 0, translateY: 100 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ scale: 1, opacity: 1, translateY: 0 }}>
          <p className="text-center my-8 sm:my-20 text-4xl font-black">¿Cómo funciona?</p>
        </motion.div>
        <div
          className="flex items-start justify-between flex-col p-8 rounded-2xl bg-white">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, translateX: -100 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ scale: 1, opacity: 1, translateX: 0 }}
            className={"flex justify-center items-center gap-x-4"}
          >
            <div className="flex-1 flex items-start justify-start flex-col">
              <p className="text-lg font-semibold">Primero</p>
              <p className="max-w-sm text-xs sm:text-sm">Agendamos una llamada gratis de 30 minutos donde discutir ideas, dirección y alcances.</p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: .6, duration: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" flex-1 overflow-hidden max-w-sm aspect-video">
              <Image src={call} width={3000} height={2000} alt={"1step"} />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, translateX: 100 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ scale: 1, opacity: 1, translateX: 0 }}
            className={"self-end flex justify-center items-center gap-x-4"}
          >
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" flex-1 overflow-hidden max-w-sm aspect-video">
              <Image src={design} width={3000} height={2000} alt={"2step"} />
            </motion.div>
            <div className="flex-1 flex items-start justify-start flex-col">
              <p className="text-lg font-semibold">Segundo</p>
              <p className="text-xs sm:text-sm">Una vez acordadas las metas del proyecto vamos a la fase de diseño y construcción de la página.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, translateX: -100 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            viewport={{ once: true }}
            whileInView={{ scale: 1, opacity: 1, translateX: 0 }}
            className={"flex justify-center items-center gap-x-4"}
          >
            <div className="flex-1 flex items-start justify-start flex-col">
              <p className="text-lg font-semibold">Tercero</p>
              <p className="text-xs sm:text-sm">Entregamos el proyecto terminado para feedback y comentarios, ajustamos los cambios y sale tu sitio web al publico.</p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" flex-1 overflow-hidden max-w-sm aspect-video">
              <Image src={deploy} width={3000} height={2000} alt={"2step"} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
