<script lang="ts">
  import { page } from '$app/stores';
  import Avatar from "$lib/components/ui/avatar.svelte";
  
  let { children } = $props();
  
  const sidebarItems = [
    { href: "/dashboard/reclutador", label: "Dashboard", icon: "📊" },
    { href: "/dashboard/reclutador/ofertas", label: "Mis Ofertas", icon: "briefcase" }, // Placeholder icon
    { href: "/dashboard/reclutador/candidatos", label: "Candidatos", icon: "👥" },
    { href: "/dashboard/reclutador/configuracion", label: "Configuración", icon: "⚙️" },
  ];
</script>

<div class="flex min-h-screen flex-col md:flex-row">
  <!-- Sidebar -->
  <aside class="w-full border-r bg-muted/40 md:w-64 md:shrink-0">
    <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <a href="/" class="flex items-center gap-2 font-semibold">
        <span class="">SUMAQTI <span class="text-xs font-normal text-muted-foreground">Empresas</span></span>
      </a>
    </div>
    <div class="flex-1 overflow-auto py-2">
      <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
        {#each sidebarItems as item}
          <a
            href={item.href}
            class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary {$page.url.pathname === item.href ? 'bg-muted text-primary' : 'text-muted-foreground'}"
          >
            <span class="text-lg">{item.icon}</span>
            {item.label}
          </a>
        {/each}
      </nav>
    </div>
    <div class="mt-auto p-4 border-t">
        <div class="flex items-center gap-3">
            <Avatar fallback="TC" />
            <div class="overflow-hidden">
                <p class="truncate text-sm font-medium">TechCorp HR</p>
                <p class="truncate text-xs text-muted-foreground">Reclutador</p>
            </div>
        </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    {@render children()}
  </main>
</div>
