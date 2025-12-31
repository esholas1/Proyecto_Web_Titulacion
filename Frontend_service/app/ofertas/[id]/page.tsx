"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MapPin, Briefcase, Clock, Building, TrendingUp } from "lucide-react"

export default function OfertaDetalle({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SUMAQTI</span>
          </Link>
          <Link href="/ofertas">
            <Button variant="ghost" size="sm">
              ← Volver a Ofertas
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Desarrollador Full Stack Senior</h1>
            <p className="text-xl text-muted-foreground">TechCorp SAC</p>
          </div>
          <Badge className="text-lg px-4 py-2">95% Match</Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="p-4 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Ubicación</p>
              <p className="font-medium">Lima, Perú</p>
            </div>
          </Card>
          <Card className="p-4 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Modalidad</p>
              <p className="font-medium">Remoto</p>
            </div>
          </Card>
          <Card className="p-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Salario</p>
              <p className="font-medium">S/. 5,000 - 7,000</p>
            </div>
          </Card>
          <Card className="p-4 flex items-center gap-3">
            <Building className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Tipo de contrato</p>
              <p className="font-medium">Tiempo completo</p>
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Análisis de Compatibilidad IA</h2>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Habilidades Técnicas</span>
                <span className="text-sm font-medium">98%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "98%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Experiencia Laboral</span>
                <span className="text-sm font-medium">95%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Ubicación y Modalidad</span>
                <span className="text-sm font-medium">100%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Expectativa Salarial</span>
                <span className="text-sm font-medium">90%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Descripción del Puesto</h2>
          <p className="text-muted-foreground mb-4">
            Buscamos un Desarrollador Full Stack Senior con experiencia comprobada en el desarrollo de aplicaciones web
            escalables. Serás parte de un equipo innovador trabajando en proyectos de alto impacto para clientes
            internacionales.
          </p>
          <h3 className="font-bold mb-2">Responsabilidades:</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            <li>Diseñar y desarrollar aplicaciones web usando React y Node.js</li>
            <li>Implementar y mantener APIs RESTful</li>
            <li>Optimizar rendimiento de aplicaciones</li>
            <li>Colaborar con equipos de diseño y producto</li>
            <li>Realizar code reviews y mentorear desarrolladores junior</li>
          </ul>
          <h3 className="font-bold mb-2">Requisitos:</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>5+ años de experiencia en desarrollo web</li>
            <li>Dominio de JavaScript/TypeScript, React y Node.js</li>
            <li>Experiencia con bases de datos SQL (PostgreSQL preferiblemente)</li>
            <li>Conocimiento de Docker y CI/CD</li>
            <li>Inglés intermedio-avanzado</li>
          </ul>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Habilidades Requeridas</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>Docker</Badge>
            <Badge>Git</Badge>
            <Badge>REST APIs</Badge>
            <Badge>Scrum</Badge>
          </div>
        </Card>

        <Button className="w-full" size="lg">
          Postular a esta Oferta
        </Button>
      </div>
    </div>
  )
}
