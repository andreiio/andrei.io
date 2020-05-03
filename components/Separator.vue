<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1e3 42.18354">
        <g v-if="reverse">
            <path
                :fill="accentColor"
                d="M.003 22.694 1e3 2.928v4.393l-.008-.054L0 42.184"
            />
            <path
                :fill="backgroundColor"
                d="M.003.0H1e3v5.124-.022L.003 22.694"
            />
        </g>

        <g v-else>
            <path
                :fill="accentColor"
                d="M999.997 19.49.0 39.255v-4.392l.008.053L1e3.0"
            />
            <path
                :fill="backgroundColor"
                d="M999.997 42.184H0v-5.125.022L999.997 19.49"
            />
        </g>
    </svg>
</template>

<script>
    export default {
        props: {
            reverse: {
                type: Boolean,
                required: false,
                default: false,
            },
            accentColor: {
                type: String,
                required: false,
                default: '#edf2f7',
            },
            backgroundColor: {
                type: String,
                required: false,
                default: '#f7fafc',
            },
        },
    };
</script>

<style lang="postcss">
</style>
