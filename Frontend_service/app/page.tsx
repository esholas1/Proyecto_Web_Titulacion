import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Target, TrendingUp, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SUMAQTI</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/#features" className="text-sm hover:text-primary">
              Características
            </Link>
            <Link href="/#about" className="text-sm hover:text-primary">
              Nosotros
            </Link>
            <Link href="/soporte" className="text-sm hover:text-primary">
              Soporte
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/registro">
              <Button size="sm">Registrarse</Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-balance">
          Encuentra tu empleo ideal con <span className="text-primary">Inteligencia Artificial</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          SUMAQTI conecta talento con oportunidades usando IA avanzada para match perfecto entre postulantes y empresas
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/registro">
            <Button size="lg">Comenzar Gratis</Button>
          </Link>
          <Link href="/ofertas">
            <Button size="lg" variant="outline">
              Ver Ofertas
            </Button>
          </Link>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Match Inteligente</h3>
            <p className="text-muted-foreground">Algoritmo de IA que encuentra ofertas perfectas según tu perfil</p>
          </Card>
          <Card className="p-6">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Análisis Predictivo</h3>
            <p className="text-muted-foreground">Estadísticas y recomendaciones para mejorar tu perfil profesional</p>
          </Card>
          <Card className="p-6">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Retroalimentación IA</h3>
            <p className="text-muted-foreground">Feedback automático sobre postulaciones y competencias</p>
          </Card>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-lg text-muted-foreground mb-4">
            SUMAQTI es una plataforma innovadora que revoluciona la búsqueda de empleo en Perú mediante inteligencia
            artificial avanzada.
          </p>
          <p className="text-muted-foreground">
            Desarrollado como proyecto de titulación, nuestro objetivo es conectar talento con oportunidades de manera
            eficiente, reduciendo tiempos de contratación y mejorando la experiencia tanto para postulantes como
            reclutadores.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Acceso Rápido a Vistas</h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Link href="/perfil">
            <Button variant="outline" className="w-full bg-transparent">
              Mi Perfil
            </Button>
          </Link>
          <Link href="/ofertas">
            <Button variant="outline" className="w-full bg-transparent">
              Buscar Ofertas
            </Button>
          </Link>
          <Link href="/recomendaciones">
            <Button variant="outline" className="w-full bg-transparent">
              Recomendaciones IA
            </Button>
          </Link>
          <Link href="/estadisticas">
            <Button variant="outline" className="w-full bg-transparent">
              Estadísticas
            </Button>
          </Link>
          <Link href="/reclutador/dashboard">
            <Button variant="outline" className="w-full bg-transparent">
              Panel Reclutador
            </Button>
          </Link>
          <Link href="/soporte">
            <Button variant="outline" className="w-full bg-transparent">
              Soporte
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          © 2025 SUMAQTI - Plataforma de Empleo con IA
        </div>
      </footer>
    </div>
  )
}
