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
    }
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
        <a class="header-link" href="#">Home</a>
        <a class="header-link" href="#">Film</a>
        <a href="#">Serie TV</a>
      </nav>
      <!-- /Navigazione -->
    </div>

    <!-- Search bar -->
    <form class="d-flex" @submit.prevent="$emit(`onSearch`)">
      <!-- Film or Series filter -->
      <label class="d-flex flex-column mx-4">Seleziona tipologia:
        <select class="mx-2 my-2" name="category-select" id="category-select" v-model="store.categorySelected">
          <option value="all">Tutti</option>
          <option value="movie">Film</option>
          <option value="tv">Serie TV</option>
        </select>
      </label>
      <!-- /Film or Series filter -->
      <button class="search-btn" type="submit">Cerca</button>
      <input class="search-input" type="text" v-model="store.searchText" placeholder="Cerca Film e Serie TV" 
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
  padding-right: .9375rem;
}

#category-select{
  border-radius: .625rem;
}

.search-btn{
  align-self: center;
  border-radius: .625rem;
  padding: .1875rem .5rem;
  color: white;
  background-color: #ec0206;
}

.search-input{
  align-self: center;
  border-radius: .625rem;
  padding: .1875rem .5rem;
}

</style>


