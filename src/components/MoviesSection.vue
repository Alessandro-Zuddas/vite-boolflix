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

    <div class="container-fluid d-flex px-3 justify-content-between text-center flex-wrap">

        <MovieCard v-for="movie in this.store.movies"
            :movieInfo = movie />

    </div>

</template>

<style scoped>


</style>