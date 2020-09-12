<template>
    <BaseSection
        :title="$t('openSource.title')"
        :subtitle="$t('openSource.subtitle')"
    >
        <div class="grid gap-y-20 gap-x-16 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="repo in repos" :key="repo.repo">
                <a
                    class="inline-block text-xl font-semibold hover:underline"
                    :href="`https://github.com/${repo.repo}`"
                    target="_blank"
                    v-text="repo.repo"
                />
                <p class="my-2 text-sm" v-text="repo.description" />
                <span class="flex items-center mt-1">
                    <i
                        class="w-3 h-3 mr-1 rounded-full"
                        :style="{
                            backgroundColor: repo.primaryLanguage.color,
                        }"
                    />
                    <span
                        class="text-xs text-gray-600"
                        v-text="repo.primaryLanguage.name"
                    />
                </span>
            </div>
        </div>
    </BaseSection>
</template>

<script>
    import repos from '~/content/repos.js';

    export default {
        computed: {
            repos: () => repos,
        },
    };
</script>

<style lang="postcss" scoped>
    >>> .code4-logo {
        @apply pl-6 font-semibold whitespace-no-wrap;
        @apply bg-left bg-no-repeat inline-block;
        @apply border-b border-transparent border-solid;

        background-image: url('~assets/svg/code4.svg');
        background-size: 1em;

        &:hover {
            border-color: #00f;
            color: inherit;
        }
    }
</style>
