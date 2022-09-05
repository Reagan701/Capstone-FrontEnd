<template>
  <div class="modal fade text-white" :id="`productEdit`+product.prodId" tabindex="-1" :aria-labelledby="`productEditLabel`+product.prodId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Editing - {{product.prodName}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form @submit="editProduct">
                    <input type="number" v-model="product.prodId">
                    <input v-model="product.prodName" type="text">
                    <input v-model="product.prodImg" type="text">
                    <input v-model="product.prodDescription" type="text">
                    <input v-model="product.category" type="text">
                    <input v-model="product.quantity" type="number">
                    <input v-model="product.price" type="number">
                    <button type="submit" class="button">Submit</button>
                </form>
            </div>
            <div class="modal-footer">
                <button class="confirm me-auto" data-bs-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['product'],
    methods:{
        editProduct(e){
            e.preventDefault();
            const newProduct = {
                prodId: this.product.prodId,
                prodName: this.product.prodName,
                prodImg: this.product.prodImg,
                prodDescription: this.product.prodDescription,
                category: this.product.category,
                quantity: this.product.quantity,
                price: this.product.price
            }
            this.$store.dispatch('editProduct', newProduct);
        }
    }
}
</script>

<style scoped>

</style>