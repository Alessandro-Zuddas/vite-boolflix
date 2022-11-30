<script>

import { store } from "../store.js"

export default {

    name: "SeriesCard",

    data() {
        return {
            store,
            props:{
                info: Object
            }
        }
    },
    created(){

    }
}
</script>

<template>

    <ul class="px-4">
        <li>{{ info.name}}</li>
        <li>{{ info.original_name }}</li>
        <li>{{ info.original_language }}</li>
        <li>{{ info.vote_average }}</li>
    </ul>

</template>

<style scoped>



</style>