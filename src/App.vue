<template>
  <div id="app-container" class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS CSS

onMounted(() => {
  AOS.init({ once: true }) // Initialize AOS, run animations only once
})
</script>

<style>
</style>
