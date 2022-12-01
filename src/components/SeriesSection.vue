<script>

import { store } from "../store.js"
import SeriesCard from './SeriesCard.vue';

export default {

    name: "SeriesSection",

    components: {
        SeriesCard,
    },
    data() {
        return {
        store,
        }
    },
}
</script>

<template>

    <div class="container-fluid d-flex px-3 text-center justify-content-between flex-wrap">

        
        <SeriesCard v-for="show in this.store.series"
            :showInfo = show />  

    </div>

</template>

<style scoped>

</style>