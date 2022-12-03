<script>

import { store } from "../store.js"

export default {

  name: "AppHeader",

  data() {
    return {
      store,
    }
  },
  methods: {
    onLogoClick(){
      window.location.reload();
    },
    onHomeClick(){
      
      this.store.homeActive = true;
      this.store.moviesActive = false;
      this.store.seriesActive = false;

      this.store.navigationLinks[1].classList.remove("active");
      this.store.navigationLinks[2].classList.remove("active");
      this.store.navigationLinks[0].classList.add("active");

    },
    onMoviesClick(){
      
      this.store.homeActive = false;
      this.store.seriesActive = false;
      this.store.moviesActive = true;

      this.store.navigationLinks[0].classList.remove("active");
      this.store.navigationLinks[2].classList.remove("active");
      this.store.navigationLinks[1].classList.add("active");

    },
    onSeriesClick(){
      
      this.store.homeActive = false;
      this.store.moviesActive = false;
      this.store.seriesActive = true;

      this.store.navigationLinks[0].classList.remove("active");
      this.store.navigationLinks[1].classList.remove("active");
      this.store.navigationLinks[2].classList.add("active");

    },
  },
  mounted(){
    
    this.store.navigationLinks.push(document.getElementById("home-link"));
    this.store.navigationLinks.push(document.getElementById("movies-link"));
    this.store.navigationLinks.push(document.getElementById("series-link"));
    console.log(this.store.navigationLinks)

  }
}
</script>

<template>

  <div class="container-fluid py-2 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <!-- Logo Boolflix -->
      <a @click="onLogoClick()" href="#">
        <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix Logo">
      </a>
      <!-- /Logo Boolflix -->
      <!-- Navigazione -->
      <nav class="mx-4">
        <a id="home-link" class="header-link active" href="#" @click="onHomeClick">
          Home
        </a>
        <a id="movies-link" class="header-link" href="#" @click="onMoviesClick">
          Film
        </a>
        <a id="series-link" href="#" @click="onSeriesClick">
          Serie TV
        </a>
      </nav>
      <!-- /Navigazione -->
    </div>

    <!-- Search bar -->
    <form class="d-flex" @submit.prevent="$emit(`onSearch`)">
      <!-- Film or Series filter -->
      <label v-if="store.homeActive" class="d-flex flex-column mx-4">Seleziona tipologia:
        <select class="mx-2 my-2" name="category-select" id="category-select" v-model="store.categorySelected">
          <option value="all">Tutti</option>
          <option value="movie">Film</option>
          <option value="tv">Serie TV</option>
        </select>
      </label>
      <!-- /Film or Series filter -->
      <button class="search-btn" type="submit">Cerca</button>
      <input v-if="store.homeActive" class="search-input" type="text" v-model="store.searchText" placeholder="Cerca Film e Serie TV" 
      required>
      <input v-if="store.moviesActive" class="search-input" type="text" v-model="store.searchText" placeholder="Cerca i migliori Film" 
      required>
      <input v-if="store.seriesActive" class="search-input" type="text" v-model="store.searchText" placeholder="Cerca le migliori Serie" 
      required>
    </form>
    <!-- /Search bar -->
  </div>

</template>

<style scoped>

h1,label{
  color: white;
}

.container-fluid{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #0c0c0c;
  opacity: 0.9;
}

img{
  width: 15.625rem;
  padding: .625rem .625rem;
}

a{
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
}

a:hover{
  color: #ec0206;
}

.header-link{
  margin-right: .9375rem;
  padding-bottom: .3125rem;
}

.active{
  color: #ec0206;
  border-bottom: 3px solid #ec0206;
}

#category-select{
  border-radius: .625rem;
}


.search-btn{
  align-self: center;
  border: none;
  padding: .1875rem .5rem;
  color: white;
  background-color: #ec0206;
}

.search-input{
  align-self: center;
  border: none;
  padding: .1875rem .5rem;
}

</style>


