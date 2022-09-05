<template>
  <div v-if="products" class="viewport products container">
    <h1 class="fw-bold my-4">Our Items</h1>
    <div id="sortRow" class="row text-bg-dark p-3">
        <div class="ms-auto col-md-3">
            <select @change="checkColors" v-model="price" class="customSelect">
                <option class="selectOption" selected value="By Price">By Price</option>
                <option class="selectOption" value="asc">Lowest to Highest</option>
                <option class="selectOption" value="desc">Highest to Lowest</option>
            </select>
        </div>
        <div class="col-md-3">
            <select @change="checkColors" v-model="name" class="customSelect">
                <option class="selectOption" value="By Name">By Name</option>
                <option class="selectOption" value="asc">A-Z</option>
                <option class="selectOption" value="desc">Z-A</option>
            </select>
        </div>
        <div class="col-md-3">
            <input class="h-100" type="text" placeholder="search for anything" v-model="search">
        </div>
    </div>
    <div class="row">
        <div id="filterColumn" class="col-md-3 col-lg-2 text-bg-dark">
            <select @change="checkFilterColors" v-model="filter" class="filterSelect">
                <option class="selectOption" value="All">All</option>
                <option class="selectOption" value="Accessory">Accessories</option>
                <option class="selectOption" value="Console">Consoles</option>
                <option class="selectOption" value="Computer Accessory">Computer Accessories</option>
                <option class="selectOption" value="Computer Part">Computer Parts</option>
            </select>
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
            search: '',
            filter: 'All',
            price: 'By Price',
            name: 'By Name'
        }
    },
    computed:{
        products(){
            let prod = this.$store.state.products?.filter((x)=> {
                let isMatch = true;

                if(!x.prodName?.toLowerCase().includes(this.search.toLowerCase())){
                    isMatch = false;
                }

                if(this.filter != 'All'){
                    if(x.category != this.filter){
                        isMatch = false;
                    }
                }

                return isMatch;
            });
            
            if(this.price != "By Price"){
                if(this.price == 'asc'){
                    prod = prod.sort((a,b)=>{return a.price-b.price})
                }else{
                    prod = prod.sort((a,b)=>{return b.price-a.price})
                }
            }

            return prod;
        }
    },
    mounted(){
        this.$store.dispatch('getProducts');
        this.$store.commit('setSingleProduct',null)
        this.$store.commit('setProductCategory', null)
    },
    methods:{
        checkColors(){
            const selectBoxes = document.getElementsByClassName('customSelect');
            for(let i = 0; i<selectBoxes.length; i++){
                if(selectBoxes[i].value != selectBoxes[i].firstChild.value){
                    selectBoxes[i].classList.add('selectedCustomSelect');
                }else{
                    selectBoxes[i].classList.remove('selectedCustomSelect');
                }
            }
        },
        checkFilterColors(){
            const selectBoxes = document.getElementsByClassName('filterSelect');
            for(let i = 0; i<selectBoxes.length; i++){
                if(selectBoxes[i].value != selectBoxes[i].firstChild.value){
                    selectBoxes[i].classList.add('selectedCustomSelect');
                }else{
                    selectBoxes[i].classList.remove('selectedCustomSelect');
                }
            }
        }
    }
}
</script>

<style scoped>
*{
    font-family: 'Roboto',sans-serif;
}
.products{
    padding-top:96px;
    padding-bottom:96px;
}

#sortRow{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
#filterColumn{
    padding-top:30px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.filterSelect{
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: bold;
  background: transparent;
  border: 2px solid #757575;
  color: #757575;
  transition: border 0.2s linear, color 0.2s linear ;
}
.filterSelect:focus{
  border:2px solid greenyellow;
  color: greenyellow;
}

.filterSelect:focus-visible{
  outline: none;
}

</style>