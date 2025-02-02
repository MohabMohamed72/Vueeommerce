import { defineStore } from 'pinia'

export const Sidebar = defineStore('Sidebar',{
    state:()=>({
        sidebarVisable:false,
    }),
    actions:{
       ShowSidebar(){
        this.sidebarVisable  = true;
       },
       hideSidebar(){
        this.sidebarVisable  = false;
       }
    }
});