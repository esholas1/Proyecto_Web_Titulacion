"use client"
import Link from "next/link"
import type React from "react"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export default function Registro() {
  const router = useRouter()
  const [role, setRole] = useState("postulante")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      if (role === "reclutador") {
        router.push("/reclutador/dashboard")
      } else {
        router.push("/perfil")
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold">Crear Cuenta</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nombre">Nombre Completo</Label>
            <Input id="nombre" placeholder="Juan Pérez" required />
          </div>

          <div>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="juan@ejemplo.com" required />
          </div>

          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>

          <div>
            <Label>Tipo de Cuenta</Label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="postulante"
                  checked={role === "postulante"}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-4 h-4"
                />
                <span>Postulante</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="reclutador"
                  checked={role === "reclutador"}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-4 h-4"
                />
                <span>Reclutador</span>
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creando cuenta..." : "Registrarse"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">¿Ya tienes cuenta? </span>
          <Link href="/login" className="text-primary hover:underline">
            Iniciar Sesión
          </Link>
        </div>

        <div className="mt-4 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Volver al inicio
          </Link>
        </div>
      </Card>
    </div>
  )
}
