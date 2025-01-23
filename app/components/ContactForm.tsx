"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"
import { motion } from "framer-motion"

type MaterialType = 'carbono' | 'fibra' | 'hibrido' | 'otro' | ''
type FoamType = 'foam' | 'eva' | 'eva-black' | 'hibrido' | 'otro' | ''

export default function ContactForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [exterior, setExterior] = useState<MaterialType>('')
  const [interior, setInterior] = useState<FoamType>('')
  const [error, setError] = useState("")

  const validateForm = (): boolean => {
    if (!name.trim()) {
      setError("Por favor, ingresa tu nombre")
      return false
    }
    if (!message.trim()) {
      setError("Por favor, ingresa un mensaje")
      return false
    }
    if (!exterior) {
      setError("Por favor, selecciona el material exterior")
      return false
    }
    if (!interior) {
      setError("Por favor, selecciona el material interior")
      return false
    }
    // Validación básica contra contenido malicioso
    const maliciousPatterns = /[<>{}]/g
    if (maliciousPatterns.test(name) || maliciousPatterns.test(message)) {
      setError("El mensaje contiene caracteres no permitidos")
      return false
    }
    setError("")
    return true
  }

  const handleWhatsAppClick = () => {
    if (!validateForm()) return

    const productInfo = `
Composición de la paleta:
- Material exterior: ${exterior}
- Material interior: ${interior}`

    const whatsappMessage = `Hola, mi nombre es ${name}. ${message} ${productInfo}`
    window.open(`https://wa.me/5493572541471?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  return (
    <motion.section 
      id="contact" 
      className="py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-md">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Contáctanos
        </motion.h2>
        <motion.form 
          className="space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
              Nombre
            </label>
            <Input
              id="name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border-2 border-gray-200 focus:border-green-500 transition-all duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
              Mensaje
            </label>
            <Textarea
              id="message"
              placeholder="¿En qué podemos ayudarte?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-xl border-2 border-gray-200 focus:border-green-500 transition-all duration-300"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Material Exterior */}
            <motion.div 
              className="space-y-2 bg-white/80 p-4 rounded-xl shadow-sm"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-semibold text-gray-700">Material Exterior:</p>
              <div className="space-y-3">
                {[
                  { value: 'carbono', label: 'Carbono' },
                  { value: 'fibra', label: 'Fibra de Vidrio' },
                  { value: 'hibrido', label: 'Híbrido' },
                  { value: 'otro', label: 'Otro' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors duration-200">
                    <input
                      type="radio"
                      name="exterior"
                      value={option.value}
                      checked={exterior === option.value}
                      onChange={(e) => setExterior(e.target.value as MaterialType)}
                      className="w-4 h-4 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Material Interior */}
            <motion.div 
              className="space-y-2 bg-white/80 p-4 rounded-xl shadow-sm"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="font-semibold text-gray-700">Material Interior:</p>
              <div className="space-y-3">
                {[
                  { value: 'foam', label: 'Foam' },
                  { value: 'eva', label: 'EVA' },
                  { value: 'eva-black', label: 'EVA Black' },
                  { value: 'hibrido', label: 'Híbrido' },
                  { value: 'otro', label: 'Otro' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors duration-200">
                    <input
                      type="radio"
                      name="interior"
                      value={option.value}
                      checked={interior === option.value}
                      onChange={(e) => setInterior(e.target.value as FoamType)}
                      className="w-4 h-4 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          {error && (
            <motion.div 
              className="text-red-500 text-sm text-center p-3 bg-red-50 rounded-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              type="button" 
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-xl py-6 shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center text-lg">
                <Phone className="mr-2 h-5 w-5" /> 
                Contactar por WhatsApp
              </span>
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  )
}

