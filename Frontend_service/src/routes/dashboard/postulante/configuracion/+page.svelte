<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Label from "$lib/components/ui/label.svelte";
  import Card from "$lib/components/ui/card.svelte";
  import Select from "$lib/components/ui/select.svelte";
  import { auth } from "$lib/stores/auth";

  let isLoading = $state(false);
  let isSaved = $state(false);

  // Datos simulados del usuario
  let user = $state({
    name: $auth?.name || "Usuario",
    email: $auth?.email || "usuario@ejemplo.com",
    phone: "+51 987 654 321",
    location: "Lima, Perú",
    jobType: "remoto",
    salary: "3000 - 5000",
    notifications: true
  });

  function handleSave() {
    isLoading = true;
    setTimeout(() => {
      isLoading = false;
      isSaved = true;
      setTimeout(() => isSaved = false, 3000);
    }, 1000);
  }
</script>

<div class="space-y-6">
  <div>
    <h3 class="text-lg font-medium">Configuración de Cuenta</h3>
    <p class="text-sm text-muted-foreground">
      Gestiona tus preferencias personales y de la plataforma.
    </p>
  </div>
  
  <div class="grid gap-6">
    <Card class="p-6">
      <h4 class="text-base font-semibold mb-4">Información Personal</h4>
      <div class="grid gap-4 md:grid-cols-2">
        <div class="grid gap-2">
          <Label for="name">Nombre Completo</Label>
          <Input id="name" bind:value={user.name} />
        </div>
        <div class="grid gap-2">
          <Label for="email">Correo Electrónico</Label>
          <Input id="email" bind:value={user.email} disabled />
        </div>
        <div class="grid gap-2">
          <Label for="phone">Teléfono</Label>
          <Input id="phone" bind:value={user.phone} />
        </div>
        <div class="grid gap-2">
          <Label for="location">Ubicación</Label>
          <Input id="location" bind:value={user.location} />
        </div>
      </div>
    </Card>

    <Card class="p-6">
      <h4 class="text-base font-semibold mb-4">Preferencias Laborales (IA)</h4>
      <p class="text-sm text-muted-foreground mb-4">
        Estos datos ayudan a nuestro algoritmo de IA a encontrar las mejores ofertas para ti.
      </p>
      <div class="grid gap-4 md:grid-cols-2">
        <div class="grid gap-2">
          <Label for="jobType">Modalidad Preferida</Label>
          <select class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" bind:value={user.jobType}>
            <option value="remoto">Remoto</option>
            <option value="hibrido">Híbrido</option>
            <option value="presencial">Presencial</option>
          </select>
        </div>
        <div class="grid gap-2">
          <Label for="salary">Rango Salarial Esperado (PEN)</Label>
          <select class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" bind:value={user.salary}>
            <option value="1000 - 3000">S/ 1,000 - S/ 3,000</option>
            <option value="3000 - 5000">S/ 3,000 - S/ 5,000</option>
            <option value="5000 - 8000">S/ 5,000 - S/ 8,000</option>
            <option value="8000+">Más de S/ 8,000</option>
          </select>
        </div>
      </div>
    </Card>

    <Card class="p-6">
      <h4 class="text-base font-semibold mb-4">Notificaciones</h4>
      <div class="flex items-center space-x-2">
        <input type="checkbox" id="notifications" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" bind:checked={user.notifications} />
        <Label for="notifications">Recibir alertas de empleo por correo</Label>
      </div>
    </Card>

    <div class="flex justify-end gap-4">
      <Button variant="outline">Cancelar</Button>
      <Button onclick={handleSave} disabled={isLoading}>
        {#if isLoading}
          <span class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
        {/if}
        {isSaved ? 'Guardado' : 'Guardar Cambios'}
      </Button>
    </div>
  </div>
</div>
