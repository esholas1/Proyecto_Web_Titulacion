<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Card from "$lib/components/ui/card.svelte";
  import Badge from "$lib/components/ui/badge.svelte";
  import Select from "$lib/components/ui/select.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Footer from "$lib/components/footer.svelte";
  import { jobs } from "$lib/data";

  let searchTerm = $state("");
  let locationFilter = $state("");
  let typeFilter = $state("");

  let filteredJobs = $derived(jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter ? job.location.includes(locationFilter) : true;
    const matchesType = typeFilter ? job.type === typeFilter : true;
    return matchesSearch && matchesLocation && matchesType;
  }));
</script>

<div class="min-h-screen bg-background flex flex-col">
    <Navbar />
    
    <main class="flex-1 container px-4 py-8">
        <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold tracking-tight">Buscar Empleo</h1>
                <p class="text-muted-foreground">Encuentra la oportunidad perfecta basada en tu perfil.</p>
            </div>

            <!-- Filtros -->
            <Card class="p-4">
                <div class="grid gap-4 md:grid-cols-4">
                    <div class="md:col-span-2">
                        <Input placeholder="Buscar por cargo, empresa o palabra clave..." bind:value={searchTerm} />
                    </div>
                    <div>
                        <Select bind:value={locationFilter}>
                            <option value="">Todas las ubicaciones</option>
                            <option value="Lima">Lima</option>
                            <option value="Remoto">Remoto</option>
                            <option value="Arequipa">Arequipa</option>
                        </Select>
                    </div>
                    <div>
                        <Select bind:value={typeFilter}>
                            <option value="">Todos los tipos</option>
                            <option value="Tiempo Completo">Tiempo Completo</option>
                            <option value="Proyecto">Proyecto</option>
                        </Select>
                    </div>
                </div>
            </Card>

            <!-- Lista de Ofertas -->
            <div class="grid gap-4">
                {#if filteredJobs.length === 0}
                    <div class="text-center py-12">
                        <p class="text-muted-foreground">No se encontraron ofertas que coincidan con tu búsqueda.</p>
                    </div>
                {:else}
                    {#each filteredJobs as job}
                        <Card class="p-6 transition-all hover:shadow-md">
                            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div class="space-y-1">
                                    <div class="flex items-center gap-2">
                                        <h3 class="text-xl font-bold text-primary hover:underline">
                                            <a href="/ofertas/{job.id}">{job.title}</a>
                                        </h3>
                                        {#if job.match > 80}
                                            <Badge variant="secondary" class="bg-green-500/10 text-green-500 border-green-500/20">
                                                {job.match}% Match IA
                                            </Badge>
                                        {/if}
                                    </div>
                                    <p class="text-muted-foreground font-medium">{job.company}</p>
                                    <div class="flex flex-wrap gap-2 text-sm text-muted-foreground mt-2">
                                        <span class="flex items-center gap-1">📍 {job.location}</span>
                                        <span class="flex items-center gap-1">💼 {job.type}</span>
                                        <span class="flex items-center gap-1">💰 {job.salary}</span>
                                        <span class="flex items-center gap-1">🕒 {job.postedAt}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2 min-w-[120px]">
                                    <a href="/ofertas/{job.id}" class="w-full">
                                        <Button class="w-full">Ver Detalle</Button>
                                    </a>
                                    <Button variant="outline" class="w-full">Guardar</Button>
                                </div>
                            </div>
                            <div class="mt-4 flex flex-wrap gap-2">
                                {#each job.requirements as req}
                                    <Badge variant="outline">{req}</Badge>
                                {/each}
                            </div>
                        </Card>
                    {/each}
                {/if}
            </div>
        </div>
    </main>

    <Footer />
</div>
