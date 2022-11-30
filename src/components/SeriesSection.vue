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

    <div class="px-3">
        <h3>Titolo sezione</h3>
    </div>

    <div class="container-fluid d-flex px-3">

          

    </div>

</template>

<style scoped>



</style>