<template>
	<div class="row-gap-20 py-16 pt-48">
		<header class="grid col-start-2 col-end-12 row-gap-16 text-lg">
			<div class="grid row-gap-16">
				<div class="grid lg:grid-cols-4 lg:gap-16">
					<time
						class="text-2xl font-extrabold lg:text-3xl xl:text-5xl lg:col-span-1"
						v-text="md.attributes.year"
					/>

					<div class="lg:col-span-3">
						<h1
							class="text-3xl font-extrabold leading-tight lg:text-4xl xl:text-5xl"
							v-text="md.attributes.title"
						/>

						<h2
							class="text-lg font-extrabold text-gray-600 lg:text-xl xl:text-2xl"
							v-text="md.attributes.subtitle"
						/>

						<a
							v-if="md.attributes.url"
							:href="md.attributes.url"
							target="_blank"
							rel="noopener"
							class="text-base text-blue-400 underline hover:no-underline"
							v-text="md.attributes.url"
						/>
					</div>
				</div>

				<aside
					class="grid row-gap-4 lg:grid-cols-4 lg:gap-16"
					v-if="md.attributes.client"
				>
					<div class="lg:col-span-1">
						<p
							class="font-semibold"
							v-text="md.attributes.client.name"
						/>
						<p v-text="md.attributes.client.location" />
					</div>
					<div class="lg:col-span-3">
						<p class="leading-relaxed">
							{{ md.attributes.client.description }}
						</p>
					</div>
				</aside>
			</div>
		</header>

		<component
			class="grid grid-cols-1 col-start-2 col-end-12 row-gap-20 col-gap-8 text-lg lg:grid-cols-2"
			:is="md.vue.component"
		/>
	</div>
</template>

<script>
	export default {
		async validate({ params, app }) {
			try {
				return require(`~/content/${app.i18n.locale}/work/${params.slug}.md`);
			} catch (error) {
				return false;
			}
		},
		data() {
			return {
				md: {},
			};
		},
		created() {
			this.md = require(`~/content/${this.$i18n.locale}/work/${this.$route.params.slug}.md`);
		},
		head() {
			return {
				title: this.md.attributes.title,
			};
		},
	};
</script>

<style lang="postcss">
	.content {
		p:not(:first-child) {
			@apply mt-4;
		}
	}
</style>
