<template>
    <BaseSection :title="$t('work.title')" :subtitle="$t('work.subtitle')">
        <div class="grid row-gap-16 col-gap-12 md:grid-cols-2 xl:grid-cols-3">
            <ProjectDetail
                v-for="project in projects"
                :project="project"
                :key="project.meta.slug"
            />
        </div>
    </BaseSection>
</template>

<script>
    import workMixin from '~/mixins/work.js';

    export default {
        mixins: [workMixin],
    };
</script>
