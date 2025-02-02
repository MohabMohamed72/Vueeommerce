<template>
    <div>
        
        <div class="bg-[#ff6c3e] px-16 flex items-center justify-between border-b-[1px] border-gray-50 " >
            
            <div class="py-3 sm:hidden">
                <CdThreeBars class="text-white cursor-pointer size-5 " />
            </div>

            <div class="text-white ">
                <ul class=" flex gap-2 py-2 items-center max-sm:hidden ">
                    <li class="FirstNavbarlist">
                        <p class="FirstNavbarText">Seller Center</p>
                    </li>
                    <li class="FirstNavbarlist">
                        <p class="FirstNavbarText">Download</p>
                    </li>
                    <li class="text-[12px] flex items-center gap-2">
                        <p class="">Follow Us On</p>
                    </li>
                    <div class="flex gap-1">
                        <AkFacebookFill class=" size-3 cursor-pointer" />
                        <AkInstagramFill class="size-3 cursor-pointer" />
                    </div>
                </ul>
            </div>

            <div class="text-white ">
                <ul class=" flex gap-2 py-2 items-center max-sm:hidden ">

                    <AkQuestionFill class="hover:text-[#ff6c3e] size-3 translate-x-1" />
                    <li class="FirstNavbarlist flex items-center ]">
                        <p class="FirstNavbarText">Support</p>
                    </li>

                    <li class="FirstNavbarlist">
                        <p class="FirstNavbarText">Register</p>
                    </li>
                    <li class="FirstNavbarlist">
                        <p class="hover:text-[#ff6c3e] transition-all  px-2 duration-700 cursor-pointer">Log in</p>
                    </li>
            
                </ul>
            </div>

        </div>
      
    </div>

</template>

<script>
    import { AkInstagramFill } from '@kalimahapps/vue-icons';
    import { AkFacebookFill } from  '@kalimahapps/vue-icons';
    import { CdThreeBars } from '@kalimahapps/vue-icons';
    import { AkQuestionFill } from '@kalimahapps/vue-icons';

    export default{
        components:{
            AkFacebookFill,
            AkInstagramFill,
            CdThreeBars,
            AkQuestionFill,



        },
        data(){
            return{

            }
        }
    }
</script>