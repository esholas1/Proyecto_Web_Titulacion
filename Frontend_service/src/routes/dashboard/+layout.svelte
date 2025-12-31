<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Avatar from "$lib/components/ui/avatar.svelte";
  import { auth } from "$lib/stores/auth";
  
  let { children } = $props();
  
  let currentPath = $state("");
  
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }
  
  let isReclutador = $derived(currentPath.includes('/dashboard/reclutador'));

  const postulanteItems = [
    { href: "/dashboard/postulante", label: "Inicio", icon: "🏠" },
    { href: "/dashboard/postulante/perfil", label: "Mi Perfil", icon: "👤" },
    { href: "/ofertas", label: "Buscar Empleo", icon: "🔍" },
    { href: "/dashboard/postulante/postulaciones", label: "Mis Postulaciones", icon: "📋" },
    { href: "/dashboard/postulante/estadisticas", label: "Estadísticas", icon: "📊" },
    { href: "/dashboard/postulante/configuracion", label: "Configuración", icon: "⚙️" },
  ];

  const reclutadorItems = [
    { href: "/dashboard/reclutador", label: "Dashboard", icon: "📊" },
    { href: "/dashboard/reclutador/ofertas", label: "Mis Ofertas", icon: "briefcase" },
    { href: "/dashboard/reclutador/candidatos", label: "Candidatos", icon: "users" },
    { href: "/dashboard/reclutador/configuracion", label: "Configuración", icon: "settings" },
  ];

  let sidebarItems = $derived(isReclutador ? reclutadorItems : postulanteItems);
  
  let displayUser = $derived($auth || { name: 'Usuario Demo', email: 'demo@sumaqti.com', role: isReclutador ? 'reclutador' : 'postulante' });
</script>

<div class="flex min-h-screen flex-col md:flex-row">
  <!-- Sidebar -->
  <aside class="w-full border-r bg-muted/40 md:w-64 md:shrink-0">
    <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <a href="/" class="flex items-center gap-2 font-semibold">
        <span class="">SUMAQTI</span>
      </a>
    </div>
    <div class="flex-1 overflow-auto py-2">
      <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
        {#each sidebarItems as item}
          <a
            href={item.href}
            class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary {currentPath === item.href ? 'bg-muted text-primary' : 'text-muted-foreground'}"
          >
            <!-- Simple icon rendering logic -->
            {#if item.icon === 'briefcase'}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            {:else if item.icon === 'users'}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {:else if item.icon === 'settings'}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            {:else}
                <span class="text-lg">{item.icon}</span>
            {/if}
            {item.label}
          </a>
        {/each}
      </nav>
    </div>
    <div class="mt-auto p-4 border-t">
        <div class="flex items-center gap-3">
            <Avatar fallback={displayUser?.name?.substring(0,2).toUpperCase() || "UD"} />
            <div class="overflow-hidden">
                <p class="truncate text-sm font-medium">{displayUser?.name || 'Usuario Demo'}</p>
                <p class="truncate text-xs text-muted-foreground">{displayUser?.role === 'reclutador' ? 'Reclutador' : 'Postulante'}</p>
            </div>
        </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    {@render children()}
  </main>
</div>
