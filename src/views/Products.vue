<template>
  <div v-if="products" class="viewport products container">
    <h1 class="fw-bold my-4">Our Items</h1>
    <div class="row text-bg-dark">
        <div class="col-md-6">
            <p>Sort By:</p>
        </div>
        <div class="col-md-6">
            <input type="text" placeholder="search for anything" v-model="search">
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 col-lg-2 text-bg-dark">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-9 col-lg-10">
            <div class="row">
                <ProductCard v-for="product in products" :key="product.prodId" :product="product"/>
            </div>
        </div>
    </div>
  </div>
  <div class="products viewport container d-flex justify-content-center align-items-center flex-column" v-else>
    <Loader/>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import Loader from '../components/Loader.vue';
export default {
    components:{
        ProductCard,Loader
    },
    data(){
        return{
            search: ''
        }
    },
    computed:{
        products(){
            return this.$store.state.products?.filter((x)=> {
                let isMatch = true;

                if(!x.prodName?.toLowerCase().includes(this.search.toLowerCase())){
                    isMatch = false;
                }

                return isMatch;
            });
        }
    },
    mounted(){
        this.$store.dispatch('getProducts');
        this.$store.commit('setSingleProduct',null)
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