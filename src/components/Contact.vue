<template>
  <section id="contact" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-10">Contáctame</h2>
      <div class="max-w-2xl mx-auto p-8" data-aos="fade-up">
        <p class="text-base text-center text-gray-600 mb-8">¿Tienes una idea innovadora que necesita cobrar vida, un desafío técnico que resolver o simplemente quieres explorar cómo mi experiencia puede impulsar tu próximo proyecto? Estoy siempre abierto a nuevas oportunidades y colaboraciones significativas. No dudes en contactarme para discutir tus necesidades, compartir tus visiones o simplemente para conectar. Juntos podemos transformar conceptos en soluciones impactantes y eficientes. ¡Espero tu mensaje!</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://wa.me/584121075052"
            target="_blank"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-base font-medium text-white bg-primary-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green transition-colors duration-200"
          >
            <vue-feather type="message-circle" size="20" class="mr-2"></vue-feather>
            WhatsApp
          </a>
          <a
            href="mailto:fabrizhioal.2011@gmail.com"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-base font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200"
          >
            <vue-feather type="mail" size="20" class="mr-2"></vue-feather>
            Correo Electrónico
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VueFeather from 'vue-feather';
</script>

<style scoped>
/* No specific styles needed as Tailwind handles most of it */
</style>