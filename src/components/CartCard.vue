<template>
  <div class="col-md-6 py-3">
    <div class="itemcontainer my-2">
        <img class="img-fluid" :src="product.prodImg" :alt="product.prodName">
        <p class="fw-bold pt-lg-3 pt-sm-2">{{product.prodName}}</p>
        <p class="fw-bold" style="color:greenyellow">R{{product.price}}</p>
        <button @click="removeFromCart" class="button">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
    props:['product'],
    methods:{
        removeFromCart(){
            this.$store.dispatch('removeFromCart', this.product);
        }
    }
}
</script>

<style scoped>
.itemcontainer{
    padding:0.7rem;
    border:2px solid greenyellow;
    color:white;
    overflow: hidden;
    box-shadow: 0 0 5px greenyellow;
}
p{
    padding: 0;
    margin: 0;
}

.img-fluid:hover{
    cursor:pointer;
}

.img-fluid{
    transition: all 0.1s linear;
    width:200px;
    aspect-ratio: 1;
    object-fit: contain;
}
</style>