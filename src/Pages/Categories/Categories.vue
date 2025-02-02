<template>
    <div class="pb-14 bg-blue-50 pt-10 min-h-lvh">
            <div class=" px-16 max-sm:px-2">
                <Title :title="title" />
            </div>
            <div class="transition-all duration-700 flex flex-wrap gap-3 mt-3 px-5 max-sm:px-2 justify-center">
                <ProductCard v-for="pro in productcateg" :categ="String(pro.category)" :id="String(pro.id)" :key="pro.id" :image="pro.images[0]" :price="pro.price" :disc="pro.discountPercentage" :brand="pro.brand" :title="pro.title  "/>
            </div>
    </div>

</template>

<script>
    import { mapActions, mapState } from 'pinia';
    import { Mystore } from '../../Store/GetProducets';
    import Title from '../../components/Title/Title.vue'
    import ProductCard from '../../components/ProductCard/ProductCard.vue';
    export default{
        components:{
            Title,
            ProductCard,

        },

        data(){
            return{
                title:''
            }
        },
        methods:{
            ...mapActions(Mystore , ['getproductsfromcateg'])

        },
        computed:{
            ...mapState(Mystore , ['productcateg'])
        },
        created(){
            this.title=this.$router.currentRoute.value.params.categoreis;
            this.getproductsfromcateg(this.$router.currentRoute.value.params.categoreis)
        },
        updated(){
            this.title=this.$router.currentRoute.value.params.categoreis;
            this.getproductsfromcateg(this.$router.currentRoute.value.params.categoreis)
            // console.log(this.$router.currentRoute.value.params.categoreis)
       
        }
    }
</script>