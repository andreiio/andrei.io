<template>
    <section class="container grid gap-y-16 mx-auto">
        <header class="max-w-lg">
            <h1
                class="text-2xl font-bold md:text-3xl lg:text-4xl"
                v-text="title"
            />
            <p class="mt-2 text-lg" v-if="subtitle" v-html="subtitle" />
        </header>

        <slot />

        <div v-if="hasFooterSlot">
            <slot name="footer" />
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: false,
                default: '',
            },
            flexClass: {
                type: String,
                required: false,
            },
        },
        computed: {
            hasFooterSlot() {
                return !!this.$slots['footer'];
            },
        },
    };
</script>
