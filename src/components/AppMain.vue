<script>

import MoviesSection from './MoviesSection.vue';
import SeriesSection from './SeriesSection.vue';

import { store } from "../store.js"

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

    <section class="mt-3" v-if="(store.categorySelected === `movie`)">
        <h3 class="py-2">Film</h3>
        <MoviesSection/>
    </section>
    
    <section class="mt-3" v-if="(store.categorySelected === `tv`)">
        <h3 class="py-2">Serie TV</h3>
        <SeriesSection/>
    </section>

    <div v-if="(store.categorySelected === `all`)">
        <section class="mt-3">
            <h3 class="py-2">Film</h3>
            <MoviesSection/>
        </section>
        
        <section class="mt-3">
            <h3 class="py-2">Serie TV</h3>
            <SeriesSection/>
        </section>
    </div>

</template>

<style scoped>

h3{
    padding-left: 3.125rem;
}

</style>