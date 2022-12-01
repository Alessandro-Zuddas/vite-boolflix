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

    <div class="px-4">
        <h3>Serie TV</h3>
    </div>

    <div class="container-fluid d-flex px-3">

        
        <SeriesCard v-for="show in this.store.series"
            :showInfo = show />  

    </div>

</template>

<style scoped>

.container-fluid{
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>