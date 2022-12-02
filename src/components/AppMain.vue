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

    <section  v-if="(store.categorySelected === `movie`)">
        <h2 class="pb-2 pt-3">Risultati filtrati per: Film</h2>
        <MoviesSection/>
    </section>
    
    <section  v-if="(store.categorySelected === `tv`)">
        <h2 class="pb-2 pt-3">Risultati filtrati per: Serie TV</h2>
        <SeriesSection/>
    </section>

    <div v-if="(store.categorySelected === `all`)">
        <section >
            <h2 class="pb-2 pt-3">Risultati filtrati per: Tutti</h2>
            <MoviesSection/>
            <SeriesSection/>
        </section>
    </div>

</template>

<style scoped>

h2{
    padding-left: 1.5625rem;
}

section{
    color: white;
    margin-top: 5.9375rem;
    background-color: #141414;
}

</style>