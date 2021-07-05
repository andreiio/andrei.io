<template>
    <base-section :title="$t('work.title')" :subtitle="$t('work.subtitle')">
        <div class="grid gap-y-16 gap-x-12 md:grid-cols-2 xl:grid-cols-3">
            <project-detail
                v-for="project in projects"
                :project="project"
                :key="project.meta.slug"
            />
        </div>
    </base-section>
</template>

<script>
    import workMixin from '~/mixins/work.js';

    export default {
        mixins: [workMixin],
    };
</script>
