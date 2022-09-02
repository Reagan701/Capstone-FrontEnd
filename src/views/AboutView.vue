<template>
  <div class="viewport about container">
    <h1>This is an about page</h1>
      <Loader />
  </div>
</template>
  <script>
  import Loader from '../components/Loader.vue'
  export default {
    components:{Loader},
    mounted(){
      window.scrollTo(0,0);
    }
  }
  </script>

<style scoped>
.about{
  padding-top: 84px;
}


</style>
