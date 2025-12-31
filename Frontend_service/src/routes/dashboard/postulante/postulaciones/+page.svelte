<script lang="ts">
  import Card from "$lib/components/ui/card.svelte";
  import Badge from "$lib/components/ui/badge.svelte";
  import Button from "$lib/components/ui/button.svelte";
  import Progress from "$lib/components/ui/progress.svelte";
  
  const applications = [
    {
      id: 1,
      jobTitle: "Desarrollador Frontend Senior",
      company: "TechSolutions Peru",
      status: "En Revisión",
      date: "18 Nov 2025",
      match: 95,
      feedback: null
    },
    {
      id: 2,
      jobTitle: "Ingeniero de Datos Junior",
      company: "DataCorp",
      status: "Rechazado",
      date: "15 Nov 2025",
      match: 78,
      feedback: {
        reason: "Falta de experiencia en AWS",
        improvement: "Te recomendamos obtener la certificación AWS Cloud Practitioner para mejorar tu perfil para este tipo de roles."
      }
    },
    {
      id: 3,
      jobTitle: "Diseñador UX/UI",
      company: "Creativa Studio",
      status: "Entrevista",
      date: "10 Nov 2025",
      match: 60,
      feedback: null
    }
  ];

  function getStatusColor(status: string) {
    switch (status) {
      case "En Revisión": return "bg-yellow-500/10 text-yellow-500";
      case "Rechazado": return "bg-red-500/10 text-red-500";
      case "Entrevista": return "bg-green-500/10 text-green-500";
      default: return "bg-gray-500/10 text-gray-500";
    }
  }
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-3xl font-bold tracking-tight">Mis Postulaciones</h2>
    <p class="text-muted-foreground">Seguimiento y retroalimentación de tus procesos.</p>
  </div>

  <div class="grid gap-6">
    {#each applications as app}
      <Card class="p-6">
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <h3 class="text-xl font-bold">{app.jobTitle}</h3>
              <Badge variant="secondary" class={getStatusColor(app.status)}>
                {app.status}
              </Badge>
            </div>
            <p class="text-muted-foreground font-medium">{app.company}</p>
            <p class="text-sm text-muted-foreground">Postulado el {app.date}</p>
          </div>
          
          <div class="flex flex-col gap-2 min-w-[200px]">
            <div class="space-y-1">
              <div class="flex justify-between text-sm">
                <span>Compatibilidad IA</span>
                <span class="font-bold">{app.match}%</span>
              </div>
              <Progress value={app.match} class="h-2" />
            </div>
            <Button variant="outline" size="sm" class="mt-2">Ver Detalle</Button>
          </div>
        </div>

        {#if app.feedback}
          <div class="mt-6 rounded-lg bg-muted/50 p-4 border border-border">
            <div class="flex items-start gap-3">
              <div class="mt-1 text-xl">🤖</div>
              <div class="space-y-1">
                <h4 class="font-semibold text-sm">Feedback de IA</h4>
                <p class="text-sm text-muted-foreground">
                  <span class="font-medium text-foreground">Razón estimada:</span> {app.feedback.reason}
                </p>
                <p class="text-sm text-muted-foreground">
                  <span class="font-medium text-foreground">Sugerencia de mejora:</span> {app.feedback.improvement}
                </p>
              </div>
            </div>
          </div>
        {/if}
      </Card>
    {/each}
  </div>
</div>
