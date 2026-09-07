
<template>
  <!-- <div>
    App Component
    <NavbarComponent>
  </div> -->
 <NavbarComponent/>
<HeroSectionComponent/>
<AboutSectionComponent/>
</template>

<script >

import NavbarComponent from './components/layout/Navbar.vue';
import HeroSectionComponent from './components/sections/HeroSection.vue';
import AboutSectionComponent from './components/sections/AboutSection.vue';
export default{ 
 
    name: 'App',
    components: {
      NavbarComponent,
      HeroSectionComponent,
      AboutSectionComponent
    
  
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
