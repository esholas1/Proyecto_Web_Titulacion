<script lang="ts">
  let { class: className, value = $bindable(), children, ...props } = $props();
</script>

<div class="relative">
  <select
    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none {className}"
    bind:value
    {...props}
  >
    {@render children?.()}
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
  </div>
</div>
