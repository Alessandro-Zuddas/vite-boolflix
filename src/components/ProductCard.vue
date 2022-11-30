<script>

import { store } from "../store.js"

export default {

    name: "ProductCard",

    data() {
        return {
        store,
        }
    },
    created(){
        console.log(store);
        console.log("Siamo alla card");
    }
}
</script>

<template>

    <ul class="px-4">
        <li>Prova</li>
        <li>Prova</li>
        <li>Prova</li>
        <li>Prova</li>
        <li>Prova</li>
    </ul>

</template>

<style scoped>



</style>