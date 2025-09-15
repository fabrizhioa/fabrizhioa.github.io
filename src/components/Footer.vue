<template>
  <footer class="bg-gray-800 text-gray-200 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left" data-aos="fade-up">
        <!-- Section 1: Brand/About -->
        <div data-aos="fade-up">
          <h3 class="text-lg font-semibold text-white mb-4">Fabrizhio Al Chariti</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Ser programador es más que escribir código; es la habilidad de transformar ideas complejas en soluciones funcionales y elegantes. Es un viaje constante de aprendizaje, resolución de problemas y creatividad, donde cada línea de código contribuye a construir el futuro digital.
          </p>
        </div>

        <!-- Section 2: Navigation -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Navegación</h3>
          <ul class="space-y-2">
            <li><a href="#about" class="text-gray-400 hover:text-primary-green transition-colors duration-200">Sobre Mí</a></li>
            <li><a href="#education" class="text-gray-400 hover:text-primary-green transition-colors duration-200">Educación</a></li>
            <li><a href="#skills" class="text-gray-400 hover:text-primary-green transition-colors duration-200">Habilidades</a></li>
            <li><a href="#experience" class="text-gray-400 hover:text-primary-green transition-colors duration-200">Experiencia</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-primary-green transition-colors duration-200">Contacto</a></li>
          </ul>
        </div>

        <!-- Section 3: Social Media -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Conéctate</h3>
          <div class="flex justify-center md:justify-start space-x-6">
            <a href="https://github.com/fabrizhioa" target="_blank" class="text-gray-400 hover:text-primary-green transition-colors duration-200">
              <vue-feather type="github" size="24"></vue-feather>
            </a>
            <a href="https://linkedin.com/in/fabrizhioa" target="_blank" class="text-gray-400 hover:text-primary-green transition-colors duration-200">
              <vue-feather type="linkedin" size="24"></vue-feather>
            </a>
            <a href="https://wa.me/584121075052" target="_blank" class="text-gray-400 hover:text-primary-green transition-colors duration-200">
              <vue-feather type="message-circle" size="24"></vue-feather>
            </a>
            <a href="mailto:fabrizhioal.2011@gmail.com" class="text-gray-400 hover:text-primary-green transition-colors duration-200">
              <vue-feather type="mail" size="24"></vue-feather>
            </a>
            <!-- Add more social media links as needed -->
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-700 text-center">
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Fabrizhio Al Chariti. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import VueFeather from 'vue-feather';
</script>

<style scoped>
/* No specific styles needed as Tailwind handles most of it */
</style>