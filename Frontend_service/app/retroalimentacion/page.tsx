"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MessageSquare, CheckCircle, XCircle, Clock } from "lucide-react"

export default function Retroalimentacion() {
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
          <MessageSquare className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Mis Postulaciones y Retroalimentación</h1>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">15</div>
            <div className="text-sm text-muted-foreground">Total Postulaciones</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500 mb-1">5</div>
            <div className="text-sm text-muted-foreground">En Proceso</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500 mb-1">7</div>
            <div className="text-sm text-muted-foreground">Pendientes</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-red-500 mb-1">3</div>
            <div className="text-sm text-muted-foreground">Rechazadas</div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Desarrollador Full Stack Senior</h3>
                <p className="text-muted-foreground">TechCorp SAC</p>
                <p className="text-sm text-muted-foreground mt-1">Postulado hace 2 días</p>
              </div>
              <Badge className="bg-green-500">En Proceso</Badge>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-green-500 mb-2">¡Tu perfil está siendo revisado!</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    El reclutador ha visto tu aplicación. Tu match del 95% te posiciona entre los mejores candidatos.
                  </p>
                  <p className="text-sm font-medium">Feedback de IA:</p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-1">
                    <li>Experiencia altamente compatible (+5 años)</li>
                    <li>Habilidades técnicas coinciden 98%</li>
                    <li>Ubicación y modalidad perfectas</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Frontend Developer</h3>
                <p className="text-muted-foreground">Digital Solutions</p>
                <p className="text-sm text-muted-foreground mt-1">Postulado hace 5 días</p>
              </div>
              <Badge className="bg-yellow-500">Pendiente</Badge>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-yellow-500 mb-2">Aplicación en revisión</p>
                  <p className="text-sm text-muted-foreground">
                    Tu postulación está siendo procesada. El tiempo promedio de respuesta para esta empresa es de 7
                    días.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Backend Engineer</h3>
                <p className="text-muted-foreground">CloudTech Peru</p>
                <p className="text-sm text-muted-foreground mt-1">Postulado hace 1 semana</p>
              </div>
              <Badge variant="destructive">Rechazada</Badge>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-500 mb-2">Análisis de Retroalimentación IA</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Aunque tu perfil es excelente, identificamos áreas de mejora para futuras postulaciones:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium">Razón probable del rechazo:</p>
                      <p className="text-muted-foreground">
                        La posición requería experiencia específica en Go y Kubernetes que no figuran en tu perfil.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Recomendaciones:</p>
                      <ul className="text-muted-foreground list-disc list-inside ml-2">
                        <li>Considera aprender Go (lenguaje en alta demanda)</li>
                        <li>Agrega experiencia con orquestación de contenedores</li>
                        <li>Actualiza tu perfil destacando DevOps skills</li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/recomendaciones">
                    <Button size="sm" variant="outline" className="mt-3 bg-transparent">
                      Ver Cursos Sugeridos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Mobile Developer</h3>
                <p className="text-muted-foreground">AppMakers</p>
                <p className="text-sm text-muted-foreground mt-1">Postulado hace 3 días</p>
              </div>
              <Badge className="bg-green-500">En Proceso</Badge>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-blue-500 mb-2">Próximo paso: Entrevista técnica</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    ¡Felicitaciones! Has pasado el filtro inicial. Prepárate para la entrevista técnica.
                  </p>
                  <p className="text-sm font-medium">Consejos de IA para la entrevista:</p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-1">
                    <li>Repasa conceptos de React Native y manejo de estado</li>
                    <li>Prepara ejemplos de proyectos mobile previos</li>
                    <li>Revisa las mejores prácticas de optimización de rendimiento</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
