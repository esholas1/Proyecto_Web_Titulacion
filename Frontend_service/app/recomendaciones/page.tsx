"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Lightbulb, TrendingUp, AlertCircle } from "lucide-react"

export default function Recomendaciones() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SUMAQTI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/perfil">
              <Button variant="ghost" size="sm">
                Mi Perfil
              </Button>
            </Link>
            <Link href="/ofertas">
              <Button variant="ghost" size="sm">
                Buscar Empleos
              </Button>
            </Link>
            <Link href="/estadisticas">
              <Button variant="ghost" size="sm">
                Estadísticas
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Recomendaciones Personalizadas IA</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">12</div>
            <div className="text-sm text-muted-foreground">Ofertas Recomendadas</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Match Promedio</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">8</div>
            <div className="text-sm text-muted-foreground">Nuevas esta semana</div>
          </Card>
        </div>

        <Card className="p-6 mb-6 bg-primary/10 border-primary">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">Sugerencia de IA</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Tu perfil tiene un 95% de compatibilidad con ofertas de "Full Stack Developer" en modalidad remota. Hay
                8 nuevas ofertas que coinciden perfectamente con tus habilidades en React y Node.js.
              </p>
              <Link href="/ofertas">
                <Button size="sm">Ver Ofertas Recomendadas</Button>
              </Link>
            </div>
          </div>
        </Card>

        <div className="grid gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Mejora tu Perfil</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">Añade certificaciones</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    El 78% de las ofertas recomendadas solicitan certificación en AWS. Considera obtener la
                    certificación AWS Solutions Architect.
                  </p>
                  <Button size="sm" variant="outline">
                    Ver Cursos Sugeridos
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">Actualiza tus habilidades</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Las ofertas con mejor salario (+25%) requieren experiencia en Kubernetes. Agregar esta habilidad
                    podría aumentar tus oportunidades.
                  </p>
                  <Button size="sm" variant="outline">
                    Añadir Habilidad
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">Completa tu perfil</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Los perfiles completos con portafolio tienen 3x más probabilidades de recibir respuestas. Agrega
                    enlaces a tus proyectos.
                  </p>
                  <Link href="/perfil">
                    <Button size="sm" variant="outline">
                      Completar Perfil
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Tendencias del Mercado</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">TypeScript</span>
                  <Badge>+45% demanda</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  La demanda de desarrolladores con TypeScript ha aumentado un 45% en los últimos 3 meses.
                </p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Trabajo Remoto</span>
                  <Badge>+60% ofertas</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  El 60% de las nuevas ofertas ofrecen modalidad remota o híbrida.
                </p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">IA y Machine Learning</span>
                  <Badge>Emergente</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Nuevas oportunidades emergentes en IA generativa y LLMs con salarios 30% superiores al promedio.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
