<template>
  <div class="viewport singleProduct container">
    
    <div v-if="singleProduct" class="row">
        <div class="col-md-5">
            <img :src="singleProduct.prodImg" :alt="singleProduct.prodName">
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-md-5">
            <div class="d-flex">
                <h1>{{singleProduct.prodName}}</h1>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        singleProduct(){
            return this.$store.state.singleProduct;
        }
    },
    mounted(){
        this.$store.dispatch('getSingleProduct', this.$route.params.id);
    }
}
</script>

<style scoped>

.singleProduct{
    padding-top:96px
}

</style>