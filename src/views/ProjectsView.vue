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
  background-color: #ef4444; 
  color: white;             
  padding: 0.25rem 0.6rem;   
  border-radius: 20px;      
  font-size: 0.75rem;        
  font-weight: 700;         
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;              
  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3); 
}
</style> 
