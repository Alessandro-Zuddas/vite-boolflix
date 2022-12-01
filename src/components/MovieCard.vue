<script>

import { store } from "../store.js"

export default {

    name: "MovieCard",

    props:{
        movieInfo: Object
    },

    data() {
        return {
            store,
        }
    },
    computed: {
        voteParser(){
            return Math.ceil(this.movieInfo.vote_average / 2);  //Da finire
        }
    },
    created(){

    }
}
</script>

<template>

    <ul>
        <li><img :src="`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`" :alt="movieInfo.title"></li>
        <li class="d-none">{{ movieInfo.title }}</li>
        <li class="d-none">{{ movieInfo.original_title }}</li>
        <li class="d-none">{{ movieInfo.original_language }}</li>
        <li class="d-none">{{ movieInfo.vote_average /*Da finire*/ }}</li>
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