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
        <li class="poster-image"><img :src="`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`" :alt="movieInfo.title"></li>
        <li class="movie-infos">{{ movieInfo.title }}</li>
        <li class="movie-infos">{{ movieInfo.original_title }}</li>
        <li class="movie-infos">{{ movieInfo.original_language }}</li>
        <li class="movie-infos">{{ voteParser /*Da finire*/ }}</li>
        <div class="overview-container">
            <strong>Overview: <br> </strong>
            <small>{{ movieInfo.overview }}</small>
        </div>
    </ul>

</template>

<style lang="scss" scoped>

ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% / 6 - .9375rem);
    max-height: 21.875rem;
    margin: .9375rem .1875rem;
    padding: 0;  
    color: white;
    list-style: none;
}

.movie-infos{
    display: none;
}

.overview-container{
    height: 100%;
    padding: .3125rem .3125rem;
    overflow-y: auto;
}

ul:hover{

    background-color: black;

    .poster-image{
        display: none;
    }

    .info-container{
        display: block;
    }

    .movie-infos{
        display: block;
        padding: .625rem .625rem;
    }
}   

img{
    width: 18.75rem;
    max-height: 21.875rem;
}

</style>