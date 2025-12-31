<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Label from "$lib/components/ui/label.svelte";
  
  let email = $state("");
  let isLoading = $state(false);
  let isSent = $state(false);

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isLoading = true;
    // Simulación de envío
    setTimeout(() => {
      isLoading = false;
      isSent = true;
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
        Recuperar Contraseña
      </h1>
      <p class="text-sm text-muted-foreground">
        Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
      </p>
    </div>

    {#if isSent}
        <div class="rounded-md bg-green-500/15 p-4 text-sm text-green-500 text-center border border-green-500/20">
            Se ha enviado un correo de recuperación a <strong>{email}</strong>. Por favor revisa tu bandeja de entrada.
        </div>
        <Button variant="outline" onclick={() => isSent = false}>Intentar con otro correo</Button>
    {:else}
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
            <Button disabled={isLoading}>
                {#if isLoading}
                <span class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                {/if}
                Enviar Enlace
            </Button>
            </div>
        </form>
        </div>
    {/if}
    
    <p class="px-8 text-center text-sm text-muted-foreground">
      <a href="/login" class="hover:text-brand underline underline-offset-4">
        Volver al inicio de sesión
      </a>
    </p>
  </div>
</div>
