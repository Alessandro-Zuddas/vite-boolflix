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

    <div class="px-4">
        <h3 class="py-2">Film</h3>
    </div>

    <div class="container-fluid d-flex px-3">

        <MovieCard v-for="movie in this.store.movies"
            :movieInfo = movie />

    </div>

</template>

<style scoped>

.container-fluid{
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>