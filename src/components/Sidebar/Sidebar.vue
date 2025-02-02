<template>
    <div  v-show="sidebarVisable" class="absolute top-0 left-0 w-1/4 max-sm:w-1/2 h-full overflow-scroll bg-white transition-all duration-700">
        <div class="flex items-center justify-between p-3">
            <h1 class="font-[600] text-[15px]">All Categories</h1>
            <CaCloseFilled @click="hideSidebar" class="cursor-pointer" />
        </div>
        <ul class="flex flex-col">
            <router-link  v-for="el in Categ" :to="`/${el.slug}`" @click="hideSidebar" :key="el" class="p-3 text-gray-500 hover:bg-gray-50 border-b-2 border-gray-100 cursor-pointer" > {{ el.name }} </router-link>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'pinia'
    import {Sidebar} from '../../Store/Sidebar'
    import { CaCloseFilled } from '@kalimahapps/vue-icons';
    import { Mystore } from '../../Store/GetProducets';

    export default{
        components:{
            CaCloseFilled,

        },
        data(){
            return{
                Categ:[],

            }
        },
         created(){
             this.GetCateg();
        },
        methods:{
          async GetCateg(){
            const promise = await fetch('https://dummyjson.com/products/categories');
            const data = await promise.json();
            this.Categ = data; 
          },
          ...mapActions(Sidebar ,['hideSidebar']),
          ...mapActions(Mystore ,['getproductsfromcateg'])
          
        },
        computed:{
            ...mapState(Sidebar , ['sidebarVisable']),
            ...mapState(Mystore , ['productcateg'])
        },

       

    }
</script>