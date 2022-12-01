<script>

import MoviesSection from './MoviesSection.vue';
import SeriesSection from './SeriesSection.vue';

export default {

    name: "AppMain",

    components: {
        MoviesSection,
        SeriesSection,
    },
    data() {
        return {

        }
    }
}
</script>

<template>

    <section class="mt-3">
        <h3 class="py-2">Film</h3>
        <MoviesSection/>
    </section>
    
    <section class="mt-3">
        <h3 class="py-2">Serie TV</h3>
        <SeriesSection/>
    </section>

</template>

<style scoped>

h3{
    padding-left: 3.125rem;
}

</style>