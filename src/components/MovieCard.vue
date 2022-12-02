<script>

import { store } from "../store.js"
import CountryFlag from 'vue-country-flag-next'

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
    components: {
        CountryFlag,
    },
    computed: {
        voteParser(){
            return Math.ceil(this.movieInfo.vote_average / 2);  //Da finire
        }
    },
    methods: {
        parseFlag(lang){
            if(lang === "en"){
                return "us";
            }else{
                return lang;
            }
        }
    },
    created(){
        
    }
}
</script>

<template>

    <ul>
        <li class="poster-image">
            <img v-show="movieInfo.poster_path" :src="`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`" :alt="movieInfo.title">
            <img v-show="!movieInfo.poster_path" src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" :alt="movieInfo.title">
        </li>
        <li class="movie-infos">{{ movieInfo.title }}</li>
        <li class="movie-infos">{{ movieInfo.original_title }}</li>
        <li class="movie-infos">
            <CountryFlag :country="parseFlag(movieInfo.original_language)" size='normal'/>
        </li>
        <li class="movie-infos">
            {{ voteParser }}
            <font-awesome-icon v-for="n in voteParser" class="full-star" icon="fa-solid fa-star" />
            <font-awesome-icon v-for="n in (5 - voteParser)" icon="fa-regular fa-star" />
        </li>
        <div class="overview-container">
            <strong>Overview: <br> </strong>
            <small v-show="movieInfo.overview">{{ movieInfo.overview }}</small>
            <small v-show="!movieInfo.overview">Trama non disponibile</small>
        </div>
    </ul>

</template>

<style lang="scss" scoped>

ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% / 5 - .9375rem);
    max-height: 26.5625rem;
    margin: .9375rem .1875rem;
    padding: 0;  
    border: .0313rem solid white;
    color: white;
    list-style: none;
}

.movie-infos{
    display: none;
}

.overview-container{
    display: none;
    width: 100%;
    height: 100%;
    padding: .3125rem .3125rem;
    overflow-y: auto;
}

.full-star{
    color: yellow;
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

    .overview-container{
        display: block;
    }
}   

img{
    display: block;
    width: 22.3125rem;
    max-height: 26.4375rem;
}

</style>