<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Card from "$lib/components/ui/card.svelte";
  import Badge from "$lib/components/ui/badge.svelte";
  import Input from "$lib/components/ui/input.svelte";
  
  const myJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend Senior",
      location: "Lima, Remoto",
      type: "Tiempo Completo",
      posted: "Hace 2 días",
      candidates: 45,
      status: "Activa"
    },
    {
      id: 2,
      title: "Ingeniero de Datos Junior",
      location: "Arequipa, Híbrido",
      type: "Tiempo Completo",
      posted: "Hace 5 días",
      candidates: 28,
      status: "Activa"
    },
    {
      id: 3,
      title: "Product Manager",
      location: "Lima",
      type: "Tiempo Completo",
      posted: "Hace 2 semanas",
      candidates: 12,
      status: "Cerrada"
    }
  ];
</script>

<div class="flex flex-col gap-6">
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
        <h2 class="text-3xl font-bold tracking-tight">Gestión de Ofertas</h2>
        <p class="text-muted-foreground">Administra tus publicaciones y monitorea su rendimiento.</p>
    </div>
    <Button href="/dashboard/reclutador/ofertas/nueva">
        <span class="mr-2">+</span> Crear Nueva Oferta
    </Button>
  </div>

  <div class="flex items-center gap-4">
    <div class="w-full md:w-1/3">
        <Input placeholder="Buscar ofertas..." />
    </div>
    <Button variant="outline">Filtros</Button>
  </div>

  <div class="grid gap-4">
    {#each myJobs as job}
      <Card class="p-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
                <h3 class="text-xl font-bold">{job.title}</h3>
                <Badge variant={job.status === 'Activa' ? 'default' : 'secondary'}>
                    {job.status}
                </Badge>
            </div>
            <div class="flex gap-4 text-sm text-muted-foreground">
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
                <span>🕒 Publicado: {job.posted}</span>
            </div>
          </div>
          
          <div class="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div class="text-center">
                <p class="text-2xl font-bold">{job.candidates}</p>
                <p class="text-xs text-muted-foreground">Candidatos</p>
            </div>
            <div class="flex gap-2">
                <Button variant="outline" size="sm">Editar</Button>
                <Button size="sm" href="/dashboard/reclutador/candidatos">Ver Candidatos</Button>
            </div>
          </div>
        </div>
      </Card>
    {/each}
  </div>
</div>
