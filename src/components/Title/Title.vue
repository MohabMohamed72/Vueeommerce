<template>
    <div>
        <h1 class="title text-gray-300  relative px-5 bg-white shadow py-3 ">{{ title }}</h1>
    </div>
</template>


<script >
    export default{
        props:['title']
    }
</script>


<style>

.title::before{
    content: "";
    background-color: #ff6c3e;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
}

</style>


