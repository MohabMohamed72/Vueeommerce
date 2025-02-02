<template>
    <div class="bg-blue-50 rounded-md w-full max-md:px-2 px-16 pt-6 pb-14 min-h-lvh  ">
        
        <div class="bg-white grid grid-cols-2 max-sm:grid-cols-1 rounded-xl max-sm:pb-10">

            <div class="flex flex-col ml-3 w-fit max-sm:justify-center max-md:gap-10">
                <div class=" w-[70%] ml-auto mr-auto">
                    <img :src="AllproductDetails.images[0]" alt="Product Image">
                </div>
                <div class="flex pb-3 flex-wrap gap-3 w-fit ml-auto mr-auto  max-sm:-translate-y-10 max-md:translate-y-0">
                    <img v-for="img in AllproductDetails.images" :key="img" :src="img" alt="another images" class="size-24 border-2 rounded-md border-[#ff6c3e]">
                </div>
            </div>

            <div class="flex flex-col max-sm:px-3 mt-10 max-sm:mt-1">
                    <div class="mr-auto mt-3">
                        <h1 class="font-[500]">{{ AllproductDetails.title }}</h1>
                        <p class="text-justify mt-1 text-gray-500 w-[80%] text-[13px]">{{AllproductDetails.description}}</p>
                    </div>

                    <div >
                        <ul class="flex mt-3 gap-5 max-md:flex-col max-md:gap-2 ">
                            <li class="text-[#ff6c3e] text-[12px]">Rating: <span class="text-gray-500  border-r-2 pr-2 border-gray-300">{{AllproductDetails.rating  }}</span></li>
                            <li class="text-[#ff6c3e] text-[12px]">Brand: <span class="text-gray-500  border-r-2 pr-2 border-gray-300">{{AllproductDetails.brand  }}</span></li>
                            <li class="text-[#ff6c3e] text-[12px]">Category: <span class="text-gray-500 max-md:border-r-2 max-md:pr-2 max-md:border-gray-300"> {{AllproductDetails.category  }}</span></li>
                        </ul>
                    </div>

                    <div class="bg-gray-50 rounded-md mt-3 p-2 flrx flex-col mr-5">
                        <p class="text-gray-400"><del>$ {{ (Number(AllproductDetails.price) / ((100 /100) - (Number(AllproductDetails.discountPercentage) / 100)) ).toFixed()}}</del></p>
                        <p class="text-[#ff6c3e] text-[20px] font-[700]">$ {{ AllproductDetails.price }} <sup class="text-white bg-[#ff6c3e] p-1 rounded-md text-[10px] -">{{ AllproductDetails.discountPercentage }} % OFF</sup></p>
                    </div>


                    <div class="flex gap-2 mt-3 text-[13px] items-center">
                        <p>Quantity: </p>
                        <div class="flex gap-2 bg-gray-50 border-2 border-gray-200">
                            <button class="size-5 border-r-2 border-gray-200 cursor-pointer " @click="removeone">-</button>
                            <p class="size-5 text-center">{{ Quantity }}</p>
                            <button class="size-5 border-l-2 border-gray-200 cursor-pointer" @click="addone">+</button>
                        </div>
                    </div>

                    <div class="flex mt-5 gap-3">
                        <button @click="addelement(AllproductDetails , Quantity) " 
                        class="flex items-center gap-2 text-[#ff6c3e] border-2 p-2 cursor-pointer bg-[#ff6b3e1a] border-[#ff6c3e] hover:bg-[#ff6b3e54]">
                            <AkCart />
                            <p>Add To Cart</p>
                        </button>

                        <button class="bg-[#ff6c3e] text-white p-2 cursor-pointer">
                            Buy Now
                        </button>
                    </div>
            </div>

        </div>

        
        
        
      
    </div>

</template>

<script>
    import { mapActions, mapState } from 'pinia';
    import { Mystore } from '../../Store/GetProducets';
    import { ProductQuantity } from '../../Store/ProductsQuantity';
    import { AkCart } from '@kalimahapps/vue-icons';
    import {Cart} from '../../Store/Cart'

    export default{
        components:{
            AkCart,

        },
        methods:{
            ...mapActions(Mystore , ['getAllProductDetails']),
            ...mapActions(ProductQuantity , ['addone' ,'removeone' , 'setquantitytozero']),
            ...mapActions(Cart , ['addelement']),
        },
        computed:{
            ...mapState(Mystore , ['AllproductDetails']),
            ...mapState(ProductQuantity , ['Quantity']),
        },
        created(){

            this.getAllProductDetails(this.$router.currentRoute.value.params.id)
            
        },
        updated(){
          
            this.getAllProductDetails(this.$router.currentRoute.value.params.id)
        
       
        }
      

    }
</script>