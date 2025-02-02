<template>
    <div class="min-h-lvh bg-blue-50 pt-6 pb-10">
        <div class="flex flex-wrap gap-3 px-5 justify-center">
            <ProductCard v-for="pro in searchproducts" :categ="pro.category" :id="pro.id" :key="pro.id" :image="pro.images[0]" :price="pro.price" :disc="pro.discountPercentage" :brand="pro.brand" :title="pro.title  "/>
        </div>
       
    </div>
</template>

<script>
    import { mapState } from 'pinia';
    import { Mystore } from '../../Store/GetProducets';
    import ProductCard from '../../components/ProductCard/ProductCard.vue';

    export default{
        components:{
            ProductCard,

        },
        computed:{
            ...mapState(Mystore, ['searchproducts']),
        },
        methods:{
           
        }
        
    }
</script>