<script>

import SeriesSection from './SeriesSection.vue';

import { store } from "../store.js"

export default {

    name: "MainSeries",

    components: {
        SeriesSection,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <section>
        <h2 class="pb-2 pt-3">Più popolari questa settimana:</h2>
        <!-- Da implementare -->
    </section>

    <section v-if="(store.series)">
        <h2 class="pb-2 pt-3">Sezione Serie</h2>
        <SeriesSection/>
    </section>

    <section v-if="(store.series.length <= 0)">
        <h1 class="text-center my-5">Nessun risultato trovato!</h1>
    </section>

</template>

<style scoped>

h1{
    color: white;
}

h2{
    padding-left: 1.5625rem;
}

section{
    color: white;
    margin-top: 5.9375rem;
    background-color: #141414;
}

</style>