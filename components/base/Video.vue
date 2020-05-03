<template>
    <video
        :poster="require(`~/assets/${this.poster}`)"
        playsinline
        autoplay
        muted
        loop
    >
        <source :src="require(`~/assets/${this.src}`)" type="video/mp4" />
    </video>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true,
            },
            poster: {
                type: String,
                required: true,
            },
        },
    };
</script>
