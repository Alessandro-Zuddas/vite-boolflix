<script>

import { store } from "../store.js"
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
        store,
        }
    }
}
</script>

<template>

    <MoviesSection class="mt-3" />
    <SeriesSection class="mt-3" />

</template>

<style scoped>



</style>