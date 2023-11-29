<template>
  <MainHedaer/>
  <MainContent/>
</template>

<script>
import MainContent from './components/content/MainContent.vue';
import MainHedaer from './components/header/MainHedaer.vue';

export default {
  name: 'App',
  components: {
    MainHedaer,
    MainContent
}
}
</script>

<style>
#app {
}

body{
  margin: 0;
}
</style>
