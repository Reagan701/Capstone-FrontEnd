<template>
  <div v-if="users" class="viewport adminUsers container">
    <h1 class="my-5 fw-bold">All Users</h1>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Role</th>
                <th scope="col">Cart</th>
                <th scope="col">DELETE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.userID">
                <th scope="row">{{user.userID}}</th>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.userPassword.slice(0,10)}}</td>
                <td>{{user.userEmail}}</td>
                <td>{{user.phoneNumber}}</td>
                <td>{{user.userRole}}</td>
                <td>
                    <router-link :to="{name:'singleCart', params:{id:user.userID}}">
                        <button class="adminConfirm">Cart</button>
                    </router-link>
                </td>
                <td><button data-bs-toggle="modal" :data-bs-target="`#userDelete`+user.userID" class="adminConfirm">Delete</button></td>
                <UserDeleteModal :user="user"/>
            </tr>
        </tbody>
    </table>
  </div>
  <div v-else class="viewport adminUsers container d-flex justify-content-center align-items-center flex-column">
    <Loader/>
  </div>
</template>

<script>
import UserDeleteModal from '../components/UserDeleteModal.vue'
import Loader from '../components/Loader.vue'
export default {
    components:{UserDeleteModal,Loader},
    mounted(){
        window.scrollTo(0,0);
        this.$store.dispatch('getAllUsers')
        this.$store.commit('setSingleCartInfo', null)
    },
    computed:{
        users(){
            return this.$store.state.allUsers;
        }
    }
}
</script>

<style scoped>
.adminUsers{
    padding-top:81px;
    font-family: 'Roboto',sans-serif;
}

@media screen and (max-width:992px){
    tr{
        display: flex;
        flex-direction: column;
    }
}

</style>