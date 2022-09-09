<template>
  <div v-if="products" class="viewport adminProducts container">
    <h1 class="my-5 fw-bold">All Products</h1>
    <table class="mx-auto table table-dark mb-5 pb-5">
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
                    <button data-bs-target="#addProduct" data-bs-toggle="modal" class="button">Add</button>
                    <ProductAddModal/>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.prodId">
                <th scope="row">{{product.prodId}}</th>
                <td>{{product.prodName}}</td>
                <td>{{product.prodImg.slice(0,50)}}</td>
                <td>{{product.prodDescription}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price}}</td>
                <td>
                    <div class="d-flex">
                        <button data-bs-toggle="modal" :data-bs-target="`#productEdit`+product.prodId" class="deleteButton">
                            <span>Edit</span>
                            <i class="bi bi-pencil"></i>
                        </button>

                        <button data-bs-toggle="modal" :data-bs-target="`#productDelete`+product.prodId" class="deleteButton"><span>Delete</span><i class="bi bi-trash-fill"></i></button>
                    </div>
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
    font-weight: bold;
}

th{
    color: greenyellow;
}

.adminProducts{
    padding-top:81px
}

.button{
    width: 80%;
    text-align: center;
    margin-left: auto;
    margin-right:auto;
    font-size: 1rem;
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
    transform: translateX(-120%);
    color: greenyellow;
}
.deleteButton:hover .bi-pencil{
    transform: translateX(-70%);
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