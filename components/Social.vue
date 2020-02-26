<template>
	<div class="flex -mx-3 text-blue-400">
		<a
			v-for="link in links"
			:href="link.url"
			:key="link.id"
			target="_blank"
			class="p-2 mx-1 rounded-full focus:outline-none"
			:class="colorScheme"
		>
			<component :is="`${link.id}-icon`" size="1.5x" stroke-width="1" />
		</a>
	</div>
</template>

<script>
	import { GithubIcon, TwitterIcon, LinkedinIcon } from 'vue-feather-icons';

	export default {
		components: {
			GithubIcon,
			TwitterIcon,
			LinkedinIcon,
		},
		props: {
			dark: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				links: [
					{
						id: 'github',
						url: 'https://github.com/andreiio',
					},
					{
						id: 'twitter',
						url: 'https://twitter.com/andreiio',
					},
					{
						id: 'linkedin',
						url: 'https://www.linkedin.com/in/andreiio/',
					},
				],
			};
		},
		computed: {
			colorScheme() {
				let colorScheme = ['focus:bg-blue-700', 'focus:text-blue-100'];

				if (this.dark) {
					colorScheme.push('hover:text-blue-800');
				} else {
					colorScheme.push('hover:text-blue-200');
				}

				return colorScheme;
			},
		},
	};
</script>

<style lang="postcss" scoped>
	a {
		transition: color 0.25s, background-color 0.25s;
	}
</style>
