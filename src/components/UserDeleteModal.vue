<template>
  <div class="modal fade text-black" :id="`userDelete`+user.userID" tabindex="-1" :aria-labelledby="`userDeleteLabel`+user.userID" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Deleting - {{user.firstName}} {{user.lastName}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h4>Are you sure you would like to delete</h4>
                <h5>{{user.firstName}} {{user.lastName}}</h5>
            </div>
            <div class="modal-footer">
                <button class="confirm me-auto" data-bs-dismiss="modal">Cancel</button>
                <button class="confirm" data-bs-dismiss="modal" @click="deleteUser">Confirm Delete</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['user'],
    methods:{
        deleteUser(){
            this.$store.dispatch('deleteUser', this.user.userID);
        }
    }
}
</script>

<style scoped>
.confirm{
    width: 180px !important;
}
</style>