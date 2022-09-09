<template>
  <div class="col-md-4">
    <div class="itemcontainer">
        <router-link :to="{name:'product', params:{id:product.prodId}}" >
            <img class="img-fluid" :src="product.prodImg" :alt="product.prodName">
        </router-link>
        <p class="pt-lg-3 pt-sm-2">{{product.prodName}}</p>
        <p style="color:greenyellow">R {{product.price}}</p>
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
    border-radius: 5px;
}

@media screen and (min-width:992px) {
    .itemcontainer{
        margin: 2rem;
    }
}

@media screen and (max-width:991px){
    .itemcontainer{
        margin:1rem;
        font-size: 15px;
    }
}

@media screen and (max-width:768px) {
    .itemcontainer{
        margin-left:auto !important;
        margin-right:auto !important;
        width:70%;
    }
}

p{
    padding: 0;
    margin: 0;
    font-size: 1.1rem;
    font-weight: bold;
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