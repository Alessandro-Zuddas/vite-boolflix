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
    this.searchRequest("movie", "A");
    this.searchRequest("tv", "A");
  },
  methods: {

    // Richiesta di default all'accesso
    searchRequest(typology, searchedText){
      axios.get(`https://api.themoviedb.org/3/search/${typology}`, {
        params: {
          api_key: "f953ac7a9eee11eda0fa8ec1090e96f2",
          query: searchedText,
          language: "it-IT"
        }
      }).then(result => {

        if(typology === "movie"){

          this.store.movies = result.data.results;

        }else if(typology === "tv"){

          this.store.series = result.data.results;
          
        }
      })
    },

    // Richiesta all input dell'utente
    onSearch(){
      if(store.categorySelected === "all"){
        // Richiesta per Film && Serie TV 
        this.searchRequest("movie", `${this.store.searchText}`);
        this.searchRequest("tv", `${this.store.searchText}`);
      }else{
        // Richiesta per Film || Serie TV
        this.searchRequest(`${this.store.categorySelected}`, `${this.store.searchText}`);
      }
    }
  }
}
</script>

<template>
  <div>
    <AppHeader @onSearch="onSearch()"/>
    <AppMain />
  </div>
</template>

<style lang="scss" scoped>

@import "./style/global.scss";

</style>
