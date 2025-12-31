<script lang="ts">
  let { src, alt, fallback, class: className } = $props();
  let imageError = $state(false);
</script>

<div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full {className}">
  {#if src && !imageError}
    <img
      {src}
      {alt}
      class="aspect-square h-full w-full"
      onerror={() => (imageError = true)}
    />
  {:else}
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      {fallback}
    </div>
  {/if}
</div>
