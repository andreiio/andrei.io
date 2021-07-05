<template>
    <base-section
        :title="$t('clients.title')"
        :subtitle="$t('clients.subtitle')"
    >
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
                class="relative client"
                v-for="(client, index) in clients"
                :key="index"
            >
                <base-image
                    :src="`clients/${client.id}.png`"
                    :alt="client.name"
                    :title="client.name"
                    class="block w-full duration-300 filter saturate-0 hover:saturate-100 duration transition-filter"
                />
            </div>
        </div>
    </base-section>
</template>

<script>
    import clients from '~/content/clients.js';

    export default {
        computed: {
            clients: () => clients,
        },
    };
</script>
