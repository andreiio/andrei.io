<template>
    <div class="py-20 text-center text-white bg-blue-800">
        <div
            class="container grid items-center justify-center gap-10 mx-auto md:grid-cols-2"
        >
            <h1
                class="text-2xl font-bold leading-tight text-center text-white md:text-3xl md:text-right lg:text-4xl xl:text-5xl"
                v-text="$t('callToAction.title')"
            />

            <div>
                <BaseButton
                    size="lg"
                    type="nuxt"
                    href="/contact/"
                    class="font-semibold"
                    v-text="$t('callToAction.button')"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>
