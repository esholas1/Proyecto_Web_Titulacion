<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Card from "$lib/components/ui/card.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Label from "$lib/components/ui/label.svelte";
  import Textarea from "$lib/components/ui/textarea.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Footer from "$lib/components/footer.svelte";
  
  const faqs = [
    {
      q: "¿Cómo funciona el algoritmo de recomendación?",
      a: "Nuestro algoritmo analiza tus habilidades, experiencia y preferencias para compararlas con los requisitos de las ofertas, generando un porcentaje de compatibilidad."
    },
    {
      q: "¿Es gratis para los postulantes?",
      a: "Sí, el registro y la postulación a ofertas son completamente gratuitos para los candidatos."
    },
    {
      q: "¿Cómo puedo mejorar mi perfil?",
      a: "Completa toda la información solicitada y mantén actualizadas tus habilidades. La IA te dará sugerencias específicas en tu dashboard."
    }
  ];
</script>

<div class="min-h-screen bg-background flex flex-col">
    <Navbar />
    
    <main class="flex-1 container px-4 py-12 max-w-4xl mx-auto">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold tracking-tight mb-4">Centro de Ayuda</h1>
            <p class="text-xl text-muted-foreground">¿Cómo podemos ayudarte hoy?</p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
            <!-- Formulario de Contacto -->
            <Card class="p-6">
                <h2 class="text-2xl font-bold mb-6">Contáctanos</h2>
                <form class="space-y-4">
                    <div class="grid gap-2">
                        <Label for="name">Nombre</Label>
                        <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div class="grid gap-2">
                        <Label for="email">Correo Electrónico</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div class="grid gap-2">
                        <Label for="subject">Asunto</Label>
                        <Select>
                            <option>Problema Técnico</option>
                            <option>Consulta sobre Facturación</option>
                            <option>Sugerencia</option>
                            <option>Otro</option>
                        </Select>
                    </div>
                    <div class="grid gap-2">
                        <Label for="message">Mensaje</Label>
                        <Textarea id="message" placeholder="Describe tu problema..." rows={4} />
                    </div>
                    <Button class="w-full">Enviar Mensaje</Button>
                </form>
            </Card>

            <!-- FAQs -->
            <div class="space-y-6">
                <h2 class="text-2xl font-bold">Preguntas Frecuentes</h2>
                <div class="space-y-4">
                    {#each faqs as faq}
                        <Card class="p-6">
                            <h3 class="font-bold mb-2">{faq.q}</h3>
                            <p class="text-muted-foreground">{faq.a}</p>
                        </Card>
                    {/each}
                </div>
                
                <Card class="p-6 bg-primary text-primary-foreground">
                    <h3 class="font-bold mb-2">¿Necesitas ayuda urgente?</h3>
                    <p class="mb-4 text-primary-foreground/90">Nuestro equipo de soporte está disponible 24/7.</p>
                    <Button variant="secondary" class="w-full">Chat en Vivo</Button>
                </Card>
            </div>
        </div>
    </main>

    <Footer />
</div>
