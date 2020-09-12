<template>
	<div class="py-16 pt-48">
		<h1 class="h1" :title="$t('front.work.title')" />

		<div class="grid gap-y-20 gap-x-16 lg:grid-cols-2">
			<ProjectThumbnail
				v-for="(project, index) in projects"
				:project="project"
				:showYear="true"
				:key="index"
			/>
		</div>
	</div>
</template>
<script>
	import workMixin from '~/mixins/work.js';

	export default {
		mixins: [workMixin],
		data: () => ({
			md: {},
		}),
		head() {
			return {
				title: this.md.attributes.title,
			};
		},
		created() {
			this.md = require(`~/content/${this.$i18n.locale}/work.md`);
		},
	};
</script>

