"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Search, Filter } from "lucide-react"

const candidatos = [
  {
    id: 1,
    nombre: "Juan Pérez García",
    puesto: "Desarrollador Full Stack Senior",
    match: 95,
    skills: ["React", "Node.js", "PostgreSQL"],
    experiencia: "5+ años",
    ubicacion: "Lima",
  },
  {
    id: 2,
    nombre: "María González",
    puesto: "Frontend Developer",
    match: 92,
    skills: ["React", "TypeScript", "Tailwind"],
    experiencia: "4 años",
    ubicacion: "Lima",
  },
  {
    id: 3,
    nombre: "Carlos Rodríguez",
    puesto: "Backend Engineer",
    match: 88,
    skills: ["Python", "Django", "AWS"],
    experiencia: "6 años",
    ubicacion: "Arequipa",
  },
  {
    id: 4,
    nombre: "Ana Martínez",
    puesto: "Full Stack Developer",
    match: 85,
    skills: ["JavaScript", "Vue.js", "MongoDB"],
    experiencia: "3 años",
    ubicacion: "Lima",
  },
  {
    id: 5,
    nombre: "Luis Torres",
    puesto: "DevOps Engineer",
    match: 82,
    skills: ["Docker", "Kubernetes", "AWS"],
    experiencia: "5 años",
    ubicacion: "Cusco",
  },
]

export default function Postulantes() {
  const [search, setSearch] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SUMAQTI</span>
          </Link>
          <Link href="/reclutador/dashboard">
            <Button variant="ghost" size="sm">
              ← Volver al Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Gestión de Candidatos</h1>

        <Card className="p-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre, habilidad o puesto..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">47</div>
            <div className="text-sm text-muted-foreground">Total Candidatos</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500 mb-1">23</div>
            <div className="text-sm text-muted-foreground">Match +85%</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500 mb-1">12</div>
            <div className="text-sm text-muted-foreground">Nuevos esta semana</div>
          </Card>
        </div>

        <div className="grid gap-4">
          {candidatos.map((candidato) => (
            <Card key={candidato.id} className="p-6 hover:border-primary transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{candidato.nombre}</h3>
                    <Badge variant={candidato.match >= 90 ? "default" : "secondary"}>{candidato.match}% Match IA</Badge>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{candidato.puesto}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>📍 {candidato.ubicacion}</span>
                    <span>💼 {candidato.experiencia}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Ver Perfil
                  </Button>
                  <Button size="sm">Contactar</Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {candidato.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button variant="outline">Cargar Más Candidatos</Button>
        </div>
      </div>
    </div>
  )
}
