<template>
  <div v-if="products" class="viewport adminProducts container">
    <h1 class="my-5 fw-bold">All Products</h1>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Image</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">
                    <p>ADD</p><button data-bs-target="#addProduct" data-bs-toggle="modal" class="button">Button</button>
                    <ProductAddModal/>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.prodId">
                <th scope="row">{{product.prodId}}</th>
                <td>{{product.prodName}}</td>
                <td>{{product.prodImg}}</td>
                <td>{{product.prodDescription}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price}}</td>
                <td>
                    <button data-bs-toggle="modal" :data-bs-target="`#productEdit`+product.prodId" class="adminConfirm">Edit</button>

                    <button data-bs-toggle="modal" :data-bs-target="`#productDelete`+product.prodId" class="adminConfirm">Delete</button>
                </td>
                <ProductDeleteModal :product="product"/>
                <ProductEditModal :product="product"/>
            </tr>
        </tbody>
    </table>
  </div>
  <div v-else class="viewport adminProducts container d-flex justify-content-center align-items-center">
    <Loader/>
  </div>
</template>

<script>
import ProductDeleteModal from '../components/ProductDelete.vue'
import ProductEditModal from '../components/ProductEdit.vue'
import ProductAddModal from '../components/ProductAdd.vue'
import Loader from '../components/Loader.vue'
export default {
    components: {Loader,ProductDeleteModal,ProductEditModal, ProductAddModal},
    mounted(){
        window.scrollTo(0,0);
        this.$store.dispatch('getProducts');
    },
    computed:{
        products(){
            return this.$store.state.products;
        }
    }
}
</script>

<style scoped>
*{
    font-family: 'Roboto', sans-serif;
}
.adminProducts{
    padding-top:81px
}
</style>