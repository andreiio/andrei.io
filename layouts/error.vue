<template>
    <div
        class="items-center w-full min-h-screen bg-blue-800 lg:justify-center bg-pattern"
    >
        <div class="col-span-12 text-center text-blue-100">
            <div class="relative block my-5 leading-none">
                <h1
                    class="relative inline-block font-semibold whitespace-no-wrap error-code"
                    v-html="statusCode"
                />
            </div>
            <div class="mt-16">
                <BaseButton type="nuxt" href="/">
                    <arrow-left-icon
                        size="1.5x"
                        class="mr-2"
                        stroke-width="1"
                    />
                    <span v-text="$t('button.home')" />
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script>
    import { ArrowLeftIcon } from 'vue-feather-icons';

    export default {
        components: {
            ArrowLeftIcon,
        },
        props: {
            error: {
                type: Object,
            },
        },
        computed: {
            statusCode() {
                return this.error.statusCode
                    .toString()
                    .split('')
                    .map(x => `<span>${x}</span>`)
                    .join('');
            },
        },
    };
</script>

<style lang="postcss" scoped>
    .error-code {
        text-shadow: 1px 2px 3px #000;
        line-height: 0.79;
        font-size: 25vw;

        >>> span:nth-child(2) {
            animation: flicker 5s linear infinite;
        }
    }

    @keyframes flicker {
        0%,
        19.999%,
        22%,
        62.999%,
        64%,
        64.999%,
        70%,
        100% {
            opacity: 1;
        }

        20%,
        21.999%,
        63%,
        63.999%,
        65%,
        69.999% {
            opacity: 0.25;
        }
    }
</style>
