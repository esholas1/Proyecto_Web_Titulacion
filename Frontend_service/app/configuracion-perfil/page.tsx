"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, Settings } from "lucide-react"

export default function ConfiguracionPerfil() {
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
            <Link href="/recomendaciones">
              <Button variant="ghost" size="sm">
                Recomendaciones
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Settings className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Configuración del Perfil</h1>
        </div>

        <div className="grid gap-6 max-w-2xl">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Preferencias de Búsqueda</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="modalidad">Modalidad de Trabajo</Label>
                <select id="modalidad" className="w-full mt-1 bg-background border border-input rounded-md px-3 py-2">
                  <option>Remoto</option>
                  <option>Presencial</option>
                  <option>Híbrido</option>
                  <option>Cualquiera</option>
                </select>
              </div>

              <div>
                <Label htmlFor="salario-min">Salario Mínimo Esperado (S/.)</Label>
                <Input id="salario-min" type="number" defaultValue="3000" />
              </div>

              <div>
                <Label htmlFor="ubicaciones">Ubicaciones Preferidas</Label>
                <Input id="ubicaciones" placeholder="Lima, Arequipa, Cusco..." />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Configuración de IA</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="font-medium">Activar recomendaciones automáticas</p>
                  <p className="text-sm text-muted-foreground">Recibe sugerencias de empleos basadas en tu perfil</p>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="font-medium">Análisis de compatibilidad</p>
                  <p className="text-sm text-muted-foreground">Muestra porcentaje de match con cada oferta</p>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <div>
                  <p className="font-medium">Postulación automática</p>
                  <p className="text-sm text-muted-foreground">Aplica automáticamente a ofertas con +90% de match</p>
                </div>
              </label>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Notificaciones</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span>Nuevas ofertas de empleo</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span>Actualizaciones de postulaciones</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span>Newsletter semanal</span>
              </label>
            </div>
          </Card>

          <Button className="w-full">Guardar Configuración</Button>
        </div>
      </div>
    </div>
  )
}
