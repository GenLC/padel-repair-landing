import { Shield, Zap, PenToolIcon as Tool } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Reparación de Grietas",
    description: "Sellamos grietas con precisión milimétrica para restaurar la integridad estructural.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    title: "Reemplazo de Grip",
    description: "Instalamos grips de última generación para un agarre perfecto y duradero.",
  },
  {
    icon: <Tool className="h-8 w-8 text-blue-500" />,
    title: "Ajuste de Peso y Balance",
    description: "Optimizamos el peso y balance de tu paleta para un rendimiento personalizado.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-700 border-none rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold">
                  {service.icon}
                  <span className="ml-3">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

