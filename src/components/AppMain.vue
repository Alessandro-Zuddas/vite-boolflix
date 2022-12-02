<script>

import MainHome from './MainHome.vue';
import MainMovies from './MainMovies.vue';
import MainSeries from './MainSeries.vue';

import { store } from "../store.js"

export default {

    name: "AppMain",

    components: {
        MainHome,
        MainMovies,
        MainSeries,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <MainHome v-if="store.homeActive"/>
    <MainMovies v-if="store.moviesActive"/>
    <MainSeries v-if="store.seriesActive"/>

</template>

<style scoped>



</style>