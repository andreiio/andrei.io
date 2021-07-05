<template>
    <nuxt-link
        :to="localePath(to)"
        :active-class="activeClass"
        :exact-active-class="exactActiveClass"
    >
        <slot />
    </nuxt-link>
</template>

<script>
    export default {
        props: {
            to: {
                type: String,
                required: true,
            },
            activeClass: {
                type: String,
                default: '',
            },
            exactActiveClass: {
                type: String,
                default: '',
            },
        },
    };
</script>
