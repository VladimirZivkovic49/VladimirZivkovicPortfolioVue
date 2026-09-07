<template>
    <!-- <div>
<h2>Project Section</h2>
    </div> -->
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
          <div :class="$style.cardHeader">
            <span :class="$style.badge">{{ project.type }}</span>
            <h3 :class="$style.cardTitle">{{ project.title }}</h3>
          </div>

          <!-- Body kartice (Slika + Opis) -->
          <div :class="$style.cardBody">
            <div :class="$style.imageWrapper">
              <!-- <img :src="project.image" :alt="project.title" :class="$style.projectImg" /> -->
            <img :src="getImageUrl(project.image)" :alt="project.title" :class="$style.projectImg" />
            </div>
            <p :class="$style.description">{{ project.shortDescription }}</p>
            
            <div :class="$style.tags">
              <span v-for="(tech, idx) in project.technologies" :key="idx" :class="$style.tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Footer kartice sa dugmetom -->
          <div :class="$style.cardFooter">
            <button @click="openModal(project)" :class="$style.detailsBtn">
              {{ $t('projects.detailsBtn') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal za detalje projekta -->
    <div v-if="selectedProject" :class="$style.modalOverlay" @click.self="closeModal">
      <div :class="$style.modalContent">
        <button :class="$style.closeBtn" @click="closeModal">&times;</button>
        
        <span :class="$style.badge">{{ selectedProject.type }}</span>
        <h2 :class="$style.modalTitle">{{ selectedProject.title }}</h2>
        
        <!-- <img :src="selectedProject.image" :alt="selectedProject.title" :class="$style.modalImg" /> -->
        <img :src="getImageUrl(selectedProject.image)" :alt="selectedProject.title" :class="$style.modalImg" />
        <p :class="$style.modalDescription">{{ selectedProject.fullDescription }}</p>
        
        <div :class="$style.modalTech">
          <strong>Tehnologije:</strong>
          <div :class="$style.tags">
            <span v-for="(tech, idx) in selectedProject.technologies" :key="idx" :class="$style.tag">
              {{ tech }}
            </span>
          </div>
        </div>

        <div :class="$style.modalActions">
          <a v-if="selectedProject.link" :href="selectedProject.link" target="_blank" rel="noopener" :class="$style.linkBtn">
            {{ $t('projects.links.live') }} ↗
          </a>
          <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank" rel="noopener" :class="[$style.linkBtn, $style.githubBtn]">
            {{ $t('projects.links.code') }} ↗
          </a>
          <button @click="closeModal" :class="$style.secondaryBtn">
            {{ $t('projects.modalClose') }}
          </button>
        </div>
      </div>
    </div>
  </section>


</template>

<!-- <script>
    export default {
        name:'ProjectSectionComponent',
        setup() {
    const { tm } = useI18n()
    const activeFilter = ref('all')
    const selectedProject = ref(null)

    const projects = computed(() => tm('projects.items') || [])

    const filteredProjects = computed(() => {
      if (activeFilter.value === 'all') {
        return projects.value
      }
      return projects.value.filter(p => p.category === activeFilter.value)
    })

    const openModal = (project) => {
      selectedProject.value = project
    }

    const closeModal = () => {
      selectedProject.value = null
    }

    return {
      activeFilter,
      filteredProjects,
      selectedProject,
      openModal,
      closeModal
    }
  }
        
    }
</script> -->

<script>
export default {
  name: 'ProjectsSectionComponent',
  data() {
    return {
      activeFilter: 'all',
      selectedProject: null
    }
  },
  computed: {
    projects() {
      // Bezbedno preuzimanje niza projekata iz i18n prevoda
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
      // Dinamičko preuzimanje slike iz src/assets/ foldera
      return new URL(`../../assets/${imageName}`, import.meta.url).href
    },
   
    openModal(project) {
      this.selectedProject = project
    },



    closeModal() {
      this.selectedProject = null
    }
  }
}
</script>

<!-- <style scoped>

</style> -->
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
  width: 100%;
  background: #2c3e50;
  color: #ffffff;
  border: none;
  padding: 0.6rem 0;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.detailsBtn:hover {
  background: #42b883;
}

/* Modal */
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.modalContent {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.closeBtn {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #64748b;
  cursor: pointer;
}

.modalTitle {
  font-size: 1.4rem;
  color: #2c3e50;
  margin: 0.5rem 0 1rem 0;
}

.modalImg {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.modalDescription {
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.5;
  margin-bottom: 1.2rem;
}

.modalTech {
  margin-bottom: 1.5rem;
}

.modalTech strong {
  display: block;
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.4rem;
}

.modalActions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.linkBtn {
  background: #42b883;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.githubBtn {
  background: #24292e;
}

.secondaryBtn {
  background: #e2e8f0;
  color: #475569;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>