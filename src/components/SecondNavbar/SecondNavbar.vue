<template>
      <div class="bg-[#ff6c3e] px-16 flex items-center justify-between max-sm:px-2 " >
        
            <div class="py-3 flex items-center gap-2 text-white ">
                <CdThreeBars class="text-white cursor-pointer size-5 " @click="ShowSidebar" />
                <router-link to="/"><h1 class="text-[20px] font-[700] cursor-pointer">Logo</h1></router-link>
            </div>

            <div class="flex flex-col relative py-2 max-md:hidden">
                <div class="flex items-center ">
                    <input type="text" v-model="search" placeholder="Search here" class="bg-white pr-36 pl-1 text-[12px] w-full focus:outline-none py-2">
                    <div class="absolute  right-[1px] bg-[#ff6c3e] p-2 " @click="searchevent">
                        <router-link to="/search"> <AkSearch class="text-white cursor-pointer " /></router-link>
                    </div>
                </div>


                <div class="text-white ">
                
                <ul class=" flex gap-2  items-center  ">


                    <router-link to="/laptops"><li class="">
                        <p class="SecondNavbarlist">Laptops</p>
                    </li></router-link>

                    <router-link to="/fragrances"><li class="">
                        <p class="SecondNavbarlist">Fragrances</p>
                    </li></router-link>

                    <router-link to="/skin-care"><li class="">
                        <p class="SecondNavbarlist">SkinCare</p>
                    </li></router-link>

                    <router-link to="/groceries"><li class="">
                        <p class="SecondNavbarlist">Groceries</p>
                    </li></router-link>

                    <router-link to="/home-decoration"><li class="">
                        <p class="SecondNavbarlist">Home Decoration</p>
                    </li></router-link>

                    <router-link to="/furniture"><li class="">
                        <p class="SecondNavbarlist">Furniture</p>
                    </li></router-link>
                  
            
                </ul>
            </div>
            </div>

            <router-link to="/cart"><div class="relative flex gap-1">
                <AkCart class="text-white size-6 cursor-pointer" />
                <p class="text-[#ff6c3e] bg-white rounded-full text-center size-6">{{ totalcartnumber }}</p>
            </div></router-link>

      </div>

</template>

<script>
    import { CdThreeBars } from '@kalimahapps/vue-icons';
    import { AkSearch } from '@kalimahapps/vue-icons';
    import { AkCart } from '@kalimahapps/vue-icons';
    import {Sidebar} from '../../Store/Sidebar'
    import { mapActions, mapState } from 'pinia';
    import { ProductQuantity } from '../../Store/ProductsQuantity';
    import { Mystore } from '../../Store/GetProducets';
    import {Cart} from '../../Store/Cart'

    export default{
    
        components:{
            CdThreeBars,
            AkSearch,
            AkCart,
            


        },
        data(){
            return{
                search:'',
                cartNumber:0,
                CartElement:[],
                
            }
        },
        methods:{
            ...mapActions(Sidebar ,['ShowSidebar']),
            ...mapActions(Mystore,['SearchProductsFunc']),

            searchevent(){
                this.SearchProductsFunc(this.search);
            }
        },
        computed:{
            ...mapState(ProductQuantity , ['Quantity']),
            ...mapState(Cart , ['totalcartnumber']),
        }
    }
</script>