<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Card from "$lib/components/ui/card.svelte";
  import Badge from "$lib/components/ui/badge.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Select from "$lib/components/ui/select.svelte";
  import Avatar from "$lib/components/ui/avatar.svelte";
  import Progress from "$lib/components/ui/progress.svelte";
  
  const candidates = [
    {
      id: 1,
      name: "Ana García",
      role: "Frontend Developer",
      appliedTo: "Desarrollador Frontend Senior",
      match: 98,
      status: "Nuevo",
      experience: "5 años",
      skills: ["React", "TypeScript", "Next.js"]
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      role: "Backend Developer",
      appliedTo: "Ingeniero de Datos Junior",
      match: 85,
      status: "En Revisión",
      experience: "2 años",
      skills: ["Python", "Django", "SQL"]
    },
    {
      id: 3,
      name: "Maria Lopez",
      role: "UX Designer",
      appliedTo: "Diseñador UX/UI",
      match: 92,
      status: "Entrevista",
      experience: "4 años",
      skills: ["Figma", "User Research", "Prototyping"]
    },
    {
      id: 4,
      name: "Juan Pérez",
      role: "Full Stack Developer",
      appliedTo: "Desarrollador Frontend Senior",
      match: 75,
      status: "Rechazado",
      experience: "3 años",
      skills: ["JavaScript", "Node.js", "React"]
    }
  ];

  let filterStatus = $state("");
  let searchTerm = $state("");

  let filteredCandidates = $derived(candidates.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? c.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  }));
</script>

<div class="flex flex-col gap-6">
  <div>
    <h2 class="text-3xl font-bold tracking-tight">Gestión de Candidatos</h2>
    <p class="text-muted-foreground">Evalúa y gestiona a los postulantes con ayuda de IA.</p>
  </div>

  <Card class="p-4">
    <div class="grid gap-4 md:grid-cols-4">
        <div class="md:col-span-2">
            <Input placeholder="Buscar por nombre o rol..." bind:value={searchTerm} />
        </div>
        <div>
            <Select bind:value={filterStatus}>
                <option value="">Todos los estados</option>
                <option value="Nuevo">Nuevo</option>
                <option value="En Revisión">En Revisión</option>
                <option value="Entrevista">Entrevista</option>
                <option value="Rechazado">Rechazado</option>
            </Select>
        </div>
        <Button variant="outline">Exportar Lista</Button>
    </div>
  </Card>

  <div class="grid gap-4">
    {#each filteredCandidates as candidate}
      <Card class="p-6 transition-all hover:shadow-md">
        <div class="flex flex-col md:flex-row gap-6">
            <!-- Info Principal -->
            <div class="flex gap-4 flex-1">
                <Avatar class="h-16 w-16" fallback={candidate.name.charAt(0)} />
                <div class="space-y-1">
                    <div class="flex items-center gap-2">
                        <h3 class="text-xl font-bold">{candidate.name}</h3>
                        <Badge variant="outline">{candidate.status}</Badge>
                    </div>
                    <p class="text-muted-foreground font-medium">{candidate.role}</p>
                    <p class="text-sm text-muted-foreground">Postuló a: {candidate.appliedTo}</p>
                    <div class="flex gap-2 mt-2">
                        {#each candidate.skills as skill}
                            <Badge variant="secondary" class="text-xs">{skill}</Badge>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Métricas y Acciones -->
            <div class="flex flex-col gap-4 min-w-[200px] border-l pl-6">
                <div class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-sm font-medium">Match IA</span>
                        <span class="font-bold text-lg {candidate.match > 90 ? 'text-green-500' : 'text-blue-500'}">
                            {candidate.match}%
                        </span>
                    </div>
                    <Progress value={candidate.match} class="h-2" />
                </div>
                
                <div class="grid grid-cols-2 gap-2">
                    <Button size="sm" variant="outline">Ver CV</Button>
                    <Button size="sm">Evaluar</Button>
                </div>
            </div>
        </div>
      </Card>
    {/each}
  </div>
</div>
