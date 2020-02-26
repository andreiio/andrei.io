<template>
	<article class="relative w-full">
		<BaseLink :to="project.meta.permalink" class="block">
			<BaseImage
				class="w-full mb-5 overflow-hidden rounded-lg shadow-md rounded- hover:shadow-lg"
				:src="`work/${project.meta.slug}/thumbnail.jpg`"
				:srcset="false"
			/>

			<h1
				class="text-xl font-bold mt-"
				v-text="project.attributes.title"
			/>
			<p class="mt-1" v-text="project.attributes.subtitle" />
		</BaseLink>
	</article>
</template>

<script>
	export default {
		props: {
			project: {
				type: Object,
				required: true,
			},
		},
		computed: {
			lqip() {
				return require(`~/assets/work/${this.project.meta.slug}/thumbnail.jpg`);
			},
		},
	};
</script>
