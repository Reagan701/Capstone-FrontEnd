<template>
    <div v-if="billing" class="viewport adminBilling container">
        <h1>Billing Info</h1>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Country</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">User ID</th>
                    <th scope="col">DELETE</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bill in billing" :key="bill.billingID">
                    <th scope="row">{{bill.billingID}}</th>
                    <td>{{bill.country}}</td>
                    <td>{{bill.billAddress}}</td>
                    <td>{{bill.city}}</td>
                    <td>{{bill.postalCode}}</td>
                    <td>{{bill.userID}}</td>
                    <td>Delete</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else class="viewport adminBilling container d-flex justify-content-center align-items-center flex-column">
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
        setTimeout(() =>{
            window.scrollTo(0,0);
            this.$store.dispatch('getBillingInfo');
        },500)
    },
    computed: {
        billing(){
            return this.$store.state.billing
        }
    }
}
</script>

<style scoped>

*{
    font-family: 'Roboto', sans-serif;
}

.adminBilling{
    padding-top:84px;
}

</style>