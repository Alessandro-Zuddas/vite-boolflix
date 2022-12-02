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
        <h2 class="pb-2 pt-3">Sezione Film</h2>
        <MoviesSection/>
    </section>

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