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
        <li class="poster-image"><img :src="`https://image.tmdb.org/t/p/w342${showInfo.poster_path}`" :alt="showInfo.name"></li>
        <li class="show-infos">{{ showInfo.name}}</li>
        <li class="show-infos">{{ showInfo.original_name }}</li>
        <li class="show-infos">
            <CountryFlag :country="parseFlag(showInfo.original_language)" size='normal'/>
        </li>
        <li class="show-infos">
            {{voteParser /*Da finire*/ }}
            <font-awesome-icon v-for="n in voteParser" class="full-star" icon="fa-solid fa-star" />
            <font-awesome-icon v-for="n in (5 - voteParser)" icon="fa-regular fa-star" />
        </li>
        <div class="overview-container">
            <strong>Overview: <br> </strong>
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
    max-height: 21.875rem;
    margin: .9375rem .1875rem;  
    padding: 0; 
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
} 

img{
    width: 18.75rem;
    max-height: 21.875rem;
}

</style>