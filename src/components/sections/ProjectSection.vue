<template>
  <section id="projects" :class="$style.projects">
    <div :class="$style.container">
      <h2 :class="$style.title">{{ $t('projects.title') }}</h2>
      <p :class="$style.subtitle">{{ $t('projects.subtitle') }}</p>

      <!-- Filteri -->
      <div :class="$style.filterContainer">
        <button
          :class="[$style.filterBtn, activeFilter === 'all' && $style.activeFilter]"
          @click="activeFilter = 'all'"
        >
          {{ $t('projects.filterAll') }}
        </button>
        <button
          :class="[$style.filterBtn, activeFilter === 'web' && $style.activeFilter]"
          @click="activeFilter = 'web'"
        >
          {{ $t('projects.categories.web') }}
        </button>
        <button
          :class="[$style.filterBtn, activeFilter === 'desktop' && $style.activeFilter]"
          @click="activeFilter = 'desktop'"
        >
          {{ $t('projects.categories.desktop') }}
        </button>
      </div>

      <!-- Mreža kartica -->
      <div :class="$style.grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          :class="$style.card"
        >
          <!-- Header kartice -->
         <!-- badge -->
          <div :class="$style.cardHeader">
         <span v-if="project.hasVideo" :class="$style.videoBadge">
             🎬 Video Demo
           </span> 
          </div>
          <!-- badge -->
          <div :class="$style.cardHeader">
            <span :class="$style.badge">{{ project.type }}</span>
            <h3 :class="$style.cardTitle">{{ project.title }}</h3>
          </div>
          
          <!-- Body kartice (Slika + Opis) -->
          <div :class="$style.cardBody">
            <div :class="$style.imageWrapper">
              <img :src="getImageUrl(project.image)" :alt="project.title" :class="$style.projectImg" />
            </div>
            <p :class="$style.description">{{ project.shortDescription }}</p>
            
            <div :class="$style.tags">
              <span v-for="(tech, idx) in project.technologies" :key="idx" :class="$style.tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Footer kartice sa ruter linkom umesto modala -->
          <div :class="$style.cardFooter">
            <router-link 
              :to="{ name: 'project-detail', params: { id: project.id } }" 
              :class="$style.detailsBtn"
            >
              {{ $t('projects.detailsBtn') }}
            </router-link>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSectionComponent',
  data() {
    return {
      activeFilter: 'all'
    }
  },
  computed: {
    projects() {
      return this.$tm('projects.items') || []
    },
    filteredProjects() {
      if (this.activeFilter === 'all') {
        return this.projects
      }
      return this.projects.filter(p => p.category === this.activeFilter)
    }
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) return ''
      return new URL(`../../assets/${imageName}`, import.meta.url).href
    }
  }
}
</script>

<style module>
.projects {
  padding: 3.5rem 1.5rem;
  background-color: #f8f9fa;
  min-height: 80vh;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-size: 1rem;
}

/* Filteri */
.filterContainer {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
}

.filterBtn {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #475569;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.filterBtn:hover {
  border-color: #42b883;
  color: #42b883;
}

.activeFilter {
  background: #42b883;
  color: #ffffff;
  border-color: #42b883;
}

.activeFilter:hover {
  background: #3aa876;
  color: #ffffff;
}

/* Grid & Cards */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.8rem;
}

.card {
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.cardHeader {
  padding: 1.2rem 1.2rem 0.5rem 1.2rem;
}

.badge {
  display: inline-block;
  background: #e6f4ed;
  color: #2e7d32;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  margin-bottom: 0.5rem;
}

.cardTitle {
  font-size: 1.15rem;
  color: #2c3e50;
  font-weight: 700;
  line-height: 1.3;
}

.cardBody {
  padding: 0.8rem 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.imageWrapper {
  width: 100%;
  height: 180px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.8rem;
  background-color: #edf2f7;
}

.projectImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description {
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.4;
  margin-bottom: 1rem;
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  background: #f1f5f9;
  color: #475569;
  font-size: 0.78rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
}

.cardFooter {
  padding: 1rem 1.2rem;
  border-top: 1px solid #f1f5f9;
  background: #fafafa;
}

.detailsBtn {
  display: block;
  text-align: center;
  width: 100%;
  background: #2c3e50;
  color: #ffffff;
  padding: 0.6rem 0;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.2s ease;
}

.detailsBtn:hover {
  background: #42b883;
}
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
  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3); /* Blaga crvena senka */
}


@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>