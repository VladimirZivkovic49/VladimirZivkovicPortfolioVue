
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

export default{ 
 
    name: 'App',
    components: {
      NavbarComponent,
      FooterComponent
    
    
  
  }
}

</script>



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
