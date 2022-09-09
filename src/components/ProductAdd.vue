<template>
    <div class="modal fade text-white" id="addProduct" tabindex="-1" aria-labelledby="addProductModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add a product</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form @submit="addProduct" class="row w-75 mx-auto">
                    <input placeholder="name" class="w-100 my-3" v-model="prodName" type="text">
                    <select class="my-3 h-100" v-model="category">
                        <option selected value="Accessory">Accessory</option>
                        <option value="Console">Console</option>
                        <option value="Computer Part">Computer Part</option>
                        <option value="Computer Accessory">Computer Accessory</option>
                    </select>
                    <input placeholder="image link" class="w-100 my-3" v-model="prodImg" type="text">
                    <input placeholder="description" class="w-100 my-3" v-model="prodDescription" type="text">
                    <input placeholder="enter" class="w-100 my-3" v-model="quantity" type="number">
                    <input placeholder="enter" class="w-100 my-3" v-model="price" type="number">
                    <button type="submit" class="mx-auto button">Submit</button>
                </form>
            </div>
            <div class="modal-footer">
                <button class="confirm mx-auto" data-bs-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            prodName: null,
            prodImg: null,
            prodDescription: null,
            category: 'Accessory',
            quantity: null,
            price: null
        }
    },
    methods:{
        addProduct(e){
            e.preventDefault();
            const product = {
                prodName: this.prodName,
                prodImg: this.prodImg,
                prodDescription: this.prodDescription,
                category: this.category,
                quantity: this.quantity,
                price: this.price
            };
            this.$store.dispatch('addProduct', product);
        }
    }
}
</script>

<style scoped>

.col-md-6{
    margin-top:10px;
    margin-bottom:10px;
}

.col-md-12{
    margin-top:10px;
    margin-bottom:10px;
}

select{
    background: transparent;
    border:2px solid #757575;
    color: white;
}

option{
    background:#0c0c0c;
}
</style>