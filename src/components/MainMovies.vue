<script>

import MoviesSection from './MoviesSection.vue';

import { store } from "../store.js"

export default {

    name: "MainMovies",

    components: {
        MoviesSection,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <section>
        <h2 class="pb-2 pt-3">Più popolari questa settimana:</h2>
        <!-- Da implementare -->
    </section>

    <section v-if="(store.movies)">
        <h2 class="pb-2 pt-3">Tutti i film:</h2>
        <MoviesSection/>
    </section>

    <section v-if="(store.movies.length <= 0)">
        <h1 class="text-center my-5">Nessun risultato trovato!</h1>
    </section>

</template>

<style scoped>

h1{
    color: white;
}

h2{
    padding-left: 1.5625rem;
}

section{
    color: white;
    margin-top: 5.9375rem;
    background-color: #141414;
}

</style>