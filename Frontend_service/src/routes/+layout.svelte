<script lang="ts">
	import '../app.css';
    import Navbar from '$lib/components/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';
	
	let { children } = $props();
</script>

<div class="relative flex min-h-screen flex-col bg-background">
    <Navbar />
    <main class="flex-1">
        {@render children()}
    </main>
    <Footer />
</div>
