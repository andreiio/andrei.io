<template>
    <div class="w-full mb-6">
        <label
            class="block mb-2 font-extrabold tracking-wide"
            :for="name"
            v-text="label"
        />

        <textarea
            v-if="type === 'textarea'"
            :class="inputClasses"
            :id="name"
            :name="name"
            :required="required"
            rows="5"
        />
        <input
            v-else
            :class="inputClasses"
            :id="name"
            :name="name"
            :type="type"
            :required="required"
        />
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                required: false,
                default: 'text',
            },
            name: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
            required: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            inputClasses: () => [
                'block',
                'w-full',
                'px-4',
                'py-3',
                'leading-tight',
                'text-gray-800',
                'border',
                'border-gray-200',
                'rounded',
                'appearance-none',
                'focus:outline-none',
                'focus:border-blue-500',
            ],
        },
    };
</script>
