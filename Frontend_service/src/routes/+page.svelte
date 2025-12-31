<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Card from "$lib/components/ui/card.svelte";
</script>

<div class="flex flex-col items-center justify-center">
  <!-- Hero Section -->
  <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
    <div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center px-4">
      <a
        class="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
        href="/register"
      >
        🚀 Potenciado por Inteligencia Artificial
      </a>
      <h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
        Optimiza tu búsqueda de empleo con <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">IA</span>
      </h1>
      <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        SUMAQTI conecta a los mejores talentos técnicos con las empresas líderes mediante algoritmos de recomendación avanzados y análisis de perfil automatizado.
      </p>
      <div class="space-x-4">
        <a href="/register">
          <Button size="lg">Empezar Ahora</Button>
        </a>
        <a href="#features">
          <Button variant="outline" size="lg">Saber Más</Button>
        </a>
      </div>
      
      <!-- Añadido acceso rápido a las vistas principales -->
      <div class="mt-8 pt-8 border-t w-full max-w-4xl">
        <p class="text-sm text-muted-foreground mb-4">✨ Acceso rápido a las vistas principales (sin necesidad de registrarse):</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/dashboard/postulante">
            <Button variant="outline" size="sm" class="w-full">👤 Dashboard Postulante</Button>
          </a>
          <a href="/dashboard/reclutador">
            <Button variant="outline" size="sm" class="w-full">💼 Dashboard Reclutador</Button>
          </a>
          <a href="/ofertas">
            <Button variant="outline" size="sm" class="w-full">🔍 Buscar Empleo</Button>
          </a>
          <a href="/dashboard/postulante/estadisticas">
            <Button variant="outline" size="sm" class="w-full">📊 Estadísticas IA</Button>
          </a>
          <a href="/dashboard/reclutador/candidatos">
            <Button variant="outline" size="sm" class="w-full">👥 Candidatos</Button>
          </a>
          <a href="/soporte">
            <Button variant="outline" size="sm" class="w-full">💬 Soporte</Button>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="container space-y-6 bg-slate-50/5 py-8 dark:bg-transparent md:py-12 lg:py-24 px-4">
    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
      <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
        Características Principales
      </h2>
      <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Nuestra plataforma utiliza tecnología de punta para resolver los problemas comunes en la búsqueda de empleo.
      </p>
    </div>
    <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
      <Card class="flex flex-col justify-between p-6">
        <div class="space-y-2">
          <h3 class="font-bold">Recomendaciones IA</h3>
          <p class="text-sm text-muted-foreground">
            Algoritmos híbridos que analizan tu perfil y encuentran las ofertas que mejor se adaptan a tus habilidades.
          </p>
        </div>
      </Card>
      <Card class="flex flex-col justify-between p-6">
        <div class="space-y-2">
          <h3 class="font-bold">Feedback Automático</h3>
          <p class="text-sm text-muted-foreground">
            Recibe retroalimentación instantánea sobre tus postulaciones y consejos para mejorar tu perfil profesional.
          </p>
        </div>
      </Card>
      <Card class="flex flex-col justify-between p-6">
        <div class="space-y-2">
          <h3 class="font-bold">Análisis de Perfil</h3>
          <p class="text-sm text-muted-foreground">
            Evaluación detallada de tus competencias técnicas y blandas mediante procesamiento de lenguaje natural (NLP).
          </p>
        </div>
      </Card>
      <Card class="flex flex-col justify-between p-6">
        <div class="space-y-2">
          <h3 class="font-bold">Dashboard Intuitivo</h3>
          <p class="text-sm text-muted-foreground">
            Visualiza tus estadísticas, estado de postulaciones y métricas de compatibilidad en tiempo real.
          </p>
        </div>
      </Card>
      <Card class="flex flex-col justify-between p-6">
        <div class="space-y-2">
          <h3 class="font-bold">Para Reclutadores</h3>
          <p class="text-sm text-muted-foreground">
            Herramientas avanzadas para filtrar candidatos y gestionar procesos de selección de manera eficiente.
          </p>
        </div>
      </Card>
      <Card class="flex flex-col justify-between p-6">
        <div class="space-y-2">
          <h3 class="font-bold">Seguridad y Privacidad</h3>
          <p class="text-sm text-muted-foreground">
            Tus datos están protegidos con los más altos estándares de seguridad y encriptación.
          </p>
        </div>
      </Card>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="container py-8 md:py-12 lg:py-24 px-4">
    <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
      <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
        Sobre Nosotros
      </h2>
      <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        En SUMAQTI, nuestra misión es democratizar el acceso a oportunidades laborales de calidad utilizando el poder de la inteligencia artificial. Creemos en un futuro donde cada profesional pueda encontrar su lugar ideal y cada empresa el talento perfecto, sin sesgos y con total transparencia.
      </p>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
        <div class="flex flex-col items-center">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span class="text-2xl">🎯</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Misión</h3>
            <p class="text-muted-foreground">Conectar talento con oportunidades de manera eficiente.</p>
        </div>
        <div class="flex flex-col items-center">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span class="text-2xl">👁️</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Visión</h3>
            <p class="text-muted-foreground">Ser la plataforma líder en reclutamiento inteligente en Latam.</p>
        </div>
        <div class="flex flex-col items-center">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span class="text-2xl">💎</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Valores</h3>
            <p class="text-muted-foreground">Innovación, Transparencia y Excelencia.</p>
        </div>
      </div>
    </div>
  </section>
</div>
