<script lang="ts">
  import Card from "$lib/components/ui/card.svelte";
  import Button from "$lib/components/ui/button.svelte";
  import Badge from "$lib/components/ui/badge.svelte";
  import { jobs } from "$lib/data";
</script>

<div class="flex items-center justify-between">
  <h1 class="text-lg font-semibold md:text-2xl">Panel de Control</h1>
</div>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  <Card class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium text-muted-foreground">Postulaciones Activas</span>
      <span class="text-2xl font-bold">12</span>
    </div>
  </Card>
  <Card class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium text-muted-foreground">Entrevistas Pendientes</span>
      <span class="text-2xl font-bold">3</span>
    </div>
  </Card>
  <Card class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium text-muted-foreground">Perfil Completado</span>
      <span class="text-2xl font-bold">85%</span>
    </div>
  </Card>
  <Card class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium text-muted-foreground">Visualizaciones de Perfil</span>
      <span class="text-2xl font-bold">45</span>
    </div>
  </Card>
</div>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
  <Card class="col-span-4 p-6">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="font-semibold">Recomendaciones para ti (IA)</h3>
      <a href="/ofertas" class="text-sm text-primary hover:underline">Ver todas</a>
    </div>
    <div class="space-y-4">
      {#each jobs.slice(0, 3) as job}
        <div class="flex items-center justify-between rounded-lg border p-4">
          <div class="space-y-1">
            <p class="font-medium leading-none">{job.title}</p>
            <p class="text-sm text-muted-foreground">{job.company} • {job.location}</p>
          </div>
          <div class="flex items-center gap-2">
            <Badge variant="secondary" class="bg-green-500/10 text-green-500 hover:bg-green-500/20">
              {job.match}% Match
            </Badge>
            <a href="/ofertas/{job.id}">
                <Button size="sm" variant="outline">Ver</Button>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </Card>
  
  <Card class="col-span-3 p-6">
    <h3 class="mb-4 font-semibold">Actividad Reciente</h3>
    <div class="space-y-8">
      <div class="flex items-center">
        <div class="ml-4 space-y-1">
          <p class="text-sm font-medium leading-none">Postulaste a Frontend Developer</p>
          <p class="text-sm text-muted-foreground">Hace 2 horas</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="ml-4 space-y-1">
          <p class="text-sm font-medium leading-none">Tu perfil fue visto por Google</p>
          <p class="text-sm text-muted-foreground">Hace 5 horas</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="ml-4 space-y-1">
          <p class="text-sm font-medium leading-none">Actualizaste tus habilidades</p>
          <p class="text-sm text-muted-foreground">Ayer</p>
        </div>
      </div>
    </div>
  </Card>
</div>
