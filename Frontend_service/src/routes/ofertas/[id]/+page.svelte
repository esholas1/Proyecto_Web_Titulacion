<script lang="ts">
  import { page } from '$app/stores';
  import Button from "$lib/components/ui/button.svelte";
  import Card from "$lib/components/ui/card.svelte";
  import Badge from "$lib/components/ui/badge.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Footer from "$lib/components/footer.svelte";
  import { jobs } from "$lib/data";

  let jobId = $page.params.id;
  let job = jobs.find(j => j.id === jobId);
  let isApplied = $state(false);

  function handleApply() {
    isApplied = true;
    // Lógica de postulación
  }
</script>

<div class="min-h-screen bg-background flex flex-col">
    <Navbar />
    
    <main class="flex-1 container px-4 py-8">
        {#if job}
            <div class="grid gap-6 md:grid-cols-3">
                <!-- Columna Principal -->
                <div class="md:col-span-2 space-y-6">
                    <Card class="p-6">
                        <div class="flex justify-between items-start">
                            <div>
                                <h1 class="text-3xl font-bold mb-2">{job.title}</h1>
                                <p class="text-xl text-muted-foreground font-medium mb-4">{job.company}</p>
                            </div>
                            <Badge variant="secondary" class="text-lg px-3 py-1 bg-blue-500/10 text-blue-500">
                                {job.match}% Compatible
                            </Badge>
                        </div>
                        
                        <div class="flex flex-wrap gap-4 text-sm mb-6">
                            <div class="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                                📍 {job.location}
                            </div>
                            <div class="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                                💼 {job.type}
                            </div>
                            <div class="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                                💰 {job.salary}
                            </div>
                            <div class="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                                🕒 {job.postedAt}
                            </div>
                        </div>

                        <div class="space-y-6">
                            <section>
                                <h3 class="text-lg font-bold mb-2">Descripción del Puesto</h3>
                                <p class="text-muted-foreground leading-relaxed">
                                    {job.description}
                                    <br><br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </section>

                            <section>
                                <h3 class="text-lg font-bold mb-2">Requisitos</h3>
                                <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                                    {#each job.requirements as req}
                                        <li>{req}</li>
                                    {/each}
                                    <li>Capacidad para trabajar en equipo</li>
                                    <li>Buenas habilidades de comunicación</li>
                                </ul>
                            </section>
                        </div>
                    </Card>
                </div>

                <!-- Sidebar de Acción -->
                <div class="space-y-6">
                    <Card class="p-6 sticky top-20">
                        <h3 class="font-bold text-lg mb-4">Postular a este empleo</h3>
                        <div class="space-y-4">
                            {#if isApplied}
                                <div class="bg-green-500/15 text-green-500 p-4 rounded-md text-center border border-green-500/20">
                                    <p class="font-bold">¡Postulación Enviada!</p>
                                    <p class="text-sm">La empresa revisará tu perfil pronto.</p>
                                </div>
                                <Button variant="outline" class="w-full" href="/ofertas">Volver a Ofertas</Button>
                            {:else}
                                <p class="text-sm text-muted-foreground">
                                    Tu perfil tiene una compatibilidad del <strong>{job.match}%</strong> con esta oferta. ¡Tienes buenas oportunidades!
                                </p>
                                <Button class="w-full" size="lg" onclick={handleApply}>
                                    Postular Ahora
                                </Button>
                                <Button variant="outline" class="w-full">
                                    Guardar para después
                                </Button>
                            {/if}
                        </div>
                    </Card>

                    <Card class="p-6">
                        <h3 class="font-bold text-sm mb-2">Acerca de {job.company}</h3>
                        <p class="text-sm text-muted-foreground mb-4">
                            Empresa líder en tecnología dedicada a transformar la industria digital.
                        </p>
                        <a href="#" class="text-sm text-primary hover:underline">Ver perfil de empresa</a>
                    </Card>
                </div>
            </div>
        {:else}
            <div class="text-center py-12">
                <h2 class="text-2xl font-bold">Oferta no encontrada</h2>
                <Button href="/ofertas" class="mt-4">Volver al listado</Button>
            </div>
        {/if}
    </main>
    
    <Footer />
</div>
