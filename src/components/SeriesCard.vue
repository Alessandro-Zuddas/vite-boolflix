<script>

import { store } from "../store.js"

export default {

    name: "SeriesCard",

    props:{
        showInfo: Object
    },

    data() {
        return {
            store,
        }
    },
    computed: {
        voteParser(){
            /* Da implementare */
        }
    },
    created(){

    }
}
</script>

<template>

    <ul>
        <li><img :src="`https://image.tmdb.org/t/p/w342${showInfo.poster_path}`" :alt="showInfo.name"></li>
        <li class="d-none">{{ showInfo.name}}</li>
        <li class="d-none">{{ showInfo.original_name }}</li>
        <li class="d-none">{{ showInfo.original_language }}</li>
        <li class="d-none">{{ showInfo.vote_average /* Passare a voteParaser per formattare */ }}</li>
    </ul>

</template>

<style scoped>


ul{
    width: calc(100% / 6 - .9375rem);
    margin: .9375rem .1875rem;  
    padding: 0;
    list-style: none;
}

img{
    max-width: 15.625rem;
    max-height: 21.875rem;
}

</style>