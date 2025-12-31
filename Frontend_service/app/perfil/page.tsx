"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Sparkles, User, Briefcase, GraduationCap, Award } from "lucide-react"

export default function Perfil() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SUMAQTI</span>
          </Link>
          <div className="flex items-center gap-4">
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
            <Link href="/estadisticas">
              <Button variant="ghost" size="sm">
                Estadísticas
              </Button>
            </Link>
            <Link href="/configuracion-perfil">
              <Button variant="ghost" size="sm">
                Configuración
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Mi Perfil Profesional</h1>
          <Button>Guardar Cambios</Button>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <User className="h-12 w-12 text-primary" />
              <div>
                <h2 className="text-2xl font-bold">Juan Pérez García</h2>
                <p className="text-muted-foreground">Desarrollador Full Stack</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="juan.perez@ejemplo.com" />
              </div>
              <div>
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" defaultValue="+51 987 654 321" />
              </div>
              <div>
                <Label htmlFor="ubicacion">Ubicación</Label>
                <Input id="ubicacion" defaultValue="Lima, Perú" />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input id="linkedin" defaultValue="linkedin.com/in/juanperez" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Experiencia Laboral</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold">Desarrollador Senior Full Stack</h4>
                <p className="text-sm text-muted-foreground">TechCorp SAC • 2021 - Presente</p>
                <p className="text-sm mt-2">
                  Desarrollo de aplicaciones web con React, Node.js y PostgreSQL. Liderazgo de equipo de 5
                  desarrolladores.
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-bold">Desarrollador Full Stack</h4>
                <p className="text-sm text-muted-foreground">StartupXYZ • 2019 - 2021</p>
                <p className="text-sm mt-2">
                  Implementación de features y optimización de rendimiento en plataforma SaaS.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Educación</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold">Ingeniería de Sistemas</h4>
                <p className="text-sm text-muted-foreground">Universidad Nacional Mayor de San Marcos • 2015 - 2019</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Habilidades Técnicas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>Python</Badge>
              <Badge>Django</Badge>
              <Badge>Docker</Badge>
              <Badge>AWS</Badge>
              <Badge>Git</Badge>
              <Badge>Scrum</Badge>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Sobre Mí</h3>
            <Textarea
              placeholder="Escribe una breve descripción sobre ti..."
              rows={4}
              defaultValue="Desarrollador Full Stack con 5+ años de experiencia en construcción de aplicaciones web escalables. Apasionado por las nuevas tecnologías y el trabajo en equipo. Busco oportunidades que me permitan seguir creciendo profesionalmente."
            />
          </Card>
        </div>
      </div>
    </div>
  )
}
