<template>
  <div v-if="products" class="viewport products container">
    <h1 class="fw-bold my-4">Our Items</h1>
    <div class="row text-bg-dark">
        <p>Sort By:</p>
    </div>
    <div class="row">
        <div class="col-md-2 text-bg-dark">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accoridan 1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordianExample">
                        <div class="accordion-body">
                            <strong>Text</strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accoridan 1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordianExample">
                        <div class="accordion-body">
                            <strong>Text</strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accoridan 1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordianExample">
                        <div class="accordion-body">
                            <strong>Text</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-10">
            <div class="row">
                <ProductCard v-for="product in products" :key="product.prodId" :product="product"/>
            </div>
        </div>
    </div>
  </div>
  <div class="products viewport container d-flex justify-content-center align-items-center flex-column" v-else>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
export default {
    components:{
        ProductCard
    },
    computed:{
        products(){
            return this.$store.state.products;
        }
    },
    mounted(){
        this.$store.dispatch('getProducts');
    }
}
</script>

<style scoped>
*{
    font-family: 'Roboto',sans-serif;
}
.products{
    padding-top:96px;
}

</style>