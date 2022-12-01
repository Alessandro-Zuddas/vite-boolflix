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
            return Math.ceil(this.showInfo.vote_average / 2);  //Da finire
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
        <li class="show-infos">{{ showInfo.original_language }}</li>
        <li class="show-infos">{{voteParser /*Da finire*/ }}</li>
        <div class="overview-container">
            <strong>Overview: <br> </strong>
            <small>{{ showInfo.overview }}</small>
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

.show-infos{
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

    .show-infos{
        padding: .625rem .625rem;
        display: block;
    }
} 

img{
    max-width: 18.75rem;
    max-height: 21.875rem;
}

</style>