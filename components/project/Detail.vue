<template>
	<article>
		<a
			:href="project.attributes.url"
			target="_blank"
			rel="noopener"
			class="block"
			:title="$t('button.live')"
		>
			<BaseImage
				class="w-full mb-5 overflow-hidden rounded shadow-md hover:shadow-lg"
				:src="`work/${project.meta.slug}/thumbnail.jpg`"
			/>
		</a>

		<h1
			class="text-lg font-bold lg:text-xl"
			v-text="project.attributes.title"
		/>

		<p class="mt-1 mb-2 text-sm font-bold text-blue-500">
			<span v-text="project.attributes.client.name" />,
			<time v-text="project.attributes.year" />
		</p>

		<p v-text="project.attributes.subtitle" />
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
	};
</script>
