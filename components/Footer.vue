<template>
    <footer class="relative mt-40" v-if="!this.$nuxt.context._errored">
        <separator accentColor="#cbd5e0" backgroundColor="#e2e8f0" />

        <div class="px-5 pt-16 pb-10 bg-gray-100">
            <div class="container max-w-lg mx-auto text-center">
                <p class="mb-3 font-semibold">
                    © 2012–{{ new Date().getFullYear() }}
                    {{ $t('footer.copy') }}
                </p>

                <p class="text-sm text-gray-700">
                    {{ $t('footer.builtWith') }}
                    <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline hover:no-underline"
                        >Nuxt.js</a
                    >
                    &amp;
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
                    <social dark />
                </div>
            </div>
        </div>
    </footer>
</template>
