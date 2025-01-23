"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center">Contáctanos</h2>
        <form className="space-y-6">
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
          <Button type="button" className="w-full bg-green-600 hover:bg-green-700 rounded-full">
            <a
              href={`https://wa.me/5493572541471?text=${encodeURIComponent(`Hola, mi nombre es ${name}. ${message}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full justify-center"
            >
              <Phone className="mr-2 h-5 w-5" /> Contactar por WhatsApp
            </a>
          </Button>
        </form>
      </div>
    </section>
  )
}

