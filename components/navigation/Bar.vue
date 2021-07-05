<template>
    <nav class="absolute inset-x-0 top-0 z-50" v-if="!isFrontOrErrorPage">
        <div class="container grid grid-cols-4 py-8 mx-auto gap-x-4">
            <base-link class="col-span-1 focus:outline-none" to="/">
                <logo class="w-10 h-10 lg:w-12 lg:h-12" :draw="this.drawLogo" />
            </base-link>

            <navigation-menu class="flex items-center justify-end col-span-3" />
        </div>
    </nav>
</template>

<script>
    export default {
        props: {
            drawLogo: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                lastScrollPosition: null,
                scrollDirection: null,
                windowHeight: null,
            };
        },
        computed: {
            isFrontOrErrorPage() {
                return (
                    (this.$route.name !== null &&
                        this.$route.name.split('___')[0] === 'index') ||
                    this.$root.nuxt.err
                );
            },
            isAtPageTop() {
                return this.lastScrollPosition === 0;
            },
            isPastHero() {
                return this.lastScrollPosition >= this.windowHeight;
            },
        },
        methods: {
            onScroll() {
                // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
                if (window.pageYOffset < 0) {
                    window.pageYOffset = 0;
                }

                if (window.pageYOffset < this.lastScrollPosition) {
                    this.scrollDirection = 'up';
                } else {
                    this.scrollDirection = 'down';
                }

                // Set the current scroll position as the last scroll position
                this.lastScrollPosition = window.pageYOffset;
            },
            onResize() {
                this.windowHeight = window.innerHeight;
            },
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll);
            window.addEventListener('resize', this.onResize);

            this.onScroll();
            this.onResize();
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll);
            window.removeEventListener('resize', this.onResize);
        },
    };
</script>

<style lang="postcss" scoped>
    nav {
        &.down {
            transform: translate3d(0, -5rem, 0);
        }

        &.up {
            transition: transform 0.25s;
            transform: translate3d(0, 0, 0);
        }
    }
</style>
