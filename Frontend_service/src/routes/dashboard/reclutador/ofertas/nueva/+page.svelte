<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Label from "$lib/components/ui/label.svelte";
  import Textarea from "$lib/components/ui/textarea.svelte";
  import Card from "$lib/components/ui/card.svelte";
  import Badge from "$lib/components/ui/badge.svelte";
  
  let skills = $state<string[]>([]);
  let currentSkill = $state("");
  let suggestedSkills = ["React", "TypeScript", "Node.js", "AWS", "Scrum", "Inglés"];

  function addSkill(skill: string) {
    if (skill && !skills.includes(skill)) {
      skills = [...skills, skill];
      currentSkill = "";
    }
  }

  function removeSkill(skill: string) {
    skills = skills.filter(s => s !== skill);
  }
</script>

<div class="max-w-3xl mx-auto space-y-6">
  <div>
    <h2 class="text-3xl font-bold tracking-tight">Publicar Nueva Oferta</h2>
    <p class="text-muted-foreground">Completa los detalles para encontrar al candidato ideal.</p>
  </div>

  <Card class="p-6">
    <form class="space-y-6">
        <div class="grid gap-4">
            <div class="grid gap-2">
                <Label for="title">Título del Puesto</Label>
                <Input id="title" placeholder="Ej. Desarrollador Full Stack Senior" />
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-2">
                    <Label for="location">Ubicación</Label>
                    <Input id="location" placeholder="Ej. Lima, Remoto" />
                </div>
                <div class="grid gap-2">
                    <Label for="type">Modalidad</Label>
                    <select class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option>Tiempo Completo</option>
                        <option>Medio Tiempo</option>
                        <option>Proyecto</option>
                        <option>Prácticas</option>
                    </select>
                </div>
            </div>

            <div class="grid gap-2">
                <Label for="salary">Rango Salarial (Opcional)</Label>
                <div class="grid grid-cols-2 gap-4">
                    <Input placeholder="Mínimo" type="number" />
                    <Input placeholder="Máximo" type="number" />
                </div>
            </div>

            <div class="grid gap-2">
                <Label for="description">Descripción del Puesto</Label>
                <Textarea id="description" placeholder="Describe las responsabilidades y lo que buscas..." class="min-h-[150px]" />
            </div>

            <div class="grid gap-2">
                <Label>Habilidades Requeridas (IA Sugerencias)</Label>
                <div class="flex gap-2">
                    <Input 
                        placeholder="Agregar habilidad..." 
                        bind:value={currentSkill} 
                        onkeydown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(currentSkill))}
                    />
                    <Button type="button" onclick={() => addSkill(currentSkill)}>Agregar</Button>
                </div>
                
                {#if skills.length > 0}
                    <div class="flex flex-wrap gap-2 mt-2">
                        {#each skills as skill}
                            <Badge variant="secondary" class="px-3 py-1">
                                {skill}
                                <button type="button" class="ml-2 hover:text-destructive" onclick={() => removeSkill(skill)}>×</button>
                            </Badge>
                        {/each}
                    </div>
                {/if}

                <div class="mt-2">
                    <p class="text-xs text-muted-foreground mb-2">Sugerencias basadas en el título:</p>
                    <div class="flex flex-wrap gap-2">
                        {#each suggestedSkills as skill}
                            <button 
                                type="button"
                                class="text-xs border rounded-full px-3 py-1 hover:bg-muted transition-colors"
                                onclick={() => addSkill(skill)}
                            >
                                + {skill}
                            </button>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-end gap-4 pt-4 border-t">
            <Button variant="outline" type="button">Guardar Borrador</Button>
            <Button type="submit">Publicar Oferta</Button>
        </div>
    </form>
  </Card>
</div>
