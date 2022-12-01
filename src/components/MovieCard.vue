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
    created(){
        
    }
}
</script>

<template>

    <ul>
        <li>{{ movieInfo.title }}</li>
        <li>{{ movieInfo.original_title }}</li>
        <li>{{ movieInfo.original_language }}</li>
        <li>{{ movieInfo.vote_average }}</li>
    </ul>

</template>

<style scoped>

ul{
    width: calc(100% / 6 - 1.875rem);
    margin: .3125rem .3125rem;
    border: .0625rem solid black;
}

</style>