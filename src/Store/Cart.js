import { defineStore } from 'pinia'

export const Cart = defineStore('Cart',{
    state:()=>({
        CartElement:[],
        CartElementNumber:0,
        totalcartnumber:0,
        elemntprice:0,
        totalprice:0,

  



    }),
    actions:{
      addelement(el , number){
        this.CartElement.push({
          product:el,
          numbrtofproduct:number,
        })

        for(let i = 0 ; i < this.CartElement.length ; i++){
          this.CartElementNumber = (this.CartElement[i].numbrtofproduct);
          this.elemntprice = (this.CartElement[i].product.price) * (this.CartElement[i].numbrtofproduct)
        }
        this.totalcartnumber += this.CartElementNumber;
        this.totalprice += this.elemntprice;


      },
      deleteelement(el){

        for(let i = 0 ; i < this.CartElement.length ; i++){
        
          if(this.CartElement[i].product.id === el.id){
            this.CartElement[i].product ='';
          }
         
        }
      },
  
   
    },
    
});