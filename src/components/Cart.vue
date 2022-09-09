<template>
    <div v-if="currentUser">
        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="cart" aria-labelledby="offcanvasNavbar">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title text-white" id="cartLabel">{{currentUser.firstName}}'s Cart</h5>
                <h6 v-if="cartTotal" class="m-0 fw-bold text-white">R{{cartTotal}}</h6>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div v-if="currentCart">
                    <div class="row mx-auto">
                        <CartCard v-for="item in currentCart" :key="item.prodId" :product="item"/>
                        <div style="border-top:2px solid white" class="pt-3 col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <router-link to="/checkout">
                                        <button data-bs-dismiss="offcanvas" class="ms-auto button w-75">Checkout</button>
                                    </router-link>
                                </div>
                                <div class="col-md-6">
                                    <button data-bs-dismiss="offcanvas" @click="clearCart" class="me-auto button w-75">Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mx-auto" v-else>
                    <h5 class="text-white">Your Cart is Empty</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartCard from '../components/CartCard.vue'
export default {
    props:['currentUser'],
    components: {CartCard},
    computed:{
        currentCart(){
            return this.$store.state.currentCart;
        },
        cartTotal(){
            return this.$store.state.cartTotal;
        }
    },
    methods:{
        clearCart(){
            this.$store.dispatch('clearCart');
        }
    }
}
</script>

<style scoped>
</style>