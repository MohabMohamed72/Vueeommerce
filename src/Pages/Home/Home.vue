<script >
  import Title from '../../components/Title/Title.vue'
  import ProductCard from '../../components/ProductCard/ProductCard.vue';
  import { mapActions, mapState } from 'pinia';
  import { Mystore } from '../../Store/GetProducets'; 

  export default{
    components:{
      Title,
      ProductCard,


    },
    data(){
      return{

      }
    },
    computed:{
      ...mapState(Mystore ,['smartphones' , 'laptops','fragrances' , 'skincare'])
    },
    
    methods:{
      ...mapActions(Mystore ,['getsmartphones' ,'getlaptops' ,'getfragrances' ,'getskincare']),

    },
    async mounted(){
      await this.getsmartphones()
      await this.getlaptops()
      await this.getfragrances()
      await this.getskincare()
    }
  }
</script>

<template>
    <div class=" mt-6 ">
      <div class="w-full  h-[250px] max-sm:h-fit overflow-hidden ml-auto mr-auto px-16 max-md:px-2 ">
        <img src="../../assets/slider_img_2.jpg" alt="Landing Image" class="">
      </div>

      <div class="bg-blue-50 pb-14">
        
       <div>
            <div class="pt-5 px-16 mt-3 max-sm:px-2">
              <Title title="SMART PHONES" />
            </div>
    
            <div class="flex flex-wrap gap-3 mt-3 px-5 justify-center">
              <ProductCard v-for="pro in smartphones.slice(0,5)" :categ="pro.category" :id="pro.id" :key="pro.id" :image="pro.images[0]" :price="pro.price" :disc="pro.discountPercentage" :brand="pro.brand" :title="pro.title  "/>
            </div>
        </div>

          <div>
            <div class="pt-5 px-16 mt-3 max-sm:px-2">
              <Title title="LAPTOPS" />
            </div>
    
            <div class="flex flex-wrap gap-3 mt-3 px-5 justify-center">
              <ProductCard v-for="pro in laptops.slice(0,5)" :categ="pro.category" :id="pro.id" :key="pro.id" :image="pro.images[0]" :price="pro.price" :disc="pro.discountPercentage" :brand="pro.brand" :title="pro.title  "/>
            </div>
        </div>
        <div>
            <div class="pt-5 px-16 mt-3 max-sm:px-2">
              <Title title="FRAGRANCES" />
            </div>
    
            <div class="flex flex-wrap gap-3 mt-3 px-5 justify-center">
              <ProductCard v-for="pro in fragrances.slice(0,5)" :categ="pro.category" :id="pro.id" :key="pro.id" :image="pro.images[0]" :price="pro.price" :disc="pro.discountPercentage" :brand="pro.brand" :title="pro.title  "/>
            </div>
        </div>
      <div>
            <div class="pt-5 px-16 mt-3 max-sm:px-2">
              <Title title="SKIN CARE" />
            </div>
    
            <div class="flex flex-wrap gap-3 mt-3 px-5 justify-center">
              <ProductCard v-for="pro in skincare"  :categ="pro.category" :id="pro.id" :key="pro.id"  :image="pro.images[0]" :price="pro.price" :disc="pro.discountPercentage" :brand="pro.brand" :title="pro.title  "/>
            </div>
        </div> 

      </div>



    </div>
</template>
