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

  }
}
</script>

<template>

  <div class="container-fluid py-2 d-flex justify-content-between align-items-center">
    <!-- Logo Boolflix -->
    <h1>Logo</h1>
    <!-- /Logo Boolflix -->

    <!-- Search bar -->
    <form class="d-flex" @submit.prevent="$emit(`onSearch`)">
      <!-- Film or Series filter -->
      <label> Choose category:
        <select class="mx-2" name="category-select" id="category-select" v-model="store.categorySelected">
          <option value="all">Tutti</option>
          <option value="movie">Film</option>
          <option value="tv">Serie TV</option>
        </select>
      </label>
      <!-- /Film or Series filter -->
      <button type="submit">Cerca</button>
      <input type="text" v-model="store.searchText" required>
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

</style>


