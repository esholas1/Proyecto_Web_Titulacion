<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Label from "$lib/components/ui/label.svelte";
  import Textarea from "$lib/components/ui/textarea.svelte";
  import Card from "$lib/components/ui/card.svelte";
  import Avatar from "$lib/components/ui/avatar.svelte";
  import Badge from "$lib/components/ui/badge.svelte";
  import { userProfile } from "$lib/data";

  let profile = $state({ ...userProfile });
  let isEditing = $state(false);
  let newSkill = $state("");

  function addSkill() {
    if (newSkill && !profile.skills.includes(newSkill)) {
      profile.skills = [...profile.skills, newSkill];
      newSkill = "";
    }
  }

  function removeSkill(skill: string) {
    profile.skills = profile.skills.filter(s => s !== skill);
  }

  function saveProfile() {
    isEditing = false;
    // Aquí iría la lógica para guardar en backend
    console.log("Perfil guardado:", profile);
  }
</script>

<div class="flex items-center justify-between space-y-2">
  <h2 class="text-3xl font-bold tracking-tight">Mi Perfil Profesional</h2>
  <div class="flex items-center space-x-2">
    {#if isEditing}
      <Button variant="outline" onclick={() => isEditing = false}>Cancelar</Button>
      <Button onclick={saveProfile}>Guardar Cambios</Button>
    {:else}
      <Button onclick={() => isEditing = true}>Editar Perfil</Button>
    {/if}
  </div>
</div>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
  <!-- Columna Izquierda: Info Básica -->
  <div class="col-span-2 space-y-4">
    <Card class="p-6 text-center">
      <div class="flex flex-col items-center space-y-4">
        <Avatar class="h-24 w-24" fallback="JP" />
        <div class="space-y-1">
          <h3 class="text-2xl font-bold">{profile.name}</h3>
          <p class="text-sm text-muted-foreground">{profile.role}</p>
        </div>
        <div class="flex w-full items-center justify-center space-x-2">
            <Badge variant="secondary">Open to Work</Badge>
        </div>
      </div>
    </Card>
    
    <Card class="p-6">
        <h3 class="font-semibold mb-4">Información de Contacto</h3>
        <div class="space-y-3 text-sm">
            <div class="flex items-center gap-2">
                <span class="text-muted-foreground">Email:</span>
                <span>{profile.email}</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-muted-foreground">Teléfono:</span>
                <span>{profile.phone}</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-muted-foreground">Ubicación:</span>
                <span>{profile.location}</span>
            </div>
        </div>
    </Card>
  </div>

  <!-- Columna Derecha: Detalles -->
  <div class="col-span-5 space-y-4">
    <Card class="p-6">
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium">Sobre mí</h3>
          <div class="mt-2">
            {#if isEditing}
              <Textarea bind:value={profile.about} rows={4} />
            {:else}
              <p class="text-sm text-muted-foreground leading-relaxed">
                {profile.about}
              </p>
            {/if}
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-3">Habilidades</h3>
          <div class="flex flex-wrap gap-2 mb-3">
            {#each profile.skills as skill}
              <Badge variant="secondary" class="px-3 py-1">
                {skill}
                {#if isEditing}
                  <button class="ml-2 hover:text-destructive" onclick={() => removeSkill(skill)}>×</button>
                {/if}
              </Badge>
            {/each}
          </div>
          {#if isEditing}
            <div class="flex gap-2 max-w-sm">
              <Input placeholder="Agregar habilidad..." bind:value={newSkill} onkeydown={(e) => e.key === 'Enter' && addSkill()} />
              <Button variant="outline" size="sm" onclick={addSkill}>Agregar</Button>
            </div>
          {/if}
        </div>

        <div>
            <h3 class="text-lg font-medium mb-3">Experiencia Laboral</h3>
            <div class="space-y-4">
                {#each profile.experience as exp}
                    <div class="border-l-2 border-muted pl-4">
                        <h4 class="font-semibold">{exp.role}</h4>
                        <p class="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                        <p class="text-sm mt-1">{exp.description}</p>
                    </div>
                {/each}
            </div>
        </div>
        
        <div>
            <h3 class="text-lg font-medium mb-3">Educación</h3>
            <div class="space-y-4">
                {#each profile.education as edu}
                    <div class="border-l-2 border-muted pl-4">
                        <h4 class="font-semibold">{edu.degree}</h4>
                        <p class="text-sm text-muted-foreground">{edu.school} | {edu.period}</p>
                    </div>
                {/each}
            </div>
        </div>

      </div>
    </Card>
  </div>
</div>
