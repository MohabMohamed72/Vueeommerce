<template>
    <div class="h-lvh bg-blue-50 pt-10 px-16 max-sm:px-2">
        <div class="w-full  flex justify-between p-1 text-gray-400 text-[13px] bg-white px-3">
            <p>Number</p>
            <p>Product</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Actions</p>
        </div>
        <div class="mt-3">
            <!-- <button @click="show">show</button> -->
            <div  v-for="(pro ,index ) in CartElement" v-show="pro.product !== '' " :key="pro.id" class="w-full py-3  flex justify-between p-1 text-gray-400 text-[13px] bg-white px-3">
                <p>{{ index + 1 }}</p>
                <p>{{ pro.product.title }}</p>
                <p>$ {{ pro.product.price }}</p>
                <p>{{ pro.numbrtofproduct }}</p>
                <p class="text-[#ff6c3e]">$ {{ (pro.product.price) * (pro.numbrtofproduct) }}</p>
                <button @click="deleteelement(pro.product)" class="cursor-pointer">Delete</button> 
                
            </div>
        </div>


        <div class="bg-white w-full rounded-md flex justify-between px-2 mt-4 py-2">
            <button class="flex items-center gap-2 text-[#ff6c3e] border-2 border-[#ff6c3e] p-1 text-[12px] bg-[#ff6b3e11] h-fit">
                <IoSharpTrashBin />
                <p>Clear Cart</p>
            </button>
            <div class="flex flex-col items-end gap-3">
                <p class="text-[12px]">total: <span>({{ totalcartnumber }} items)</span> : <span class="text-[#ff6c3e] text-[15px] font-[600]">$ {{ totalprice }}</span></p>
                <button class="text-white bg-[#ff6c3e] font-[500] text-[13px] p-2">Check out</button>
            </div>

        </div>
            
        
    </div>
</template>

<script>
    import { mapActions, mapState } from 'pinia';
    import {Cart} from '../../Store/Cart'
    import ProductCard from '../../components/ProductCard/ProductCard.vue';
    import { IoSharpTrashBin } from '@kalimahapps/vue-icons';
    export default{
        data(){
            return{
                cartproducts:[],

            }
        },
        components:{
            ProductCard,
            IoSharpTrashBin,


        },
        computed:{
            ...mapState(Cart , ['CartElement' , 'CartElementNumber' ,'totalprice' ,'totalcartnumber'])
        },
        methods:{
      
           ...mapActions(Cart,['deleteelement' ])
            
        },
     
    }
</script>