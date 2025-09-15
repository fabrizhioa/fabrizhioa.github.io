<template>
	<section id="experience" class="py-16 bg-gray-100">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-semibold text-center text-gray-700 mb-12">
				Experiencia Profesional y Logros Clave
			</h2>

			<!-- Freelance Software Engineer - Timeline Style -->
			<div class="relative mb-12 pl-8" data-aos="fade-up">
				<div class="absolute left-0 top-0 h-full w-px bg-gray-300"></div>
				<div class="mb-8 relative pl-6">
					<div
						class="absolute left-0 top-1 w-3 h-3 bg-primary-green rounded-full -ml-1.5 border border-white"
					></div>
					<h3 class="text-xl font-semibold text-gray-800 mb-1">
						Ingeniero de Software Freelance | Proyectos Independientes
					</h3>
					<p class="text-gray-500 text-sm mb-4">Agosto 2018 - Presente</p>
					<ul class="list-disc list-inside space-y-2 text-gray-600 text-base">
						<li>
							Orquesté el ciclo de vida completo de desarrollo para más de 15
							clientes, entregando soluciones web que aumentaron su eficiencia
							operativa en un promedio del 30%.
						</li>
						<li>
							Diseñé e implementé arquitecturas robustas utilizando un stack
							variado, incluyendo Node.js, PHP, React.js, Vue.js, MySQL y
							MongoDB.
						</li>
						<li>
							Actué como consultor técnico, asegurando la alineación del
							producto con los objetivos estratégicos del cliente y logrando un
							índice de satisfacción del 98%.
						</li>
					</ul>
				</div>
			</div>

			<!-- Projects Section -->
			<div class="space-y-8">
				<div
					v-for="(experience, index) in experiences"
					:key="index"
					class="grid grid-cols-1 md:grid-cols-[25%_auto] md:gap-6 auto-rows-auto bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full"
					data-aos="fade-up"
				>
					<div class="mb-4 md:mb-0 md:mr-6 w-full">
						<img
							:src="experience.image"
							class="rounded-lg w-full h-auto object-cover border border-gray-200"
							:alt="experience.title"
						/>
					</div>
					<div class="flex flex-col h-full flex-1">
						<div>
							<h3 class="text-xl font-semibold text-gray-800 mb-2">
								{{ experience.title }}
							</h3>
							<p class="text-gray-500 text-sm mb-4">{{ experience.date }}</p>
						</div>
						<ul
							class="list-disc list-inside space-y-2 text-gray-600 text-base mb-4 flex-1 h-full"
						>
							<li
								v-for="(achievement, idx) in experience.achievements"
								:key="idx"
							>
								{{ achievement }}
							</li>
						</ul>
						<div class="flex">
							<a
								:href="experience.link"
								target="_blank"
								class="mt-auto ml-auto inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-primary-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green transition-colors duration-200"
								>Ver Proyecto</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const experiences = [
	{
		image: "https://placehold.co/400x300/e2e8f0/64748b?text=M.A.S.",
		title:
			"Arquitecto y Desarrollador Web (Freelance) | Mujeres Accionando Sueños",
		date: "Enero 2024 - Presente",
		achievements: [
			"Lideré la creación de la plataforma web de la organización, construyendo desde cero un producto digital que incrementó su alcance online en un 200% en los primeros tres meses.",
		],
		link: "https://mujeresaccionando.com",
	},
	{
		image: "https://placehold.co/400x300/e2e8f0/64748b?text=M.O.M.",
		title: "Desarrollador Full-Stack (Freelance) | Minds Over Market",
		date: "Marzo 2022 - Enero 2024",
		achievements: [
			"Implementé proyectos full-stack complejos, optimizando el rendimiento de las aplicaciones y reduciendo los tiempos de carga de página en un 40%.",
		],
		link: "https://mindsovermarket.com",
	},
	{
		image: "https://placehold.co/400x300/e2e8f0/64748b?text=TRC",
		title: "Ingeniero Frontend (Contrato) | TRC | Sports",
		date: "Junio 2022 - Agosto 2022",
		achievements: [
			"Conceptualicé y prototipé interfaces de usuario intuitivas, mejorando la experiencia de usuario (UX) y aumentando la retención de usuarios en un 15%.",
		],
		link: "https://trcsports.com",
	},
	{
		image: "https://placehold.co/400x300/e2e8f0/64748b?text=Branak",
		title: "Ingeniero Full-Stack (Contrato) | Branak",
		date: "Febrero 2022 - Marzo 2022",
		achievements: [
			"Contribuí al desarrollo de aplicaciones modulares, colaborando en un equipo ágil para entregar soluciones que mejoraron la escalabilidad del sistema en un 25%.",
		],
		link: "https://branak.com",
	},
	{
		image: "https://placehold.co/400x300/e2e8f0/64748b?text=C.C.R.",
		title: "Desarrollador Full-Stack (Freelance) | Colegio Cristo Rey",
		date: "Enero 2019 - Enero 2024",
		achievements: [
			"Desarrollé un portal de autogestión de pagos que redujo el tiempo de procesamiento administrativo en un 70% y disminuyó los errores de pago en un 95%.",
		],
		link: "https://colegiocristoreycarora.com",
	},
];
</script>

<style scoped>
/* No specific styles needed as Tailwind handles most of it */
</style>
