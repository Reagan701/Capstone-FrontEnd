<template>
  <div class="viewport about container">
    <h1>This is an about page</h1>
      <Loader />
      <Loader2 />
  </div>
</template>
  <script>
  import Loader from '../components/Loader.vue'
  import Loader2 from '../components/Loader2.vue'; 
  export default {
    components:{Loader, Loader2},
    mounted(){
      window.scrollTo(0,0);
    }
  }
  </script>

<style scoped>
.about{
  padding-top: 81px;
}


</style>
