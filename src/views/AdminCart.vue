<template>
    <div class="viewport adminCart container">
        <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Cart Items</th>
                <th scope="col">
                    EDIT
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cart in carts" :key="cart.cartID">
                <th scope="row">{{cart.cartID}}</th>
                <td>{{cart.cartItems}}</td>
                <td>
                    Delete button
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <div class="viewport adminCart container d-flex justify-content-center align-items-center">
        <Loader/>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue'
export default {
    components:{
        Loader
    },
    mounted(){
        window.scrollTo(0,0);
        this.$store.dispatch('getAllCarts');
        this.$store.commit('setSingleCartInfo',null);
    },
    computed:{
        carts(){
            return this.$store.state.allCarts
        }
    }
}
</script>

<style scoped>
*{
    font-family: 'Roboto', sans-serif;
}

.adminCart{
    padding-top:81px;
}

</style>