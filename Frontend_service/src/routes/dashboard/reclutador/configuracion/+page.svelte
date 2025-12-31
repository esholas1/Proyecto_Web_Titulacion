<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Card from "$lib/components/ui/card.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Label from "$lib/components/ui/label.svelte";
  import Avatar from "$lib/components/ui/avatar.svelte";
  
  let companyName = $state("TechCorp Solutions");
  let companyWebsite = $state("https://techcorp.com");
  let notifications = $state(true);
  let autoReject = $state(false);
</script>

<div class="max-w-4xl space-y-8">
  <div>
    <h2 class="text-3xl font-bold tracking-tight">Configuración de Empresa</h2>
    <p class="text-muted-foreground">Administra tu perfil de empresa y preferencias de reclutamiento.</p>
  </div>

  <div class="grid gap-6">
    <!-- Perfil de Empresa -->
    <Card class="p-6">
        <h3 class="text-xl font-semibold mb-4">Perfil Público</h3>
        <div class="flex flex-col md:flex-row gap-8">
            <div class="flex flex-col items-center gap-4">
                <Avatar class="h-24 w-24" fallback="TC" />
                <Button variant="outline" size="sm">Cambiar Logo</Button>
            </div>
            <div class="flex-1 space-y-4">
                <div class="grid gap-2">
                    <Label for="companyName">Nombre de la Empresa</Label>
                    <Input id="companyName" bind:value={companyName} />
                </div>
                <div class="grid gap-2">
                    <Label for="website">Sitio Web</Label>
                    <Input id="website" bind:value={companyWebsite} />
                </div>
                <div class="grid gap-2">
                    <Label for="description">Descripción Breve</Label>
                    <Input id="description" placeholder="Somos una empresa líder en..." />
                </div>
            </div>
        </div>
    </Card>

    <!-- Preferencias de IA -->
    <Card class="p-6">
        <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">🤖</span>
            <h3 class="text-xl font-semibold">Configuración de IA</h3>
        </div>
        
        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div class="space-y-0.5">
                    <Label class="text-base">Filtrado Automático</Label>
                    <p class="text-sm text-muted-foreground">
                        Permitir que la IA pre-seleccione candidatos con match superior al 80%.
                    </p>
                </div>
                <input type="checkbox" class="toggle" checked />
            </div>
            
            <div class="flex items-center justify-between">
                <div class="space-y-0.5">
                    <Label class="text-base">Rechazo Automático</Label>
                    <p class="text-sm text-muted-foreground">
                        Enviar feedback automático a candidatos con match inferior al 40%.
                    </p>
                </div>
                <input type="checkbox" class="toggle" bind:checked={autoReject} />
            </div>

            <div class="flex items-center justify-between">
                <div class="space-y-0.5">
                    <Label class="text-base">Sugerencias de Entrevista</Label>
                    <p class="text-sm text-muted-foreground">
                        Recibir preguntas sugeridas por IA basadas en el perfil del candidato.
                    </p>
                </div>
                <input type="checkbox" class="toggle" checked />
            </div>
        </div>
    </Card>

    <!-- Notificaciones -->
    <Card class="p-6">
        <h3 class="text-xl font-semibold mb-4">Notificaciones</h3>
        <div class="space-y-4">
            <div class="flex items-center space-x-2">
                <input type="checkbox" id="emailNotif" bind:checked={notifications} class="rounded border-gray-300" />
                <Label for="emailNotif">Recibir resumen diario por correo</Label>
            </div>
            <div class="flex items-center space-x-2">
                <input type="checkbox" id="newCand" checked class="rounded border-gray-300" />
                <Label for="newCand">Notificar nuevo candidato</Label>
            </div>
        </div>
    </Card>

    <div class="flex justify-end gap-4">
        <Button variant="outline">Cancelar</Button>
        <Button>Guardar Cambios</Button>
    </div>
  </div>
</div>
