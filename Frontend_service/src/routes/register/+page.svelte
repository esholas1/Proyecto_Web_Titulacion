<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Label from "$lib/components/ui/label.svelte";
  import { login } from "$lib/stores/auth";
  
  let email = $state("");
  let password = $state("");
  let confirmPassword = $state("");
  let userType = $state("postulante"); // 'postulante' | 'reclutador'
  let isLoading = $state(false);

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isLoading = true;
    
    // Simulación de registro
    setTimeout(() => {
      isLoading = false;
      login(email, userType as 'postulante' | 'reclutador');
      
      if (userType === "reclutador") {
        window.location.href = "/dashboard/reclutador";
      } else {
        window.location.href = "/dashboard/postulante";
      }
    }, 1000);
  }
</script>

<div class="container flex h-screen w-screen flex-col items-center justify-center px-4">
  <a href="/" class="absolute left-4 top-4 md:left-8 md:top-8 flex items-center text-lg font-bold tracking-tight">
    SUMAQTI
  </a>
  <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">
        Crear una cuenta
      </h1>
      <p class="text-sm text-muted-foreground">
        Ingresa tus datos para comenzar
      </p>
    </div>
    
    <div class="grid grid-cols-2 gap-2 p-1 bg-muted rounded-lg">
        <button 
            class="text-sm font-medium py-1.5 rounded-md transition-all {userType === 'postulante' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}"
            onclick={() => userType = 'postulante'}
        >
            Postulante
        </button>
        <button 
            class="text-sm font-medium py-1.5 rounded-md transition-all {userType === 'reclutador' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}"
            onclick={() => userType = 'reclutador'}
        >
            Reclutador
        </button>
    </div>

    <div class="grid gap-6">
      <form onsubmit={handleSubmit}>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Correo Electrónico</Label>
            <Input
              id="email"
              placeholder="nombre@ejemplo.com"
              type="email"
              autocapitalize="none"
              autocomplete="email"
              autocorrect="off"
              bind:value={email}
              disabled={isLoading}
            />
          </div>
          <div class="grid gap-2">
            <Label for="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              bind:value={password}
              disabled={isLoading}
            />
          </div>
          <div class="grid gap-2">
            <Label for="confirm-password">Confirmar Contraseña</Label>
            <Input
              id="confirm-password"
              type="password"
              bind:value={confirmPassword}
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {#if isLoading}
              <span class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
            {/if}
            Registrarse como {userType === 'postulante' ? 'Postulante' : 'Reclutador'}
          </Button>
        </div>
      </form>
    </div>
    <p class="px-8 text-center text-sm text-muted-foreground">
      <a href="/login" class="hover:text-brand underline underline-offset-4">
        ¿Ya tienes una cuenta? Inicia Sesión
      </a>
    </p>
  </div>
</div>
