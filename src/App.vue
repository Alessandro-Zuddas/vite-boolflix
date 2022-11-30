<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain
  },
  created(){
    
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
