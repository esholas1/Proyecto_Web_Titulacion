<script lang="ts">
  import { cn } from "$lib/utils";

  let { value = 0, max = 100, class: className, ...props } = $props();
  
  let percentage = $derived((value / max) * 100);
</script>

<div
  class={cn(
    "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
    className
  )}
  {...props}
>
  <div
    class="h-full w-full flex-1 bg-primary transition-all"
    style="transform: translateX(-{100 - percentage}%)"
  ></div>
</div>
