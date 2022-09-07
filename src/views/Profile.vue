<template>
    <div v-if="currentUser" class="viewport profile container">
        <div v-if="singleBilling">
            <div class="row">
                <div class="ms-auto col-md-9">
                    <h1 class="fw-bold my-5">Profile</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 my-auto">
                    <i class="bi bi-person-circle"></i>
                </div>
                <div id="formColumn" class="col-md-9 p-5">
                    <form @submit="editUser" class="row">
                        <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
                            <h2>UserInfo</h2>
                            <input class="w-100 mb-3" placeholder="first name" type="text" v-model="firstName">
                            <input class="w-100 my-3" placeholder="last name" type="text" v-model="lastName">
                            <input class="w-100 my-3" placeholder="phone number" type="text" v-model="phoneNumber">
                            <input class="w-100 my-3" placeholder="email address" type="text" v-model="userEmail">
                            <button class="mt-3 button">Save Changes</button>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
                            <h2>BillingInfo</h2>
                            <input class="w-100 mb-3" placeholder="country" type="text" v-model="country">
                            <input class="w-100 my-3" placeholder="city" type="text" v-model="city">
                            <input class="w-100 my-3" placeholder="billing address" type="text" v-model="billAddress">
                            <input class="w-100 my-3" placeholder="postal code" type="text" v-model="postalCode">
                            <button class="mt-3 button">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div v-else class="d-flex justify-content-center align-items-center">
            <Loader/>
        </div>
    </div>
    <div v-else class="viewport profile container d-flex justify-content-center align-items-center flex-column gap-5">
        <h1 class="fw-bold">There is no user logged in</h1>
        <router-link to="/login">
            <button class="button">Return to Login</button>
        </router-link>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue';
export default {
    components:{Loader},
    data(){
        return{
            id:null,
            firstName:null,
            lastName:null,
            phoneNumber:null,
            userEmail:null,
            billAddress:null,
            city:null,
            country:null,
            postalCode:null
        }
    },
    async mounted(){
        this.$store.dispatch('getSingleBilling');
        if(this.currentUser){
            this.id = this.$store.state.currentUser.userID
            this.firstName = this.$store.state.currentUser.firstName
            this.lastName = this.$store.state.currentUser.lastName
            this.phoneNumber = this.$store.state.currentUser.phoneNumber
            this.userEmail = this.$store.state.currentUser.userEmail
        }
        if(this.singleBilling){
            this.billAddress = this.$store.state.singleBilling.billAddress;
            this.city = this.$store.state.singleBilling.city;
            this.country = this.$store.state.singleBilling.country;
            this.postalCode = this.$store.state.singleBilling.postalCode;
        }
    },
    computed:{
        currentUser(){
            return this.$store.state.currentUser;
        },
        singleBilling(){
            return this.$store.state.singleBilling;
        }
    }
}
</script>

<style scoped>
.profile{
    padding-top:81px
}

a{
    text-decoration: none;
}

h2{
    font-weight: bold;
    color: greenyellow;
}

.button{
    width: 220px;
}

#formColumn{
    border: 1px solid white;
}

i{
    color: white;
    font-size: 13rem;
}

</style>