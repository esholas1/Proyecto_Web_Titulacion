"use client"
import Link from "next/link"
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, MessageSquare, Mail, HelpCircle } from "lucide-react"

export default function Soporte() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => setSent(true), 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SUMAQTI</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              ← Volver al Inicio
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Centro de Soporte</h1>
            <p className="text-xl text-muted-foreground">¿Necesitas ayuda? Estamos aquí para ti</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Chat en Vivo</h3>
              <p className="text-sm text-muted-foreground mb-4">Respuesta inmediata de nuestro equipo</p>
              <Button variant="outline" size="sm">
                Iniciar Chat
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">soporte@sumaqti.com</p>
              <Button variant="outline" size="sm">
                Enviar Email
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Base de Conocimientos</h3>
              <p className="text-sm text-muted-foreground mb-4">Artículos y guías útiles</p>
              <Button variant="outline" size="sm">
                Ver Artículos
              </Button>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              {!sent ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input id="nombre" placeholder="Juan Pérez" required />
                    </div>

                    <div>
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input id="email" type="email" placeholder="juan@ejemplo.com" required />
                    </div>

                    <div>
                      <Label htmlFor="asunto">Asunto *</Label>
                      <Input id="asunto" placeholder="¿En qué podemos ayudarte?" required />
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea id="mensaje" rows={5} placeholder="Describe tu consulta o problema..." required />
                    </div>

                    <Button type="submit" className="w-full">
                      Enviar Mensaje
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-muted-foreground mb-4">
                    Hemos recibido tu consulta. Nuestro equipo te responderá en las próximas 24 horas.
                  </p>
                  <Button onClick={() => setSent(false)} variant="outline">
                    Enviar Otro Mensaje
                  </Button>
                </div>
              )}
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">¿Cómo funciona el algoritmo de matching?</h4>
                    <p className="text-sm text-muted-foreground">
                      Nuestro algoritmo de IA analiza múltiples factores incluyendo habilidades técnicas, experiencia,
                      ubicación y preferencias para calcular la compatibilidad entre postulantes y ofertas.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">¿Cómo puedo mejorar mi perfil?</h4>
                    <p className="text-sm text-muted-foreground">
                      Completa toda la información de tu perfil, agrega experiencia laboral detallada, lista todas tus
                      habilidades técnicas y mantén tu información actualizada.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">¿Cuánto tiempo tarda el proceso de postulación?</h4>
                    <p className="text-sm text-muted-foreground">
                      El tiempo de respuesta varía por empresa, pero el promedio es de 5-7 días hábiles. Recibirás
                      notificaciones sobre el estado de tus postulaciones.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">¿Es gratuito usar SUMAQTI?</h4>
                    <p className="text-sm text-muted-foreground">
                      Sí, SUMAQTI es completamente gratuito para postulantes. Las empresas pagan por publicar ofertas y
                      acceder a herramientas avanzadas de reclutamiento.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/10 border-primary">
                <h3 className="font-bold mb-2">¿Necesitas ayuda inmediata?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nuestro equipo de soporte está disponible de Lunes a Viernes de 9:00 AM a 6:00 PM
                </p>
                <div className="flex gap-2">
                  <Button size="sm">Chat en Vivo</Button>
                  <Button size="sm" variant="outline">
                    Llamar Ahora
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
