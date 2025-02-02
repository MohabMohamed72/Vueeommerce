<script >
  import FirstNavbar from './components/FirstNavbar/FirstNavbar.vue' 
  import SecondNavbar from './components/SecondNavbar/SecondNavbar.vue' 
  import Sidebar from './components/Sidebar/Sidebar.vue'
  import Footer from './components/Footer/Footer.vue';
  export default{
    components:{
      FirstNavbar,
      SecondNavbar,
      Sidebar,
      Footer,


    }
  }
</script>

<template>
  <main class="relative">
    <section>
      <!-- <FirstNavbar /> -->
    </section>
    <section>
      <SecondNavbar />
    </section>
    <section >
      <router-view />
    </section>

    <Sidebar />

    <section >
      <Footer />
    </section>
  </main>
</template>
