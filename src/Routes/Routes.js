import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home/Home.vue'
import Categories from '../Pages/Categories/Categories.vue'
import ProductDetails from '../Pages/ProductDetails/ProductDetails.vue'
import Cart from '../Pages/Cart/Cart.vue'
import Search from '../Pages/Search/Search.vue'

const routes = [
    {name : 'home' ,path:'/' , component:Home},
    {name : 'categories' ,path:'/:categoreis' , component:Categories },
    {name : 'details' ,path:'/:categoreis/:id' , component:ProductDetails },
    {name : 'cart' ,path:'/cart' , component:Cart },
    {name : 'search' ,path:'/search' , component:Search },
   
]


const router = createRouter({
    history:createWebHistory(),
    routes,

})

export default router;
