"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, BarChart3, TrendingUp, Users, Target } from "lucide-react"

export default function Estadisticas() {
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
            <Link href="/recomendaciones">
              <Button variant="ghost" size="sm">
                Recomendaciones
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Estadísticas y Análisis</h1>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Postulaciones</span>
            </div>
            <div className="text-3xl font-bold">15</div>
            <div className="text-sm text-green-500 mt-1">+3 esta semana</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Tasa de Respuesta</span>
            </div>
            <div className="text-3xl font-bold">73%</div>
            <div className="text-sm text-green-500 mt-1">+12% vs promedio</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Match Promedio</span>
            </div>
            <div className="text-3xl font-bold">87%</div>
            <div className="text-sm text-muted-foreground mt-1">Muy bueno</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Perfil Completado</span>
            </div>
            <div className="text-3xl font-bold">92%</div>
            <div className="text-sm text-yellow-500 mt-1">Casi completo</div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Análisis de Competencias</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">React</span>
                  <span className="text-sm text-muted-foreground">95% vs Mercado</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Node.js</span>
                  <span className="text-sm text-muted-foreground">90% vs Mercado</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">TypeScript</span>
                  <span className="text-sm text-muted-foreground">88% vs Mercado</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">PostgreSQL</span>
                  <span className="text-sm text-muted-foreground">85% vs Mercado</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">AWS</span>
                  <span className="text-sm text-yellow-500">65% vs Mercado - Oportunidad</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Tendencias de Postulación</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Mejor día para postular</p>
                  <p className="text-sm text-muted-foreground">Martes - 40% más respuestas</p>
                </div>
                <span className="text-2xl">📅</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Mejor horario</p>
                  <p className="text-sm text-muted-foreground">9:00 AM - 11:00 AM</p>
                </div>
                <span className="text-2xl">⏰</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Tiempo promedio de respuesta</p>
                  <p className="text-sm text-muted-foreground">5 días hábiles</p>
                </div>
                <span className="text-2xl">📧</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Recomendaciones Basadas en Datos</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <TrendingUp className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Mejora tu tasa de respuesta</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Los perfiles con portafolio reciben 3x más respuestas. Agrega enlaces a tus proyectos.
              </p>
              <Link href="/perfil">
                <Button size="sm" variant="outline">
                  Actualizar Perfil
                </Button>
              </Link>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <Target className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Postula a ofertas con +85% match</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Tus postulaciones con match superior al 85% tienen 70% más probabilidad de éxito.
              </p>
              <Link href="/ofertas">
                <Button size="sm" variant="outline">
                  Ver Ofertas
                </Button>
              </Link>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Aprende habilidades emergentes</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Kubernetes y Docker tienen 45% más demanda este trimestre.
              </p>
              <Link href="/recomendaciones">
                <Button size="sm" variant="outline">
                  Ver Cursos
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
