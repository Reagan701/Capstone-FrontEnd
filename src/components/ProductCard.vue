<template>
  <div class="col-md-4">
    <div class="itemcontainer">
        <router-link :to="{name:'product', params:{id:product.prodId}}" >
            <img class="img-fluid" :src="product.prodImg" :alt="product.prodName">
        </router-link>
        <p class="pt-lg-3 pt-sm-2">{{product.prodName}}</p>
        <p>R{{product.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['product'],
}
</script>

<style scoped>

.itemcontainer{
    padding:0.7rem;
    margin: 2rem;
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