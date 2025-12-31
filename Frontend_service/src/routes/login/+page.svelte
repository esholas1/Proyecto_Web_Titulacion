<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Label from "$lib/components/ui/label.svelte";
  import { login } from "$lib/stores/auth";
  
  let email = $state("");
  let password = $state("");
  let isLoading = $state(false);

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isLoading = true;
    
    // Simulación de login
    setTimeout(() => {
      isLoading = false;
      const role = email.includes("reclutador") ? "reclutador" : "postulante";
      
      login(email, role);
      
      if (role === "reclutador") {
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
        Bienvenido de nuevo
      </h1>
      <p class="text-sm text-muted-foreground">
        Ingresa tu correo electrónico para acceder a tu cuenta
      </p>
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
            <div class="flex items-center justify-between">
                <Label for="password">Contraseña</Label>
                <a href="/forgot-password" class="text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>
            <Input
              id="password"
              type="password"
              bind:value={password}
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {#if isLoading}
              <span class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
            {/if}
            Iniciar Sesión
          </Button>
        </div>
      </form>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t"></span>
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground">
            O continúa con
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        GitHub
      </Button>
    </div>
    <p class="px-8 text-center text-sm text-muted-foreground">
      <a href="/register" class="hover:text-brand underline underline-offset-4">
        ¿No tienes una cuenta? Regístrate
      </a>
    </p>
  </div>
</div>
