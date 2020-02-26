<template>
	<BaseSection
		:title="$t('clients.title')"
		:subtitle="$t('clients.subtitle')"
	>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div
				class="relative client"
				v-for="(client, index) in clients"
				:key="index"
			>
				<BaseImage
					:src="`clients/${client.id}.png`"
					:alt="client.name"
					:title="client.name"
					class="block w-full client"
				/>
			</div>
		</div>
	</BaseSection>
</template>

<script>
	import clients from '~/content/clients.js';

	export default {
		computed: {
			clients: () => clients,
		},
	};
</script>

<style lang="postcss" scoped>
	.client {
		transition: filter 0.275s;
		filter: saturate(0);

		&:hover {
			filter: saturate(1);
		}
	}
</style>
