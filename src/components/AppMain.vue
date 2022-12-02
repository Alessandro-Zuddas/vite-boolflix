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
        <h1 class="pb-2 pt-3">Film:</h1>
        <MoviesSection/>
    </section>
    
    <section  v-if="(store.categorySelected === `tv`)">
        <h1 class="pb-2 pt-3">Serie TV:</h1>
        <SeriesSection/>
    </section>

    <div v-if="(store.categorySelected === `all`)">
        <section >
            <h1 class="pb-2 pt-3">I tuoi risultati:</h1>
            <MoviesSection/>
            <SeriesSection/>
        </section>
    </div>

</template>

<style scoped>

h1{
    padding-left: 1.5625rem;
}

section{
    color: white;
    background-color: #141414;
}

</style>