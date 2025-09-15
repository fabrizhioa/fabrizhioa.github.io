<template>
  <section id="skills" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-12">Competencias Clave</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        <div v-for="(skill, index) in skills.filter(s => s.type === 'skill')" :key="index" class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-primary-green transform hover:-translate-y-1" data-aos="fade-up">
          <div class="mb-4 text-primary-green">
            <vue-feather :type="skill.icon" size="36"></vue-feather>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ skill.title }}</h3>
          <p class="text-gray-700 text-sm">{{ skill.description }}</p>
        </div>
      </div>

      <h2 class="text-3xl font-semibold text-center text-gray-800 mt-16 mb-12">Idiomas</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
        <div v-for="(lang, index) in skills.filter(s => s.type === 'language')" :key="index" class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-primary-green transform hover:-translate-y-1" data-aos="fade-up">
          <div class="mb-4 text-primary-green">
            <vue-feather :type="lang.icon" size="36"></vue-feather>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ lang.title }}</h3>
          <p class="text-gray-700 text-sm">{{ lang.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VueFeather from 'vue-feather';

const skills = [
  {
    icon: 'code',
    title: 'Frontend',
    description: 'JavaScript (ES9+), Vue.js, React.js, Next.js, HTML5, CSS3, Sass',
    type: 'skill',
  },
  {
    icon: 'database',
    title: 'Backend',
    description: 'Node.js, PHP, Python',
    type: 'skill',
  },
  {
    icon: 'server',
    title: 'Bases de Datos',
    description: 'MySQL, MongoDB, PostgreSQL',
    type: 'skill',
  },
  {
    icon: 'tool',
    title: 'Herramientas y Despliegue',
    description: 'Git, GitHub, API REST, Nginx, PM2, XAMPP',
    type: 'skill',
  },
  {
    icon: 'users',
    title: 'Metodologías',
    description: 'Desarrollo Ágil (Agile), Scrum',
    type: 'skill',
  },
  {
    icon: 'message-square',
    title: 'Habilidades Blandas',
    description: 'Resolución de Problemas Complejos, Comunicación Técnica Efectiva, Adaptabilidad Estratégica, Pensamiento Crítico',
    type: 'skill',
  },
  {
    icon: 'flag',
    title: 'Español',
    description: 'Nativo',
    type: 'language',
  },
  {
    icon: 'flag',
    title: 'Inglés',
    description: 'B2, Intermedio-Avanzado',
    type: 'language',
  },
];
</script>

<style scoped>
/* No specific styles needed as Tailwind handles most of it */
</style>