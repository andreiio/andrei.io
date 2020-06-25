<template>
    <div
        class="items-center w-full min-h-screen bg-blue-800 lg:justify-center bg-pattern"
    >
        <div class="col-span-12 text-center text-blue-100">
            <div class="relative block my-5 leading-none">
                <h1
                    class="relative inline-block overflow-hidden font-semibold whitespace-no-wrap error-code"
                    :data-code="error.statusCode"
                    v-text="error.statusCode"
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
    };
</script>

<style lang="scss" scoped>
    .error-code {
        text-shadow: 1px 2px 3px #000;
        line-height: 0.79;
        font-size: 25vw;

        &::before {
            text-shadow: -0.5vw -0.5vw #17263f, 0.5vw 0.5vw #17263f;
            animation: glitch 5s infinite alternate-reverse;
            animation-delay: 0.5s;
            clip: rect(0, 1px, 0, 0);
            content: attr(data-code);
            font-weight: inherit;
            position: absolute;
            color: currentColor;
            left: -2px;
            top: -2px;
        }
    }

    @keyframes glitch {
        $maxClipHeight: 25;
        $steps: 20;

        @for $step from 0 through $steps {
            #{percentage($step * (1 / $steps))} {
                clip: rect(
                    random($maxClipHeight) + vmin,
                    100vw,
                    random($maxClipHeight) + vmin,
                    0
                );
            }
        }
    }
</style>
