"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Plus, X } from "lucide-react"

export default function PublicarEmpleo() {
  const [skills, setSkills] = useState<string[]>(["React", "Node.js"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

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

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Publicar Nueva Oferta de Empleo</h1>

        <form className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Información Básica</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="titulo">Título del Puesto *</Label>
                <Input id="titulo" placeholder="ej: Desarrollador Full Stack Senior" required />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ubicacion">Ubicación</Label>
                  <Input id="ubicacion" placeholder="Lima, Perú" />
                </div>
                <div>
                  <Label htmlFor="modalidad">Modalidad *</Label>
                  <select
                    id="modalidad"
                    className="w-full bg-background border border-input rounded-md px-3 py-2"
                    required
                  >
                    <option value="">Seleccionar...</option>
                    <option>Remoto</option>
                    <option>Presencial</option>
                    <option>Híbrido</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="salario-min">Salario Mínimo (S/.)</Label>
                  <Input id="salario-min" type="number" placeholder="3000" />
                </div>
                <div>
                  <Label htmlFor="salario-max">Salario Máximo (S/.)</Label>
                  <Input id="salario-max" type="number" placeholder="5000" />
                </div>
              </div>

              <div>
                <Label htmlFor="tipo-contrato">Tipo de Contrato</Label>
                <select id="tipo-contrato" className="w-full bg-background border border-input rounded-md px-3 py-2">
                  <option>Tiempo completo</option>
                  <option>Medio tiempo</option>
                  <option>Por proyecto</option>
                  <option>Freelance</option>
                </select>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Descripción del Puesto</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="descripcion">Descripción General *</Label>
                <Textarea
                  id="descripcion"
                  rows={4}
                  placeholder="Describe el puesto, responsabilidades principales y lo que buscas en un candidato..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="responsabilidades">Responsabilidades</Label>
                <Textarea
                  id="responsabilidades"
                  rows={4}
                  placeholder="Lista las responsabilidades principales del puesto..."
                />
              </div>

              <div>
                <Label htmlFor="requisitos">Requisitos</Label>
                <Textarea id="requisitos" rows={4} placeholder="Lista los requisitos mínimos y deseables..." />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Habilidades Técnicas</h2>
            <div className="space-y-4">
              <div>
                <Label>Habilidades Requeridas</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    placeholder="ej: Python, React, AWS..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                  />
                  <Button type="button" onClick={addSkill}>
                    <Plus className="h-4 w-4 mr-1" />
                    Añadir
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} className="flex items-center gap-1">
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)} className="ml-1">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm mb-2">Sugerencias de IA basadas en el puesto:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
                        TypeScript
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
                        PostgreSQL
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
                        Docker
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
                        Git
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Configuración de IA</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="font-medium">Activar matching automático</p>
                  <p className="text-sm text-muted-foreground">
                    El sistema mostrará automáticamente candidatos compatibles
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <div>
                  <p className="font-medium">Filtrado automático</p>
                  <p className="text-sm text-muted-foreground">
                    Rechazar automáticamente candidatos con menos de 70% de match
                  </p>
                </div>
              </label>

              <div>
                <Label htmlFor="match-min">Match mínimo requerido (%)</Label>
                <Input id="match-min" type="number" defaultValue="60" min="0" max="100" />
              </div>
            </div>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Publicar Oferta
            </Button>
            <Button type="button" variant="outline">
              Guardar como Borrador
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
