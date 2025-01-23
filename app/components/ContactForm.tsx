"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"

export default function ContactForm() {
  console.log('ContactForm rendering...');
  
  const testText = "PRUEBA DE CAMBIO";

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [fiberglass, setFiberglass] = useState(false)
  const [carbon, setCarbon] = useState(false)
  const [foam, setFoam] = useState(false)
  const [eva, setEva] = useState(false)
  const [evaBlack, setEvaBlack] = useState(false)

  const handleWhatsAppClick = () => {
    const productInfo = `
      Composición de la paleta:
      Exterior: ${fiberglass ? 'Fibra de vidrio' : ''} ${carbon ? 'Carbono' : ''}
      Interior: ${foam ? 'Foam' : ''} ${eva ? 'EVA' : ''} ${evaBlack ? 'EVA Black' : ''}
    `
    const whatsappMessage = `Hola, mi nombre es ${name}. ${message} ${productInfo}`
    window.open(`https://wa.me/5493572541471?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center">
          {testText}
        </h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block mb-2">
              Nombre
            </label>
            <Input
              id="name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Mensaje
            </label>
            <Textarea
              id="message"
              placeholder="¿En qué podemos ayudarte?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Composición de la paleta:</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={fiberglass}
                  onChange={() => setFiberglass(!fiberglass)}
                  className="rounded"
                />
                <span>Exterior de fibra de vidrio</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={carbon}
                  onChange={() => setCarbon(!carbon)}
                  className="rounded"
                />
                <span>Exterior de carbono</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={foam}
                  onChange={() => setFoam(!foam)}
                  className="rounded"
                />
                <span>Interior de foam</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={eva}
                  onChange={() => setEva(!eva)}
                  className="rounded"
                />
                <span>Interior de EVA</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={evaBlack}
                  onChange={() => setEvaBlack(!evaBlack)}
                  className="rounded"
                />
                <span>Interior de EVA Black</span>
              </label>
            </div>
          </div>
          <Button 
            type="button" 
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 hover:bg-green-700 rounded-full"
          >
            <span className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" /> 
              Contactar por WhatsApp
            </span>
          </Button>
        </form>
      </div>
    </section>
  )
}

