<template>
	<div class="container max-w-3xl gap-20 py-16 pt-48 text-center">
		<h1 class="h1" v-text="md.attributes.title" />

		<component :is="md.vue.component" />
	</div>
</template>

<script>
	export default {
		data: () => ({
			md: {},
		}),
		head() {
			return {
				title: this.md.attributes.title,
			};
		},
		created() {
			this.md = require(`~/content/${this.$i18n.locale}/thanks.md`);
		},
	};
</script>
