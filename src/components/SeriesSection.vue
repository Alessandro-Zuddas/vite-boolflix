<script>

import { store } from "../store.js"
import ProductCard from './ProductCard.vue';

export default {

    name: "SeriesSection",

    components: {
        ProductCard,
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

        <ProductCard />   

    </div>

</template>

<style scoped>



</style>