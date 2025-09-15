<template>
	<section
		id="about"
		class="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-green to-green-600 text-white overflow-hidden"
	>
		<div class="absolute inset-0 z-0">
			<!-- Add a subtle pattern or background image here -->
			<div class="absolute inset-0 bg-black opacity-20"></div>
			<div class="absolute inset-0 z-0 opacity-30 bg-starlike-pattern"></div>
		</div>
		<div class="container mx-auto px-4 text-center z-10" data-aos="fade-up">
			<h1 class="text-5xl md:text-6xl font-bold leading-tight mb-4">
				Hola, soy <span class="text-white">Fabrizhio Al Chariti</span>
			</h1>
			<p class="text-white text-xl md:text-2xl mb-8">
				Desarrollador Full-Stack | Especialista en Soluciones Fintech
			</p>
			<div
				class="flex flex-wrap items-center gap-6 justify-center space-x-6 mb-8"
			>
				<a
					href="https://github.com/fabrizhioa"
					target="_blank"
					class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200 shadow-lg"
				>
					<svg
						class="w-8 h-8 mr-2"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.695-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.835.091-.647.351-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.93 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.428 9.428 0 0112 6.865c.85.004 1.7.117 2.49.341 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.823-2.339 4.675-4.566 4.922.357.307.678.915.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.685.475C21.133 20.19 24 16.422 24 12.017 24 6.484 19.522 2 14 2h-2z"
							clip-rule="evenodd"
						/>
					</svg>
					GitHub
				</a>
				<a
					href="https://linkedin.com/in/fabrizhioa"
					target="_blank"
					class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200 shadow-lg"
				>
					<svg
						class="w-8 h-8 mr-2"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-1.05 0-1.9-.85-1.9-1.9s.85-1.9 1.9-1.9 1.9.85 1.9 1.9-.85 1.9-1.9 1.9zM20 19h-3v-5.62c0-1.32-.5-2.2-1.65-2.2-1.32 0-2.05 1-2.05 2.2v5.62H10V8h3v1.76c.7-.96 1.79-1.76 3.3-1.76 2.45 0 4.3 1.6 4.3 4.7z"
						/>
					</svg>
					LinkedIn
				</a>
				<a
					href="#contact"
					class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200 shadow-lg"
				>
					<vue-feather type="mail" size="32" class="mr-2"></vue-feather>
					Contactar
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
import VueFeather from "vue-feather";
</script>

<style scoped>
/* No specific styles needed as Tailwind handles most of it */
.bg-starlike-pattern {
	background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='transparent'/%3E%3Cdefs%3E%3Cpolygon id='star' points='10,0 13,6 20,7 15,12 16,19 10,15 4,19 5,12 0,7 7,6' fill='white'/%3E%3C/defs%3E%3Cg opacity='0.1'%3E%3Cuse href='%23star' x='10' y='10'/%3E%3Cuse href='%23star' x='50' y='30'/%3E%3Cuse href='%23star' x='100' y='10'/%3E%3Cuse href='%23star' x='30' y='70'/%3E%3Cuse href='%23star' x='80' y='60'/%3E%3Cuse href='%23star' x='130' y='40'/%3E%3Cuse href='%23star' x='10' y='110'/%3E%3Cuse href='%23star' x='60' y='100'/%3E%3Cuse href='%23star' x='110' y='90'/%3E%3Cuse href='%23star' x='40' y='150'/%3E%3Cuse href='%23star' x='90' y='140'/%3E%3Cuse href='%23star' x='140' y='120'/%3E%3C/g%3E%3C/svg%3E");
	background-size: 100px 100px;
}
</style>
