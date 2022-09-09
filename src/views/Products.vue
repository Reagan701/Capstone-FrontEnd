<template>
  <div v-if="products" class="viewport products container">
    <h1 class="fw-bold my-4">Our Items</h1>
    <div class="row">
        <div @load="code" id="filterColumn" class="d-flex flex-column gap-5 justify-content-start align-items-center col-md-3">
            <h2>Filter:</h2>
            <input class="w-100" type="text" placeholder="search for anything" v-model="search">
            <select @change="checkFilterColors" v-model="filter" class="filterSelect">
                <option class="selectOption" value="All">All</option>
                <option class="selectOption" value="Accessory">Accessories</option>
                <option class="selectOption" value="Console">Consoles</option>
                <option class="selectOption" value="Computer Accessory">Computer Accessories</option>
                <option class="selectOption" value="Computer Part">Computer Parts</option>
            </select>
            <select @change="checkFilterColors" v-model="price" class="filterSelect">
                <option class="selectOption" selected value="By Price">By Price</option>
                <option class="selectOption" value="asc">Lowest to Highest</option>
                <option class="selectOption" value="desc">Highest to Lowest</option>
            </select>
            <select @change="checkFilterColors" v-model="name" class="filterSelect">
                <option class="selectOption" value="By Name">By Name</option>
                <option class="selectOption" value="asc">A-Z</option>
                <option class="selectOption" value="desc">Z-A</option>
            </select>
        </div>
        <div class="ms-auto col-md-9">
            <div v-if="products.length>0" class="row row-border position-relative">
                <ProductCard v-for="product in products" :key="product.prodId" :product="product"/>
            </div>
            <div v-else class="row position-relative h-100">
                <div class="col-md-11">
                    <h2 style="margin-top:2rem;">No {{search }} Found</h2>
                </div>
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
                if(this.search.toLowerCase().charAt(0) != ' '){
                    if(!x.prodName?.toLowerCase().includes(this.search.toLowerCase())){
                        isMatch = false;
                    }
                }

                if(this.filter != 'All'){
                    if(x.category != this.filter){
                        isMatch = false;
                    }
                }

                return isMatch;
            });
            
            if(this.name != 'By Name'){
                if(this.name == 'asc'){
                    prod = prod.sort((a,b)=> {
                        if(a.prodName < b.prodName){
                            return -1
                        }
                        if(a.prodName > b.prodName){
                            return 1
                        }
                        return 0
                    })
                }else{
                    prod = prod.sort((a,b)=> {
                        if(a.prodName < b.prodName){
                            return 1
                        }
                        if(a.prodName > b.prodName){
                            return -1
                        }
                        return 0
                    })
                }
            }
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
        setTimeout(() => {
            this.$store.dispatch('getProducts');
            this.$store.commit('setSingleProduct',null)
            this.$store.commit('setProductCategory', null)
        }, 500);
        
    },
    methods:{
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
    padding-top:81px;
    padding-bottom:81px;
}

#filterColumn{
    margin-top:2rem;
    padding-top:2.7rem;
    padding-bottom:2.7rem;
    padding-right: 1rem;
    padding-left: 1rem;
    border-radius: 5px;
    position: fixed;
}


@media screen and (max-width:768px) {
    #filterColumn{
        position: inherit;
    }
    
}
@media screen and (min-width:769px) {
    #filterColumn{
        margin-left: -1rem;
    }
    
}

@media screen and (min-width:840px){
    #filterColumn{
        margin-left: -3rem;
    }
    
}

@media screen and (min-width:1500px) and (max-width:1799px) {
    #filterColumn{
        margin-left: -8rem
    }
}
@media screen and (min-width:1800px) {
    #filterColumn{
        margin-left: calc(-55vw / 4);
    }
}
@media screen and (min-width:2200px) {
    #filterColumn{
        margin-left: calc(-70vw / 4);
    }
}

.row-border::before{
    content: '';
    border-right: 1px solid greenyellow;
    height: 100%;
    position: absolute;
    margin-left: 1%;
    margin-top: 2rem;
    left: 0;
    top: 0;
}
.row-border{
    padding-top: 2rem;
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

h2{
    font-weight: bold;
    color: greenyellow;
}

</style>