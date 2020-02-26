<template>
	<img :src="require(`~/assets/${this.src}`)" :alt="alt" />
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				required: true,
			},
			alt: {
				type: String,
				required: false,
				default: '',
			},
		},
	};
</script>
