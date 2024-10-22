'use client'

// components/TextRotator.tsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Landing Page", "Tienda Virtual", "Página de Links", "Portfolio"];

const TextRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <span className="">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }} // Estado inicial (fuera de la vista)
          animate={{ opacity: 1, y: 0 }} // Estado animado (dentro de la vista)
          exit={{ opacity: 0, y: -20 }}  // Estado de salida (fuera de la vista)
          transition={{ duration: 0.5 }} // Duración de la animación
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </span>
  );
};

export default TextRotator;
