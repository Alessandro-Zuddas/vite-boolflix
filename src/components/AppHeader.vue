<script>

import { store } from "../store.js"

export default {

  name: "AppHeader",

  data() {
    return {
      store,
    }
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
      <button type="submit">Cerca</button>
      <input type="text" v-model="store.searchText" required>
    </form>
    <!-- /Search bar -->
  </div>

</template>

<style scoped>

h1{
  color: white;
}

.container-fluid{
  background-color: black;
}

</style>


