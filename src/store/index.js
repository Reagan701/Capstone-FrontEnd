import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    currentUser: null,
    products: null,
    singleProduct: null,
    allUsers:null
  },
  getters: {
  },
  mutations: {
    setUser(state,user){
      state.user = user;
    },
    setCurrentUser(state,currentUser){
      state.currentUser = currentUser;
    },
    setProducts(state,products){
      state.products = products;
    },
    setSingleProduct(state,product){
      state.singleProduct = product;
    },
    setAllUsers(state,allUsers){
      state.allUsers = allUsers;
    }
  },
  actions: {
    getProducts(context){
      fetch('https://digiverseapi.herokuapp.com/products')
      .then((res)=>res.json())
      .then((data)=> {
        context.commit('setProducts',data.results);
      });
    },
    getSingleProduct(context,payload){
      fetch('https://digiverseapi.herokuapp.com/products/'+payload)
      .then((res)=>res.json())
      .then((data)=>context.commit('setSingleProduct', data.results[0]));
    },
    getAllUsers(context){
      fetch('https://digiverseapi.herokuapp.com/users')
      .then((res)=>res.json())
      .then((data)=>context.commit('setAllUsers',data.results))
    },
    deleteUser(context,payload){
      fetch('https://digiverseapi.herokuapp.com/users/'+payload, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then(()=> context.dispatch('getAllUsers'));
    },
    deleteProduct(context,payload){
      fetch('https://digiverseapi.herokuapp.com/users/'+payload, {
        method: 'DELETE',
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then(() => context.dispatch('getProducts'));
    },
    registerUser(context,payload){
      fetch('https://digiverseapi.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then((data)=>console.log(data));
    },
    loginUser(context,payload){
      fetch('https://digiverseapi.herokuapp.com/users', {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then((data)=>{
        context.commit('setUser', data.token);
        context.dispatch('verify');
      })
    },
    verify(context){
      fetch('https://digiverseapi.herokuapp.com/verify', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token': context.state.user
        }
      })
      .then((res) => res.json())
      .then((data)=> {
        context.commit('setCurrentUser', data.decodedUser.user)
      });
    }
  },
  modules: {
  }
})
