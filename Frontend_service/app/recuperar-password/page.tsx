"use client"
import Link from "next/link"
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Sparkles, CheckCircle } from "lucide-react"

export default function RecuperarPassword() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => setSent(true), 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold">Recuperar Contraseña</h1>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-muted-foreground text-sm mb-4">
              Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
            </p>

            <div>
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="juan@ejemplo.com" required />
            </div>

            <Button type="submit" className="w-full">
              Enviar Enlace de Recuperación
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h3 className="text-xl font-bold">Correo Enviado</h3>
            <p className="text-muted-foreground">
              Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link href="/login" className="text-sm text-muted-foreground hover:text-primary">
            ← Volver a Iniciar Sesión
          </Link>
        </div>
      </Card>
    </div>
  )
}
