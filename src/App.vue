
<template>
  <!-- <div>
    App Component
    <NavbarComponent>
  </div> -->
 <!-- <NavbarComponent/>
<HeroSectionComponent/>
<AboutSectionComponent/> -->
<div id="app">
    <NavbarComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>

</template>

<script >

import NavbarComponent from './components/layout/Navbar.vue';
import FooterComponent from './components/layout/Footer.vue';
//import HeroSectionComponent from './components/sections/HeroSection.vue';
//import AboutSectionComponent from './components/sections/AboutSection.vue';
export default{ 
 
    name: 'App',
    components: {
      NavbarComponent,
      FooterComponent
    //  HeroSectionComponent,
    //  AboutSectionComponent
    
  
  }
}

</script>

 <!-- <style scoped> 

</style>  -->

<style >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #ffffff;
  color: #2c3e50;
}
</style>
