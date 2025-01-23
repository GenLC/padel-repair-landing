import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana García",
    comment: "Increíble servicio. Mi paleta quedó como nueva y mi juego mejoró notablemente.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    comment: "Rápidos, profesionales y con resultados excelentes. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    comment: "Pensé que tendría que comprar una paleta nueva, pero la repararon perfectamente.",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-700 border-none rounded-3xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{testimonial.name}</CardTitle>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

