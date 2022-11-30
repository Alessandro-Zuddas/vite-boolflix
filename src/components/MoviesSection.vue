<script>

import { store } from "../store.js"
import MovieCard from './MovieCard.vue';

export default {

    name: "MoviesSection",

    components: {
        MovieCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>

    <div class="px-3">
        <h3 class="py-2">Titolo sezione</h3>
    </div>

    <div class="container-fluid d-flex px-3">

        <MovieCard v-for="movie in this.store.movies"
            :movieInfo = movie />

    </div>

</template>

<style scoped>



</style>