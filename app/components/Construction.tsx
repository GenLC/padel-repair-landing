"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Construction = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Duración de la animación inicial
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="relative flex items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute left-[-2.5em] w-[1em] h-[1em]"
          animate={{
            y: isAnimating ? [0, -20, 0] : [0, -20, 0], // Mantener el rebote
            scale: isAnimating ? [3, 3.1, 3] : [3, 3.1, 3]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.5, 1]
          }}
        >
          <img 
            src="/padelball.png" 
            alt="Pelota de padel" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold"
          initial={{ y: -100, rotate: -30 }} // Comienza fuera de la vista
          animate={isAnimating ? { y: [0, -20, 0], rotate: [0, -30, 0] } : { y: 0, rotate: 0 }} // Efecto de lanzamiento
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          ¡Sitio en construcción!
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Construction;
