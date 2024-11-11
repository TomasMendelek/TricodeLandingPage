import { Code, Puzzle, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl m-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="text-sm font-light text-yellow-500 w-fit m-auto px-2 bg-yellow-50">LAS SOLUCIONES</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-neutral-800">
            Tres sistemas integrados que optimizan la gestión de tu ecommerce
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Tri-Ecommerce, Tri-Marketing y Tri-Stock trabajan de la mano para ofrecerte una solución integral, con soporte 24/7 y una experiencia eficiente y sin interrupciones.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Card className="border-none shadow-none">
            <CardContent className="space-y-3 p-6">
              <div className="inline-flex items-center justify-center rounded-lg bg-yellow-100 p-2 text-yellow-600 ">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800">
                Gestión completa y centralizada...
              </h3>
              <p className="text-muted-foreground">
                Con Tri-Ecommerce, tienes control total sobre todos los aspectos de tu tienda online: productos, clientes, pedidos, pagos y más, todo desde un único dashboard fácil de usar.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none">
            <CardContent className="space-y-3 p-6">
              <div className="inline-flex items-center justify-center rounded-lg bg-yellow-100 p-2 text-yellow-600">
                <Puzzle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800">
                Integración perfecta entre sistemas...
              </h3>
              <p className="text-muted-foreground">
                Tri-Marketing se integra sin esfuerzo con Tri-Ecommerce para crear campañas de email marketing personalizadas, mientras que Tri-Stock mantiene tu inventario actualizado en tiempo real, todo funcionando en armonía.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none">
            <CardContent className="space-y-3 p-6">
              <div className="inline-flex items-center justify-center rounded-lg bg-yellow-100 p-2 text-yellow-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800">
                Soporte 24/7 y comunidad activa...
              </h3>
              <p className="text-muted-foreground">
                Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana, para ayudarte con cualquier duda. Además, nuestras soluciones cuentan con una comunidad activa que comparte actualizaciones, mejoras y nuevas ideas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
