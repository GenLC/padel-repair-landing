import { CheckCircle } from "lucide-react"

const benefits = [
  "Tecnología de reparación de última generación",
  "Expertos certificados en reparación de paletas",
  "Servicio rápido y eficiente",
  "Garantía en todas las reparaciones",
  "Mejora del rendimiento de tu paleta",
  "Ahorro significativo frente a la compra de una nueva paleta",
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Beneficios de Nuestro Servicio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

