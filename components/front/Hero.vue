<template>
    <section
        class="relative flex flex-col-reverse items-center justify-center px-8 bg-blue-800 lg:pr-0 bg-pattern lg:grid lg:grid-cols-12 lg:col-gap-4"
    >
        <div
            class="relative max-w-xl pb-12 lg:mx-auto lg:pr-12 lg:py-40 xl:py-56 xl:pr-0 lg:col-start-1 lg:col-end-8 lg:row-end-1"
        >
            <Logo
                class="w-10 h-10 my-12 text-blue-200 lg:w-12 lg:h-12 lg:mt-0"
                :draw="true"
            />

            <p
                class="block text-blue-400 lg:text-lg animate-fadeInUp"
                :class="animatedClassObject"
                style="--delay: 1"
                v-text="$t('hero.hi')"
            />

            <h1
                class="text-4xl font-extrabold leading-tight text-blue-200 lg:text-5xl xl:text-6xl animate-fadeInUp"
                :class="animatedClassObject"
                style="--delay: 2"
                v-text="$t('hero.name')"
            />

            <h2
                class="mb-8 text-2xl font-extrabold leading-tight text-blue-400 lg:text-4xl xl:text-5xl animate-fadeInUp"
                :class="animatedClassObject"
                style="--delay: 3"
                v-text="$t('hero.tagline')"
            />

            <p
                class="text-blue-200 md:text-lg animate-fadeInUp"
                :class="animatedClassObject"
                style="--delay: 4"
                v-text="$t('hero.description')"
            />

            <p
                class="mt-4 text-blue-200 md:text-lg animate-fadeInUp"
                :class="animatedClassObject"
                style="--delay: 5"
            >
                {{ $t('hero.callToAction.more') }}
                <BaseLink
                    to="/contact/"
                    class="underline hover:no-underline"
                    v-text="$t('hero.callToAction.hire')"
                />.
            </p>

            <Social
                class="mt-8 animate-fadeInUp"
                :class="animatedClassObject"
                style="--delay: 6"
            />
        </div>
        <div
            class="hidden overflow-hidden lg:relative lg:rounded-none animate-heroImage lg:block lg:h-full lg:m-0 lg:z-10 lg:w-auto lg:col-start-7 lg:col-end-13 lg:row-end-1"
            :class="animatedClassObject"
        >
            <BaseImage
                class="lg:absolute lg:inset-0 lg:w-full lg:h-full lg:object-cover"
                :placeholder="false"
                src="profile.jpg"
            />
        </div>
    </section>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        computed: {
            animatedClassObject() {
                return !this.shouldAnimate ? 'no-animate' : '';
            },
            ...mapState({
                shouldAnimate: state => state.animations.hero,
            }),
        },
        methods: {
            ...mapMutations({
                disableAnimation: 'animations/disable',
            }),
        },
        mounted() {
            this.$nextTick(() => {
                setTimeout(() => this.disableAnimation('hero'), 2500);
            });
        },
    };
</script>

<style lang="postcss" scoped>
    .animate-fadeInUp {
        animation-delay: calc(0.5s + (0.15s * var(--delay)));
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.5, 0.99);
        animation-fill-mode: both;
        animation-name: fadeInUp;
        animation-duration: 0.5s;

        &.no-animate {
            animation: none;
        }
    }

    .animate-heroImage {
        animation-fill-mode: both;
        animation-name: fadeInUp;
        animation-duration: 0.5s;
        animation-delay: 0.25s;

        @screen lg {
            animation-name: clipOut;
            animation-duration: 0.5s;
            animation-delay: 1.5s;
        }

        &.no-animate {
            animation: none;
            transform: translate3d(0, 0, 0);
            opacity: 1;

            @screen lg {
                clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
            }
        }
    }

    @keyframes fadeInUp {
        from {
            transform: translate3d(0, 2em, 0);
            opacity: 0;
        }

        to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
    }

    @keyframes clipOut {
        from {
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }

        to {
            clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
        }
    }
</style>
