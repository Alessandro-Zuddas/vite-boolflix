<script>

import axios from "axios";
import { store } from "../store.js"
import ProductCard from './ProductCard.vue';

export default {

    name: "AppMain",
    components: {
        ProductCard,
    },
    data() {
        return {
        store,
        }
    },
    created(){
        console.log(store);
        console.log("Siamo al main");
    }
}
</script>

<template>

    <div class="container-fluid d-flex px-3 py-3">

        <ProductCard />

    </div>

</template>

<style scoped>



</style>