<template>
  <header class="bg-white border-b border-gray-200 fixed w-full z-50 transition-all duration-300">
    <nav class="container mx-auto flex justify-between items-center h-16 px-4">
      <a href="#" class="text-lg font-semibold text-primary-green hover:text-green-700 transition-colors duration-200">Fabrizhio Al Chariti</a>
      <div class="hidden md:flex items-center space-x-6">
        <a href="#about" class="text-sm font-medium text-gray-600 hover:text-primary-green transition-colors duration-200">Sobre Mí</a>
        <a href="#education" class="text-sm font-medium text-gray-600 hover:text-primary-green transition-colors duration-200">Educación</a>
        <a href="#skills" class="text-sm font-medium text-gray-600 hover:text-primary-green transition-colors duration-200">Habilidades</a>
        <a href="#experience" class="text-sm font-medium text-gray-600 hover:text-primary-green transition-colors duration-200">Experiencia</a>
        <a href="#contact" class="text-sm font-medium text-gray-600 hover:text-primary-green transition-colors duration-200">Contacto</a>
      </div>
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-gray-600 hover:text-primary-green focus:outline-none transition-colors duration-200">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-b border-gray-200 py-2 px-4 space-y-2 transition-all duration-300 ease-in-out">
      <a href="#about" class="block text-sm font-medium text-gray-700 hover:text-primary-green py-2 transition-colors duration-200" @click="toggleMobileMenu">Sobre Mí</a>
      <a href="#education" class="block text-sm font-medium text-gray-700 hover:text-primary-green py-2 transition-colors duration-200" @click="toggleMobileMenu">Educación</a>
      <a href="#skills" class="block text-sm font-medium text-gray-700 hover:text-primary-green py-2 transition-colors duration-200" @click="toggleMobileMenu">Habilidades</a>
      <a href="#experience" class="block text-sm font-medium text-gray-700 hover:text-primary-green py-2 transition-colors duration-200" @click="toggleMobileMenu">Experiencia</a>
      <a href="#contact" class="block text-sm font-medium text-gray-700 hover:text-primary-green py-2 transition-colors duration-200" @click="toggleMobileMenu">Contacto</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* No specific styles needed as Tailwind handles most of it */
</style>