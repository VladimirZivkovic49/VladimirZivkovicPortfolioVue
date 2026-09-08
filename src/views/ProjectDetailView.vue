<template>
    <div :class="$style.pageWrapper">
    <div :class="$style.container" v-if="project">
      <router-link to="/projects" :class="$style.backBtn">
        &larr; {{ $t('projects.backBtn') || 'Nazad na projekte' }}
      </router-link>

      <div :class="$style.header">
        <span :class="$style.badge">{{ project.type }}</span>
        <h1 :class="$style.title">{{ project.title }}</h1>
      </div>

      <div :class="$style.imageWrapper" v-if="project.image">
        <img :src="getImageUrl(project.image)" :alt="project.title" :class="$style.mainImage" />
      </div>

      <div :class="$style.contentSection">
        <h2>{{ $t('projects.overview') || 'Opis projekta' }}</h2>
        <p :class="$style.fullDescription">{{ project.fullDescription }}</p>

        <div :class="$style.techSection">
          <h3>{{ $t('projects.technologiesTitle') || 'Korišćene tehnologije' }}</h3>
          <div :class="$style.tags">
            <span v-for="(tech, idx) in project.technologies" :key="idx" :class="$style.tag">
              {{ tech }}
            </span>
          </div>
        </div>

        <div :class="$style.actions">
          <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" :class="$style.linkBtn">
            {{ $t('projects.links.live') }} ↗
          </a>
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" :class="[$style.linkBtn, $style.githubBtn]">
            {{ $t('projects.links.code') }} ↗
          </a>
        </div>
      </div>
    </div>

    <div v-else :class="$style.notFound">
      <h2>Projekat nije pronađen</h2>
      <router-link to="/projects" :class="$style.backBtn">&larr; Nazad na projekte</router-link>
    </div>
<!-- video -->
<div v-if="project.videos && project.videos.length" :class="$style.videoSegment">
          <!-- <h2>Demonstracija ključnih procesa</h2> -->
          <h2>{{ $t('projects.videoSectionTitle') }}</h2>
          <div :class="$style.videosList">
            <div 
              v-for="(vid, idx) in project.videos" 
              :key="idx" 
              :class="$style.videoCard"
            >
              <h3 :class="$style.videoTitle">{{ vid.title }}</h3>
              <div :class="$style.videoWrapper">
                <video controls preload="metadata" :class="$style.demoVideo">
                  <source :src="getVideoUrl(vid.src)" type="video/mp4" />
                  Vaš pregledač ne podržava prikaz videa.
                </video>
              </div>
            </div>
          </div>
        </div>


<!-- video -->



  </div>
</template>

<script>
    export default {
        name:'ProjectDetailViewComponent',
        props: ['id'],
  computed: {
    project() {
      const items = this.$tm('projects.items') || []
      return items.find(item => item.id === this.id)
    }
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) return ''
      return new URL(`../assets/${imageName}`, import.meta.url).href
    },
//getVideoUrl(videoPath) {
     // if (!videoPath) return ''
      //return new URL(`../assets/${videoPath}`, import.meta.url).href
     // return new URL(`../assets/videos/${fileName}`, import.meta.url).href
//}
getVideoUrl(videoPath) {
  if (!videoPath) return ''
  return videoPath
}


  }
        
    }
</script>



<style module>
.pageWrapper {
  padding: 3rem 1.5rem;
  background-color: #f8f9fa;
  min-height: 85vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.backBtn {
  display: inline-block;
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.backBtn:hover {
  text-decoration: underline;
}

.badge {
  display: inline-block;
  background: #e6f4ed;
  color: #2e7d32;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  border-radius: 12px;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.imageWrapper {
  width: 100%;
  max-height: 420px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.mainImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fullDescription {
  font-size: 1.05rem;
  color: #334155;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.techSection {
  margin-bottom: 2rem;
}

.techSection h3 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f1f5f9;
  color: #475569;
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 1rem;
}

.linkBtn {
  background: #42b883;
  color: #ffffff;
  padding: 0.7rem 1.4rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
}

.githubBtn {
  background: #24292e;
}

.notFound {
  text-align: center;
  padding: 4rem 1rem;
}


/* style video */
.videoSegment {
  margin: 2.5rem 0;
  padding: 1.5rem;
  background-color: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.videoSegment h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #0f172a;
}

/* Lista video kartica (sve jedna ispod druge) */
.videosList {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Pojedinačna kartica sa videom */
.videoCard {
  background-color: #ffffff;
  padding: 1.25rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.videoTitle {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.85rem;
  color: #1e293b;
}

.videoWrapper {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000000;
}

.demoVideo {
  width: 100%;
  max-height: 480px;
  display: block;
  object-fit: contain;
}

/* style video  */




</style>