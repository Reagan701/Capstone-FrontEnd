<template>
    <div v-if="singleCart && !ordered" class="viewport checkout container">
        <h1 class="pt-5 fw-bold">Checkout</h1>
        <div id="border" class="my-5 d-flex justify-content-start align-items-center">
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <CheckoutCard v-for="item in JSON.parse(singleCart.cartItems)" :key="item.cartID" :product="item"/>
                </div>
            </div>
            <div style="border-left:1px solid greenyellow; padding-left:40px" class="col-md-6">
                <div class="row mt-1 mb-4">
                    <div class="col-md-12">
                        <h1 class="fw-bold" style="color:greenyellow">Cart Summary</h1>
                        <p class="fw-bold" style="color:greenyellow">Total: R{{cartTotal}}</p>
                    </div>
                </div>
                <form @submit="updateBilling">
                    <div class="col-md-6 w-100 d-flex justify-content-center align-items-center flex-column">
                        <h2 style="color:greenyellow;" class="fw-bold">Billing Info</h2>
                        <label class="w-100">Country</label>
                        <input class="w-100 mb-3" placeholder="country" type="text" v-model="country">
                        <label class="w-100">City</label>
                        <input class="w-100 my-3" placeholder="city" type="text" v-model="city">
                        <label class="w-100">Billing Address</label>
                        <input class="w-100 my-3" placeholder="billing address" type="text" v-model="billAddress">
                        <label class="w-100">Postal Code</label>
                        <input class="w-100 my-3" placeholder="postal code" type="number" v-model="postalCode">
                        <button type="submit" class="mt-3 button">Order</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div v-else-if="ordered" class="viewport checkout container d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-column gap-5">
            <h1 class="fw-bold">Thank you for purchasing from Digiverse.</h1>
                <router-link to="/contact">
                    <button class="button">Contact us about anything</button>
                </router-link>
        </div>
    </div>
    <div v-else class="viewport checkout container d-flex justify-content-center align-items-center flex-column">
        <Loader/>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue'
import CheckoutCard from '../components/RelatedCard.vue'
export default {
    components:{CheckoutCard, Loader},
    data(){
        return{
            billingID: null,
            billAddress: null,
            city:null,
            country:null,
            postalCode: null,
            ordered: false
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
                this.ordered = false;
            }
        }, 500);
    },
    computed:{
        singleCart(){
            return this.$store.state.singleCart;
        },
        singleBilling(){
            return this.$store.state.singleBilling;
        },
        cartTotal(){
            return this.$store.state.cartTotal;
        }
    },
    methods:{
        updateBilling(e){
            e.preventDefault();
            const newBill = {
                billingID: this.billingID,
                country: this.country,
                billAddress: this.billAddress,
                city: this.city,
                postalCode: this.postalCode
            }
            this.ordered = true;
            this.$store.dispatch('updateBilling',[newBill,false]);
        }
    }
}
</script>

<style scoped>

*{
    letter-spacing: 1px;
    word-spacing: 1px;
}

.button{
    width: 300px;
}

.checkout{
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

label{
    text-align: left;
    padding-left:8px;
    color:greenyellow;
    font-weight: 900;
}

</style>