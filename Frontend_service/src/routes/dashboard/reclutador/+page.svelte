<script lang="ts">
  import Card from "$lib/components/ui/card.svelte";
  import Button from "$lib/components/ui/button.svelte";
  import Badge from "$lib/components/ui/badge.svelte";
  
  const recentApplications = [
    { name: "Ana García", role: "Frontend Dev", match: 98, date: "Hace 1h" },
    { name: "Carlos Ruiz", role: "Backend Dev", match: 85, date: "Hace 3h" },
    { name: "Maria Lopez", role: "UX Designer", match: 92, date: "Hace 5h" },
    { name: "Juan Pérez", role: "Frontend Dev", match: 75, date: "Hace 1d" },
  ];
</script>

<div class="flex items-center justify-between">
  <h1 class="text-lg font-semibold md:text-2xl">Panel de Reclutamiento</h1>
  <Button href="/dashboard/reclutador/ofertas/nueva">Publicar Nueva Oferta</Button>
</div>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  <Card class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium text-muted-foreground">Ofertas Activas</span>
      <span class="text-2xl font-bold">8</span>
    </div>
  </Card>
  <Card class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium text-muted-foreground">Nuevos Candidatos</span>
      <span class="text-2xl font-bold">24</span>
      <span class="text-xs text-green-500">+12 hoy</span>
    </div>
  </Card>
  <Card class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium text-muted-foreground">Entrevistas Programadas</span>
      <span class="text-2xl font-bold">5</span>
    </div>
  </Card>
  <Card class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium text-muted-foreground">Eficiencia de Selección</span>
      <span class="text-2xl font-bold">88%</span>
    </div>
  </Card>
</div>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
  <Card class="col-span-4 p-6">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="font-semibold">Candidatos Recientes (Top Match IA)</h3>
      <a href="/dashboard/reclutador/candidatos" class="text-sm text-primary hover:underline">Ver todos</a>
    </div>
    <div class="space-y-4">
      {#each recentApplications as app}
        <div class="flex items-center justify-between rounded-lg border p-4">
          <div class="flex items-center gap-4">
            <div class="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold">
                {app.name.charAt(0)}
            </div>
            <div class="space-y-1">
              <p class="font-medium leading-none">{app.name}</p>
              <p class="text-sm text-muted-foreground">Postuló a {app.role}</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-right">
                <p class="text-sm font-bold text-green-500">{app.match}% Match</p>
                <p class="text-xs text-muted-foreground">{app.date}</p>
            </div>
            <Button size="sm" variant="outline">Ver Perfil</Button>
          </div>
        </div>
      {/each}
    </div>
  </Card>
  
  <Card class="col-span-3 p-6">
    <h3 class="mb-4 font-semibold">Rendimiento de Ofertas</h3>
    <div class="space-y-6">
      <div class="space-y-2">
        <div class="flex items-center justify-between text-sm">
            <span class="font-medium">Frontend Developer Senior</span>
            <span class="text-muted-foreground">45 postulantes</span>
        </div>
        <div class="h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div class="h-full bg-primary w-[75%]"></div>
        </div>
      </div>
      <div class="space-y-2">
        <div class="flex items-center justify-between text-sm">
            <span class="font-medium">Backend Node.js</span>
            <span class="text-muted-foreground">32 postulantes</span>
        </div>
        <div class="h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div class="h-full bg-primary w-[60%]"></div>
        </div>
      </div>
      <div class="space-y-2">
        <div class="flex items-center justify-between text-sm">
            <span class="font-medium">UX/UI Designer</span>
            <span class="text-muted-foreground">18 postulantes</span>
        </div>
        <div class="h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div class="h-full bg-primary w-[40%]"></div>
        </div>
      </div>
    </div>
    <div class="mt-6">
        <Button variant="outline" class="w-full" href="/dashboard/reclutador/ofertas">Gestionar Ofertas</Button>
    </div>
  </Card>
</div>
