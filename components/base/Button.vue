<template>
    <BaseLink :class="buttonClassObject" :to="href" v-if="type === 'nuxt'">
        <slot />
    </BaseLink>

    <a
        :class="buttonClassObject"
        :href="href"
        :target="newTab ? '_blank' : false"
        rel="noopener"
        v-else
    >
        <slot />
    </a>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'a',
            },
            href: {
                type: String,
                default: '',
            },
            label: {
                type: String,
                default: '',
            },
            newTab: {
                type: Boolean,
                default: false,
            },
            size: {
                type: String,
                default: 'md',
            },
        },
        computed: {
            buttonClassObject() {
                let style = [
                    'relative',
                    'inline-flex',
                    'leading-snug',
                    'tracking-wide',
                    'items-center',
                    'border-gray-300',
                    'rounded',
                    'transition-colors',
                    'duration-150',
                    'focus:outline-none',
                    'focus:bg-blue-200',
                    'focus:text-blue-800',
                    'hover:bg-blue-100',
                    'hover:text-blue-800',
                ];

                switch (this.size) {
                    case 'lg':
                        style.push('lg:h-16', 'lg:px-8', 'lg:py-4', 'lg:text-xl');
                    case 'md':
                        style.push('h-12', 'px-6', 'py-3', 'text-base', 'border');
                        break;
                    case 'sm':
                        style.push('h-8', 'px-4', 'py-2', 'text-sm', 'border');
                        break;
                }

                return style;
            },
        },
    };
</script>
