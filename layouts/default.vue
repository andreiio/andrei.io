<template>
    <div class="flex flex-col min-h-screen font-sans antialiased bg-pattern">
        <navigation-bar :drawLogo="!isErrorPage" />
        <nuxt class="grid flex-1" />
        <Footer v-if="!isErrorPage" />
    </div>
</template>

<script>
    import metaMixin from '~/mixins/meta.js';

    export default {
        computed: {
            isErrorPage() {
                return !!this.$root.nuxt.err;
            },
        },
        head() {
            let title = this.$t('title');

            return {
                title: title,
                titleTemplate: `%s — ${title}`,
                ...metaMixin({
                    title: title,
                    description: this.$t('description'),
                }),
            };
        },
    };
</script>

<style lang="postcss">
    .page-enter-active,
    .page-leave-active {
        transition: opacity 0.15s;
    }

    .page-enter,
    .page-leave-active {
        opacity: 0;
    }
</style>
