<script lang="ts">
  import Card from "$lib/components/ui/card.svelte";
  import Progress from "$lib/components/ui/progress.svelte";
  
  // Datos simulados para gráficas
  const skillsAnalysis = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 60 },
    { name: "SQL", level: 70 },
  ];

  const marketDemand = [
    { name: "React", demand: 95 },
    { name: "Python", demand: 90 },
    { name: "AWS", demand: 85 },
    { name: "Docker", demand: 80 },
  ];
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-3xl font-bold tracking-tight">Estadísticas y Análisis IA</h2>
    <p class="text-muted-foreground">Métricas de desempeño y análisis de mercado para tu perfil.</p>
  </div>

  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <Card class="p-6">
      <div class="space-y-1">
        <p class="text-sm font-medium text-muted-foreground">Tasa de Respuesta</p>
        <p class="text-2xl font-bold">25%</p>
        <p class="text-xs text-green-500">+5% vs mes anterior</p>
      </div>
    </Card>
    <Card class="p-6">
      <div class="space-y-1">
        <p class="text-sm font-medium text-muted-foreground">Compatibilidad Promedio</p>
        <p class="text-2xl font-bold">78%</p>
        <p class="text-xs text-muted-foreground">Basado en 15 postulaciones</p>
      </div>
    </Card>
    <Card class="p-6">
      <div class="space-y-1">
        <p class="text-sm font-medium text-muted-foreground">Apariciones en Búsqueda</p>
        <p class="text-2xl font-bold">142</p>
        <p class="text-xs text-green-500">+12% esta semana</p>
      </div>
    </Card>
    <Card class="p-6">
      <div class="space-y-1">
        <p class="text-sm font-medium text-muted-foreground">Score de Perfil</p>
        <p class="text-2xl font-bold">A+</p>
        <p class="text-xs text-muted-foreground">Top 10% de candidatos</p>
      </div>
    </Card>
  </div>

  <div class="grid gap-6 md:grid-cols-2">
    <!-- Análisis de Habilidades -->
    <Card class="p-6">
      <h3 class="font-semibold mb-4">Análisis de Competencias Técnicas</h3>
      <div class="space-y-4">
        {#each skillsAnalysis as skill}
          <div class="space-y-1">
            <div class="flex justify-between text-sm">
              <span>{skill.name}</span>
              <span class="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} class="h-2" />
          </div>
        {/each}
      </div>
      <div class="mt-6 rounded-md bg-muted p-4 text-sm">
        <p class="font-medium mb-1">💡 Recomendación IA:</p>
        <p class="text-muted-foreground">
          Tu nivel en Python es bueno, pero mejorar tus habilidades en frameworks de Data Science podría aumentar tus oportunidades en un 30%.
        </p>
      </div>
    </Card>

    <!-- Demanda de Mercado -->
    <Card class="p-6">
      <h3 class="font-semibold mb-4">Habilidades Más Demandadas (Top Market)</h3>
      <div class="space-y-4">
        {#each marketDemand as item}
          <div class="space-y-1">
            <div class="flex justify-between text-sm">
              <span>{item.name}</span>
              <span class="text-muted-foreground">Demanda: {item.demand}/100</span>
            </div>
            <Progress value={item.demand} class="h-2 bg-muted" />
          </div>
        {/each}
      </div>
      <div class="mt-6 rounded-md bg-blue-500/10 p-4 text-sm border border-blue-500/20">
        <p class="font-medium mb-1 text-blue-500">🚀 Oportunidad de Crecimiento:</p>
        <p class="text-muted-foreground">
          Aprender <strong>AWS</strong> y <strong>Docker</strong> te posicionaría como un candidato Full Stack Senior altamente competitivo.
        </p>
      </div>
    </Card>
  </div>
</div>
