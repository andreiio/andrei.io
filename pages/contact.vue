<template>
    <div class="container gap-20 py-16 pt-48 lg:grid-cols-2">
        <h1
            class="text-3xl font-extrabold lg:text-4xl xl:text-5xl lg:col-span-2"
            v-text="md.attributes.title"
        />

        <component :is="md.vue.component" />

        <form
            class="flex flex-wrap"
            :action="localePath('/thanks/')"
            method="post"
            name="contact"
            netlify-honeypot="bot-field"
            netlify
        >
            <label class="hidden">
                {{ $t('form.botField') }}
                <input name="bot-field" />
            </label>

            <input type="hidden" name="form-name" value="contact" />

            <form-input
                :label="$t('form.name')"
                type="text"
                name="name"
                required
            />

            <form-input
                :label="$t('form.email')"
                type="email"
                name="email"
                required
            />

            <form-input
                :label="$t('form.message')"
                type="textarea"
                name="message"
                required
            />

            <form-button v-text="$t('form.submit')" />
        </form>
    </div>
</template>

<script>
    import metaMixin from '~/mixins/meta.js';

    export default {
        data: () => ({
            md: {},
        }),
        head() {
            return {
                title: this.md.attributes.title,
                ...metaMixin({
                    title: `${this.md.attributes.title} — ${this.$t('title')}`,
                    description: this.md.attributes.description,
                }),
            };
        },
        created() {
            this.md = require(`~/content/${this.$i18n.locale}/contact.md`);
        },
    };
</script>
