<template>
  <div class="modal fade text-black" :id="`productDelete`+product.prodId" tabindex="-1" :aria-labelledby="`productDeleteLabel`+product.prodId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Deleting - {{product.prodName}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h4>Are you sure you would like to delete</h4>
                <h5>{{product.prodName}}</h5>
            </div>
            <div class="modal-footer">
                <button class="confirm me-auto" data-bs-dismiss="modal">Cancel</button>
                <button class="confirm" data-bs-dismiss="modal" @click="deleteProduct">Confirm Delete</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['product'],
    methods:{
        deleteProduct(){
            this.$store.dispatch('deleteProduct', this.product.prodId);
        }
    }
}
</script>

<style scoped>
.confirm{
    width: 180px !important;
}
</style>