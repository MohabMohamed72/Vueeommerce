<template>
    
    <router-link :to="`/${categ}/${id}`"><div class="flex flex-col items-center rounded-md shadow w-[260px] bg-white hover:scale-110 transition-all duration-700 cursor-pointer ">
        <div class="mt-2">
            <img :src="image" alt="Image Logo" class="h-[120px]">
        </div>
        <div class="mt-1">
            <h1 class="text-[12px] text-center"><span class="text-gray-400">Brand :</span>{{ brand }}</h1>
            <h1 class="text-[12px] mt-1 text-center">{{ title }}</h1>
        </div>

        <div class="flex justify-around text-[12px] mt-2 gap-3 items-center ml-auto mr-auto">
            <h1 class="text-gray-400"><del>${{ (Number(price) / ((100 /100) - (Number(disc) / 100)) ).toFixed() }}</del></h1>
            <h1 class="font-[600]">${{ price }}</h1>
            <h1 class="text-[#ff6c3e] font-[600]">({{ disc }}% off)</h1>
        </div>

        <hr class="bg-[#ff6b3e] w-[20%] h-[1px] mt-3 mb-3">

    </div></router-link>
</template>


<script>
    export default{
        props:['image' ,'brand' ,'title' ,'price' , 'disc' ,'categ' , 'id']
    }

</script>