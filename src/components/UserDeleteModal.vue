<template>
  <div class="modal fade text-white" :id="`userDelete`+user.userID" tabindex="-1" :aria-labelledby="`userDeleteLabel`+user.userID" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Deleting - {{user.firstName}} {{user.lastName}}</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h4>Are you sure you would like to delete</h4>
                <h5>{{user.firstName}} {{user.lastName}}</h5>
            </div>
            <div class="modal-footer">
                <button class="confirm me-auto" data-bs-dismiss="modal">Cancel</button>
                <button class="deleteButton" data-bs-dismiss="modal" @click="deleteUser">
                    <span>Confirm Delete</span>
                    <i class="bi bi-trash-fill"></i>
                </button>
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
    transform: translateX(-300%);
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