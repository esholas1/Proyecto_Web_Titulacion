<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";

  let showViews = $state(false);
</script>

<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div class="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
    <div class="mr-4 flex">
      <a class="mr-6 flex items-center space-x-2" href="/">
        <span class="font-bold text-xl tracking-tighter">SUMAQTI</span>
      </a>
      <nav class="flex items-center space-x-6 text-sm font-medium">
        <a href="/#features" class="transition-colors hover:text-foreground/80 text-foreground/60">Características</a>
        <a href="/#about" class="transition-colors hover:text-foreground/80 text-foreground/60">Nosotros</a>
        <button 
          onclick={() => showViews = !showViews}
          class="transition-colors hover:text-foreground/80 text-foreground/60 relative"
        >
          Ver Todas las Vistas ▼
        </button>
      </nav>
    </div>
    <div class="flex items-center space-x-4">
      <nav class="flex items-center space-x-2">
        <a href="/login">
          <Button variant="ghost" size="sm">Iniciar Sesión</Button>
        </a>
        <a href="/register">
          <Button size="sm">Registrarse</Button>
        </a>
      </nav>
    </div>
  </div>
  
  <!-- Menú desplegable con todas las vistas -->
  {#if showViews}
    <div class="border-t bg-background/95 backdrop-blur">
      <div class="container max-w-screen-2xl px-4 py-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Vistas Generales -->
          <div>
            <h3 class="font-semibold mb-2 text-sm text-primary">🏠 Vistas Generales</h3>
            <div class="space-y-1">
              <a href="/" class="block text-sm py-1 hover:text-primary transition-colors">1. Landing Page</a>
              <a href="/login" class="block text-sm py-1 hover:text-primary transition-colors">2. Iniciar Sesión</a>
              <a href="/register" class="block text-sm py-1 hover:text-primary transition-colors">3. Registro</a>
              <a href="/forgot-password" class="block text-sm py-1 hover:text-primary transition-colors">4. Recuperar Contraseña</a>
              <a href="/soporte" class="block text-sm py-1 hover:text-primary transition-colors">5. Soporte</a>
              <a href="/ofertas" class="block text-sm py-1 hover:text-primary transition-colors">6. Búsqueda de Empleo</a>
              <a href="/ofertas/1" class="block text-sm py-1 hover:text-primary transition-colors">7. Detalle de Oferta</a>
            </div>
          </div>
          
          <!-- Vistas del Postulante -->
          <div>
            <h3 class="font-semibold mb-2 text-sm text-primary">👤 Dashboard Postulante</h3>
            <div class="space-y-1">
              <a href="/dashboard/postulante" class="block text-sm py-1 hover:text-primary transition-colors">8. Dashboard Principal</a>
              <a href="/dashboard/postulante/perfil" class="block text-sm py-1 hover:text-primary transition-colors">9. Mi Perfil</a>
              <a href="/dashboard/postulante/postulaciones" class="block text-sm py-1 hover:text-primary transition-colors">10. Mis Postulaciones</a>
              <a href="/dashboard/postulante/estadisticas" class="block text-sm py-1 hover:text-primary transition-colors">11. Estadísticas IA</a>
              <a href="/dashboard/postulante/configuracion" class="block text-sm py-1 hover:text-primary transition-colors">12. Configuración</a>
            </div>
          </div>
          
          <!-- Vistas del Reclutador -->
          <div>
            <h3 class="font-semibold mb-2 text-sm text-primary">💼 Dashboard Reclutador</h3>
            <div class="space-y-1">
              <a href="/dashboard/reclutador" class="block text-sm py-1 hover:text-primary transition-colors">13. Dashboard Principal</a>
              <a href="/dashboard/reclutador/ofertas" class="block text-sm py-1 hover:text-primary transition-colors">14. Gestión de Ofertas</a>
              <a href="/dashboard/reclutador/ofertas/nueva" class="block text-sm py-1 hover:text-primary transition-colors">15. Publicar Oferta</a>
              <a href="/dashboard/reclutador/candidatos" class="block text-sm py-1 hover:text-primary transition-colors">16. Gestión de Candidatos</a>
              <a href="/dashboard/reclutador/configuracion" class="block text-sm py-1 hover:text-primary transition-colors">17. Configuración Empresa</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
