<template>
    <div>
<ProjectSectionComponent/>

    </div>
</template>

<script>
import ProjectSectionComponent from '../components/sections/ProjectSection.vue';
    export default {
      name:'ProjectViewComponent',
        components:{
            ProjectSectionComponent
        }
    }
</script>

<!-- <style scoped>

</style> -->
<style module>
.videoBadge {
  background-color: #ef4444; /* Upečatljiva crvena boja */
  color: white;              /* Beli tekst */
  padding: 0.25rem 0.6rem;   /* Razmak unutar naljepnice */
  border-radius: 20px;       /* Zaobljene ivice (oblik pilule) */
  font-size: 0.75rem;        /* Sitniji, elegantan font */
  font-weight: 700;          /* Podebljan tekst */
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;               /* Razmak između ikonice 🎬 i teksta */
  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3); /* Blaga crvena senka */
}
</style> 
