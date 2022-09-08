<template>
    <div v-if="currentUser" class="mt-5 viewport profile container">
        <div class="w-100 h-100" v-if="singleBilling">
            <div class="row">
                <div class="ms-auto col-md-9">
                    <h1 class="fw-bold mb-5 mt-4">Profile</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 my-auto">
                    <i class="bi bi-person-circle"></i>
                    <button @click="logOut" class="mx-auto mb-3 button">Logout</button>
                    <button @click="deleteAccount" class="mx-auto mt-3 button">Delete Account</button>
                </div>
                <div id="formColumn" class="col-md-9 p-5">
                    <div class="row">
                        <form @submit="updateUser" class="col-md-6">
                            <div class="w-100 col-md-6 d-flex justify-content-center align-items-center flex-column">
                                <h2 id="userHeading">UserInfo</h2>
                                <input class="w-100 mb-3" placeholder="first name" type="text" v-model="firstName">
                                <input class="w-100 my-3" placeholder="last name" type="text" v-model="lastName">
                                <input class="w-100 my-3" placeholder="phone number" type="text" v-model="phoneNumber">
                                <input class="w-100 my-3" placeholder="email address" type="text" v-model="userEmail">
                                <input type="text" class="w-100 my-3" placeholder="password" v-model="userPassword">
                                <button type="submit" class="mt-3 button">Save Changes</button>
                            </div>
                        </form>
                        <form class="col-md-6" @submit="updateBilling">
                            <div class="h-100 d-flex justify-content-center align-items-center flex-column">
                                <h2 id="billingHeading">BillingInfo</h2>
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
        </div>
        <div v-else class="viewport d-flex justify-content-center align-items-center">
            <div style="margin-bottom:81px">
                <Loader/>
            </div>
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
            userPassword: this.$store.state.userPassword,
            billAddress:null,
            city:null,
            country:null,
            postalCode:null
        }
    },
    async mounted(){
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
            this.$store.dispatch('updateBilling',newBill);
        },
        updateUser(e){
            e.preventDefault();
            const newUser = {
                firstName:this.firstName,
                lastName:this.lastName,
                phoneNumber:this.phoneNumber,
                userPassword: this.userPassword,
                userEmail:this.userEmail,
            }
            this.$store.dispatch('updateUser',newUser);
        },
        logOut(){
            this.$store.commit('resetState');
        },
        deleteAccount(){
            this.$store.dispatch('deleteAccount');
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

@media screen and (min-width:768px) {
    #formColumn{
        border: 2px solid #757575;
    }
    i{
        color: white;
        font-size: 13rem;
    }
}

@media screen and (max-width:767px) {
    #formColumn{
        border-top: 1px solid greenyellow;
        margin-top:3rem;
    }
    #billingHeading{
        margin-top:3rem;
        margin-bottom:2rem;
    }
    #userHeading{
        margin-bottom:2rem;
    }
    i{
        color: white;
        font-size: 10rem;
    }
}


</style>