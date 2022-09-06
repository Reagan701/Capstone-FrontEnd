<template>
    <div v-if="singleCart" class="viewport singleCart container">
        <div id="border" class="d-flex justify-content-start align-items-center gap-5">
            <router-link to="/admin/users"><i class="bi bi-arrow-left-square"></i></router-link>
            <h3 class="mx-auto fw-bold text-white">{{singleCart.firstName}}'s Cart</h3>
        </div>
        <div class="row">
            <ProductCard v-for="item in JSON.parse(singleCart.cartItems)" :key="item.cartID" :product="item"/>
        </div>
    </div>
    <div v-else class="viewport singleCart container d-flex justify-content-center align-items-center flex-column">
        <Loader/>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue'
import ProductCard from '../components/ProductCard.vue'
export default {
    components:{ProductCard, Loader},
    mounted(){
        setTimeout(() => {
            this.$store.dispatch('getSingleCartInfo', this.$route.params.id)
        }, 500);
    },
    computed:{
        singleCart(){
            return this.$store.state.singleCart;
        }
    }
}
</script>

<style scoped>

.singleCart{
    padding-top:96px
}

#border:after{
    content: '';
    border:1px solid white;
    position: absolute;
    width: 80%;
    top:150%;
    left: 10%;
}
#border{
    position: relative;
    margin-bottom: 30px;
}
i{
    font-size: 2rem;
    color: greenyellow;
}

i:hover{
    color:#76b900
}
</style>