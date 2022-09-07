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
                        <button class="deleteButton">
                            <span>Cart</span>
                            <i class="bi bi-cart"></i>
                        </button>
                    </router-link>
                </td>
                <td>
                    <button data-bs-toggle="modal" :data-bs-target="`#userDelete`+user.userID" class="deleteButton">
                        <span>Delete</span>
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
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

.deleteButton{
    padding-right:1rem;
    padding-left:0.75rem;
    padding-top: 0.5rem ;
    padding-bottom:0.5rem ;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
}
.deleteButton:hover .bi-trash-fill{
    transform: translateX(-130%);
    color: greenyellow;
}
.deleteButton:hover .bi-cart{
    transform: translateX(-90%);
    color: greenyellow;
}
.deleteButton:hover span{
    color: transparent;
}
.deleteButton:hover{
    border-color: #76b900;
    box-shadow: 0 0 2px #76b900;
}

.deleteButton span{
    font-weight: bold;
    transition: all 0.15s linear;
}

.bi{
    transition: all 0.15s linear;
    transform: translateX(10px);
}

</style>