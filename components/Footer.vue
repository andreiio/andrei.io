<template>
	<footer class="relative mt-40" v-if="!this.$nuxt.context._errored">
		<Separator accentColor="#cbd5e0" backgroundColor="#e2e8f0" />

		<div class="px-5 pt-16 pb-10 bg-gray-100">
			<div class="container max-w-lg mx-auto leading-relaxed text-center">
				<p class="mb-3 font-semibold" v-html="$t('footer.copy')" />
				<p class="text-sm text-gray-700">
					{{ $t('footer.builtWith') }}
					<a
						href="https://nuxtjs.org/"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:no-underline"
						>Nuxt.js</a
					>
					&
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:no-underline"
						>Tailwind CSS</a
					>
					{{ $t('footer.hostedOn') }}
					<a
						href="https://netlify.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:no-underline"
						>Netlify</a
					>.

					{{ $t('footer.sourceCode') }}
					<a
						href="https://github.com/andreiio/v2"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:no-underline"
						>Github</a
					>.
				</p>
				<div class="inline-flex mt-6">
					<Social dark />
				</div>
			</div>
		</div>
	</footer>
</template>
