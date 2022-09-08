<template>
    <div v-if="singleCart" class="viewport singleCart container">
        <h1 class="pt-5 fw-bold">Checkout</h1>
        <div id="border" class="my-5 d-flex justify-content-start align-items-center">
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <ProductCard v-for="item in JSON.parse(singleCart.cartItems)" :key="item.cartID" :product="item"/>
                </div>
            </div>
            <div class="col-md-6">
                <form @submit="updateBilling">
                    <div class="col-md-6 w-100 d-flex justify-content-center align-items-center flex-column">
                        <h2>BillingInfo</h2>
                        <input class="w-100 mb-3" placeholder="country" type="text" v-model="country">
                        <input class="w-100 my-3" placeholder="city" type="text" v-model="city">
                        <input class="w-100 my-3" placeholder="billing address" type="text" v-model="billAddress">
                        <input class="w-100 my-3" placeholder="postal code" type="text" v-model="postalCode">
                        <button type="submit" class="mt-3 button">Save Changes</button>
                    </div>
                </form>
            </div>
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
    data(){
        return{
            billingID: null,
            billAddress: null,
            city:null,
            country:null,
            postalCode: null
        }
    },
    async mounted(){
        this.$store.dispatch('getSingleBilling');
        setTimeout(() => {
            this.$store.dispatch('getSingleCartInfo', this.$store.state.currentUser.userID)
            if(this.singleBilling){
                this.billingID = this.$store.state.singleBilling.billingID;
                this.billAddress = this.$store.state.singleBilling.billAddress;
                this.city = this.$store.state.singleBilling.city;
                this.country = this.$store.state.singleBilling.country;
                this.postalCode = this.$store.state.singleBilling.postalCode;
            }
        }, 500);
    },
    computed:{
        singleCart(){
            return this.$store.state.singleCart;
        },
        singleBilling(){
            return this.$store.state.singleBilling;
        }
    },
    methods:{
        updateBilling(){
            const newBill = {
                billingID: this.billingID,
                country: this.country,
                billAddress: this.billAddress,
                city: this.city,
                postalCode: this.postalCode
            }
            this.$store.dispatch('updateBilling',newBill);
        }
    }
}
</script>

<style scoped>

.singleCart{
    padding-top:81px;
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