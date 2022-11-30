<script>

import { store } from "../store.js"

export default {

    name: "MovieCard",

    data() {
        return {
            store,

            props:{
                movieInfo: Object
            }
        }
    },
    created(){
        
    }
}
</script>

<template>

    <ul class="px-4">
        <li>{{ movieInfo.title }}</li>
        <li>{{ movieInfo.original_title }}</li>
        <li>{{ movieInfo.original_language }}</li>
        <li>{{ movieInfo.vote_average }}</li>
    </ul>

</template>

<style scoped>



</style>