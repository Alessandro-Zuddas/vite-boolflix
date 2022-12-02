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
    <!-- Logo Boolflix -->
    <a @click="onLogoClick()" href="#">
      <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix Logo">
    </a>
    <!-- /Logo Boolflix -->

    <!-- Search bar -->
    <form class="d-flex" @submit.prevent="$emit(`onSearch`)">
      <!-- Film or Series filter -->
      <label class="d-flex flex-column mx-4"> Choose category:
        <select class="mx-2 my-2" name="category-select" id="category-select" v-model="store.categorySelected">
          <option value="all">Tutti</option>
          <option value="movie">Film</option>
          <option value="tv">Serie TV</option>
        </select>
      </label>
      <!-- /Film or Series filter -->
      <button class="search-btn" type="submit">Cerca</button>
      <input class="search-input" type="text" v-model="store.searchText" required>
    </form>
    <!-- /Search bar -->
  </div>

</template>

<style scoped>

h1,label{
  color: white;
}

.container-fluid{
  background-color: #0c0c0c;
}

img{
  width: 15.625rem;
  padding: .625rem .625rem;
}

#category-select{
  border-radius: .625rem;
}

.search-btn{
  align-self: center;
  border-radius: .625rem;
  padding: .1875rem .5rem;
}

.search-input{
  align-self: center;
  border-radius: .625rem;
  padding: .1875rem .5rem;
}

</style>


