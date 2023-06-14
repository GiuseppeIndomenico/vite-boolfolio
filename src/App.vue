<template>
  <div>
    <HeaderApp></HeaderApp>
    <router-view></router-view>
  </div>
</template>


<script>
import { RouterView } from 'vue-router';
import HeaderApp from './components/HeaderApp.vue';
export default {
  name: 'App',
  components: {
    HeaderApp,
  }
}
</script>

<style lang="scss" scoped></style>