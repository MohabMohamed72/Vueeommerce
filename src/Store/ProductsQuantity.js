import { defineStore } from 'pinia'

export const ProductQuantity = defineStore('ProductQuantity',{
    state:()=>({
        Quantity:0,
    }),
    actions:{
       addone(){
        this.Quantity++;
       },
       removeone(){
        this.Quantity--;
       },
       setquantitytozero(){
        this.Quantity = 0;
       }
    }
});