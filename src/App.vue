<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from "axios";
import { store } from "./store.js"

export default {

  data(){
    return{
      store,
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  created(){
    // Richiesta di default all'accesso
    this.defaultRequest("movie");
    this.defaultRequest("tv");
  },
  methods: {

    // Richiesta di default all'accesso
    defaultRequest(typology){
      axios.get(`https://api.themoviedb.org/3/search/${typology}`, {
        params: {
          api_key: "f953ac7a9eee11eda0fa8ec1090e96f2",
          query: `A`,
          language: "it-IT"
        }
      }).then(result => {

        if(typology === "movie"){

          this.store.movies = result.data.results;
          console.log(this.store.movies)

        }else if(typology === "tv"){

          this.store.series = result.data.results;
          console.log(this.store.series)
          
        }
      })
    }

  }
}
</script>

<template>
  <div>
    <AppHeader/>
    <AppMain />
  </div>
</template>

<style lang="scss" scoped>

@import "./style/global.scss";

</style>
