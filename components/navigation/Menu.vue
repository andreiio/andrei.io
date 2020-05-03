<template>
    <ul class="flex">
        <li v-for="item in menu" :key="item.id">
            <BaseLink
                :to="item.to"
                v-text="item.label"
                exact-active-class="text-blue-600 bg-gray-100"
                class="px-3 py-2 ml-1 text-xs font-extrabold tracking-wide uppercase transition-colors duration-150 rounded sm:text-sm sm:ml-3 sm:px-3 sm:py-2 hover:bg-gray-100 focus:text-blue-600 focus:outline-none"
            />
        </li>
    </ul>
</template>

<script>
    export default {
        computed: {
            menu() {
                return [
                    { to: '/', label: this.$t('menu.home') },
                    { to: '/contact/', label: this.$t(`menu.contact`) },
                ];
            },
        },
    };
</script>
