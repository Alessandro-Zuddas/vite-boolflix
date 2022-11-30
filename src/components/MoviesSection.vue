<script>

import { store } from "../store.js"
import ProductCard from './ProductCard.vue';

export default {

    name: "MoviesSection",

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
        <h3 class="py-2">Titolo sezione</h3>
    </div>

    <div class="container-fluid d-flex px-3">

        <ProductCard />   

    </div>

</template>

<style scoped>



</style>