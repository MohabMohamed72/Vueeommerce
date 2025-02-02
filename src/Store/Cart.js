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
        this.totalcartnumber = 0;
        this.totalprice = 0;
        this.CartElementNumber =0 ;
        this.elemntprice = 0 ;

        this.CartElement = this.CartElement.filter((pro) => pro.product.id !== el.id );
        for(let i = 0 ; i < this.CartElement.length ; i++){
          this.CartElementNumber =this.CartElement[i].numbrtofproduct;
          this.elemntprice = (this.CartElement[i].product.price) * (this.CartElement[i].numbrtofproduct)
        }
        this.totalcartnumber += this.CartElementNumber;
        this.totalprice += this.elemntprice;
     
      },
      clearCart(){
        this.totalcartnumber = 0;
        this.totalprice = 0;
        this.CartElementNumber =0 ;
        this.elemntprice = 0 ;
        this.CartElement = [];
        
      }
  
   
    },
    
});