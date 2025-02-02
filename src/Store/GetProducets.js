import { defineStore } from 'pinia'

export const Mystore = defineStore('Mystore',{
    state:()=>({
        smartphones:[],
        laptops:[],
        fragrances:[],
        skincare:[],
        productcateg:[],
        AllproductDetails:[],
        searchproducts:[],




    }),
    actions:{
        async getsmartphones(){
            const promise = await fetch('https://dummyjson.com/products/category/smartphones');
            const data = await promise.json();
            this.smartphones=data.products;
        },
        async getlaptops(){
            const promise = await fetch('https://dummyjson.com/products/category/laptops');
            const data = await promise.json();
            this.laptops=data.products;

        },
        async getfragrances(){
            const promise = await fetch('https://dummyjson.com/products/category/fragrances');
            const data = await promise.json();
            this.fragrances=data.products;
        },
        async getskincare(){
            const promise = await fetch('https://dummyjson.com/products/category/skin-care');
            const data = await promise.json();
            this.skincare=data.products;
        },
        async getproductsfromcateg(link){
            const promise = await fetch(`https://dummyjson.com/products/category/${link}`);
            const data = await promise.json();
            this.productcateg=data.products;
        },
        async getAllProductDetails(id){
            const promise = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await promise.json();
            this.AllproductDetails=data;
        },
        async SearchProductsFunc(pro){
            const promise = await fetch(`https://dummyjson.com/products/search?q=${pro}`);
            const data = await promise.json();
            this.searchproducts =data.products;
        },
    }
});