"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Search, MapPin, Briefcase, Clock } from "lucide-react"

const ofertas = [
  {
    id: 1,
    titulo: "Desarrollador Full Stack Senior",
    empresa: "TechCorp SAC",
    ubicacion: "Lima, Perú",
    modalidad: "Remoto",
    salario: "S/. 5,000 - 7,000",
    match: 95,
    skills: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    titulo: "Ingeniero de Software",
    empresa: "Innovation Labs",
    ubicacion: "San Isidro, Lima",
    modalidad: "Híbrido",
    salario: "S/. 4,500 - 6,500",
    match: 88,
    skills: ["Python", "Django", "AWS"],
  },
  {
    id: 3,
    titulo: "Frontend Developer",
    empresa: "Digital Solutions",
    ubicacion: "Miraflores, Lima",
    modalidad: "Presencial",
    salario: "S/. 3,500 - 5,000",
    match: 82,
    skills: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    titulo: "Backend Developer",
    empresa: "StartupXYZ",
    ubicacion: "Remoto",
    modalidad: "Remoto",
    salario: "S/. 4,000 - 6,000",
    match: 90,
    skills: ["Node.js", "MongoDB", "Docker"],
  },
  {
    id: 5,
    titulo: "DevOps Engineer",
    empresa: "CloudTech Peru",
    ubicacion: "Lima, Perú",
    modalidad: "Híbrido",
    salario: "S/. 6,000 - 8,000",
    match: 75,
    skills: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    id: 6,
    titulo: "Mobile Developer",
    empresa: "AppMakers",
    ubicacion: "San Miguel, Lima",
    modalidad: "Presencial",
    salario: "S/. 4,500 - 6,000",
    match: 70,
    skills: ["React Native", "iOS", "Android"],
  },
]

export default function Ofertas() {
  const [search, setSearch] = useState("")

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
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Buscar Ofertas de Empleo</h1>

        <Card className="p-4 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar por puesto, empresa o habilidad..."
                  className="pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div>
              <select className="w-full bg-background border border-input rounded-md px-3 py-2">
                <option>Todas las modalidades</option>
                <option>Remoto</option>
                <option>Presencial</option>
                <option>Híbrido</option>
              </select>
            </div>
          </div>
        </Card>

        <div className="grid gap-4">
          {ofertas.map((oferta) => (
            <Card key={oferta.id} className="p-6 hover:border-primary transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{oferta.titulo}</h3>
                    <Badge variant={oferta.match >= 90 ? "default" : "secondary"}>{oferta.match}% Match</Badge>
                  </div>
                  <p className="text-muted-foreground font-medium">{oferta.empresa}</p>
                </div>
                <Link href={`/ofertas/${oferta.id}`}>
                  <Button>Ver Detalles</Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{oferta.ubicacion}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{oferta.modalidad}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{oferta.salario}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {oferta.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
