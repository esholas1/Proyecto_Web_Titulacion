"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Briefcase, Users, TrendingUp, Plus } from "lucide-react"

export default function ReclutadorDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SUMAQTI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/reclutador/publicar-empleo">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Publicar Oferta
              </Button>
            </Link>
            <Link href="/reclutador/postulantes">
              <Button variant="ghost" size="sm">
                Ver Candidatos
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Panel de Reclutador</h1>
            <p className="text-muted-foreground">TechCorp SAC</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Ofertas Activas</span>
            </div>
            <div className="text-3xl font-bold">8</div>
            <div className="text-sm text-muted-foreground mt-1">+2 este mes</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Nuevos Candidatos</span>
            </div>
            <div className="text-3xl font-bold">47</div>
            <div className="text-sm text-green-500 mt-1">+12 esta semana</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Match Promedio</span>
            </div>
            <div className="text-3xl font-bold">82%</div>
            <div className="text-sm text-muted-foreground mt-1">Excelente</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Recomendados IA</span>
            </div>
            <div className="text-3xl font-bold">23</div>
            <div className="text-sm text-primary mt-1">Revisar</div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Candidatos Destacados</h2>
              <Link href="/reclutador/postulantes">
                <Button size="sm" variant="ghost">
                  Ver Todos
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold">Juan Pérez García</h3>
                  <p className="text-sm text-muted-foreground">Desarrollador Full Stack Senior</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      PostgreSQL
                    </Badge>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <Badge className="mb-2">95% Match</Badge>
                  <Button size="sm">Ver Perfil</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold">María González</h3>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Tailwind
                    </Badge>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <Badge className="mb-2">92% Match</Badge>
                  <Button size="sm">Ver Perfil</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold">Carlos Rodríguez</h3>
                  <p className="text-sm text-muted-foreground">Backend Engineer</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Python
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Django
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      AWS
                    </Badge>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <Badge className="mb-2">88% Match</Badge>
                  <Button size="sm">Ver Perfil</Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Ofertas Recientes</h2>
              <Link href="/reclutador/publicar-empleo">
                <Button size="sm" variant="ghost">
                  Nueva Oferta
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Desarrollador Full Stack Senior</h3>
                    <p className="text-sm text-muted-foreground">Publicado hace 2 días</p>
                  </div>
                  <Badge className="bg-green-500">Activa</Badge>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground mt-3">
                  <span>👥 12 candidatos</span>
                  <span>⭐ 3 destacados</span>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Frontend Developer</h3>
                    <p className="text-sm text-muted-foreground">Publicado hace 5 días</p>
                  </div>
                  <Badge className="bg-green-500">Activa</Badge>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground mt-3">
                  <span>👥 18 candidatos</span>
                  <span>⭐ 5 destacados</span>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Backend Engineer</h3>
                    <p className="text-sm text-muted-foreground">Publicado hace 1 semana</p>
                  </div>
                  <Badge variant="secondary">Pausada</Badge>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground mt-3">
                  <span>👥 25 candidatos</span>
                  <span>⭐ 7 destacados</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
