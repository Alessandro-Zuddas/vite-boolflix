<script>

import { store } from "../store.js"
import CountryFlag from 'vue-country-flag-next'

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
    components: {
        CountryFlag,
    },
    computed: {
        voteParser(){
            return Math.ceil(this.showInfo.vote_average / 2);  //Da finire
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
            <img v-show="showInfo.poster_path" :src="`https://image.tmdb.org/t/p/w342${showInfo.poster_path}`" :alt="showInfo.name">
            <img v-show="!showInfo.poster_path" src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" :alt="showInfo.name">
        </li>
        <li class="show-infos">{{ showInfo.name}}</li>
        <li class="show-infos">{{ showInfo.original_name }}</li>
        <li class="show-infos">
            <CountryFlag :country="parseFlag(showInfo.original_language)" size='normal'/>
        </li>
        <li class="show-infos">
            {{ voteParser }}
            <font-awesome-icon v-for="n in voteParser" class="full-star" icon="fa-solid fa-star" />
            <font-awesome-icon v-for="n in (5 - voteParser)" icon="fa-regular fa-star" />
        </li>
        <strong class="overview-title">Overview: <br> </strong>
        <div class="overview-container">
            <small v-show="showInfo.overview">{{ showInfo.overview }}</small>
            <small v-show="!showInfo.overview">Trama non disponibile</small>
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

.show-infos{
    display: none;
}

.overview-container{
    display: none;
    width: 100%;
    height: 100%;
    padding: .3125rem .3125rem;
    overflow-y: auto;
}

.overview-title{
    display: none;
    padding: .625rem .625rem;
}

.full-star{
    color: yellow;
}

ul:hover{

    background-color: black;

    .poster-image{
        display: none;
    }

    .show-infos{
        padding: .625rem .625rem;
        display: block;
    }

    .overview-container{
        display: block;
    }

    .overview-title{
        display: block;
    }
} 

img{
    display: block;
    width: 22.3125rem;
    max-height: 26.4375rem;
}

</style>