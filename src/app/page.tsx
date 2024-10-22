'use client'

import TextRotator from "./components/TextRotator";
import Plans from "./components/Plans";
import About from "./components/About"
import Image from "next/image";
import backgroundImageLight from './assets/wireframe-light.png'
import macFrame from './assets/mac-frame-821-477.png'
import iphoneFrame from './assets/iphone-296-589.png'
import logo from './assets/logo.png'
import Contact from "./components/Contact";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className="relative">
      <div className="bg-white z-50 sticky py-2 top-0 left-0 right-0 w-full flex items-center justify-between px-4">
        <div className="overflow-hidden aspect-square w-8 invert">
          <Image src={logo} width={1080} height={1080} alt={"logo"} />
        </div>
        <p>Iniciar sesión</p>
      </div>
      <div className="max-w-6xl mx-auto mt-10 relative ">
        <div className="bg-white relative font-black flex-col xl:text-4xl text-3xl text-center flex items-start justify-center flex-col max-w-6xl w-full mx-auto xl:mb-10">
          <div className="opacity-1 top-0 bottom-0 left-0 right-0 overflow-hidden flex items-center justify-center z-1 absolute w-full aspect-square">
            <Image className="" src={backgroundImageLight} width={3000} height={2000} alt="background" />
          </div>
          <div className="mx-auto relative xl:flex-row flex-col gap-y-4 gap-x-2 rounded-xl flex justify-center items-center w-full text-center h-full min-h-128 ">
            <p className="flex-1 font-black text-end">Tené tu </p>
            <div className="border-b-2 flex-1 xl:text-5xl text-4xl">
              <TextRotator />
            </div>
            <p className="flex-1 text-start">en <span className="text-blue-700">48hs</span></p>
          </div>
          <h2 className="relative p-4 rounded-xl max-w-sm self-center mt-3 font-semibold text-sm sm:text-lg">Elegí tu paquete de servicios y nosotros te asesoramos para que crear tu página web no sea un problema.</h2>
        </div>
        <div className="flex items-center justify-center relative max-w-[250px] min-h-[586px] xl:max-w-[821px] mx-auto xl:min-h-[477px]">
          <div className="absolute bottom-0">
            <div className="relative z-20">
              <Image className="hidden xl:block" src={macFrame} height={477} width={821} alt={"mac-frame"}/>
              <Image className="xl:hidden" src={iphoneFrame} height={586} width={289} alt={"mac-frame"}/>
            </div>
            <motion.div
              initial={{translateX: -20, opacity: 0.2}}
              transition={{duration: 0.5, delay: 0.4}}
              whileInView={{translateX: 0,  opacity: 1}}
              className="border px-4 text-xl font-black text-blue-700 absolute top-24 xl:top-9 left-[-120px] rounded-full bg-white p-1 xl:left-[-120px] z-40"
            >
              Tu logo →
            </motion.div>
            <motion.div
              initial={{translateX: 10, opacity: 0.2}}
              transition={{duration: 0.5, delay: 0.9}}
              whileInView={{translateX: 0,  opacity: 1}}
              className="border xl:max-w-72 text-sm bg-white rounded-full px-2 py-1 xl:text-xl font-semibold text-blue-700 absolute top-6 xl:top-9 right-[-100px] xl:right-[-160px] z-40"
            >
              ← Interacciones 
            </motion.div>
            <motion.div
              initial={{translateX: 20, opacity: 0.2}}
              transition={{duration: 0.5, delay: 1.2}}
              whileInView={{translateX: 0,  opacity: 1}}
              className="overflow-hidden max-w-72 xl:text-xl font-black text-blue-700 absolute bottom-12 text-sm xl:bottom-9 border rounded-md bg-white px-2 py-1 xl:right-[-200px] right-[-50px] z-20"
            >
              ← Diseño moderno
            </motion.div>
            <motion.div
              initial={{translateX: -100, opacity: 0.2}}
              transition={{duration: 0.5, delay: 1.4}}
              whileInView={{translateX: 0,  opacity: 1}}
              className="bg-white xl:text-center xl:max-w-48 max-w-32 text-center text-xs xl:text-md font-semibold text-blue-700 absolute bottom-36 xl:bottom-24 left-[-100px] bg-white border rounded-md rounded-br-none rounded-bl-xl rounded-tr-xl xl:rounded-full px-4 py-2 xl:left-[-200px] z-40"
            >
              Compatible con cualquier dispositivo ✓
            </motion.div>
            <div className="absolute top-8 flex xl:hidden items-center justify-center mx-auto w-full rounded-2xl overflow-hidden">
            </div>
            <div className="overflow-hidden hidden xl:flex absolute z-20 top-8 items-center justify-center mx-auto w-full ">
              <iframe className="bg-white" src="https://wasyted.github.io/hurynWeb" width="94%" height="1000" name="iframe" title="This is my video"></iframe>
            </div>
          </div>
        </div>
        <div className="">
          <Plans />
        </div>
        <About />
      </div>
      <Contact />
    </div>
  );
}
