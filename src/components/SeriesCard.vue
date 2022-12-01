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
    created(){

    }
}
</script>

<template>

    <ul class="px-4">
        <li>{{ showInfo.name}}</li>
        <li>{{ showInfo.original_name }}</li>
        <li>{{ showInfo.original_language }}</li>
        <li>{{ showInfo.vote_average }}</li>
    </ul>

</template>

<style scoped>


ul{
    width: calc(100% / 6 - 1.875rem);
    margin: .3125rem .3125rem;
    border: .0625rem solid black;
}

</style>