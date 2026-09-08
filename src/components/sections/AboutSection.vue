<template>
  
<section id="about" :class="$style.about">
    <div :class="$style.container">
      <h2 :class="$style.title">{{ $t('about.title') }}</h2>

      <div :class="$style.content">
        <!-- Sidebar sa slikom -->
        <div :class="$style.sidebar">
          <div :class="$style.imageWrapper">
            <img :src="profileImg" alt="Vladimir Živković" :class="$style.profileImage" />
          </div>
        </div>

        <!-- Glavni sadržaj -->
        <div :class="$style.mainContent">
          <!-- Profil -->
          <div :class="$style.card">
            <h3 :class="$style.cardTitle">{{ $t('about.profileTitle') }}</h3>
            <p :class="$style.text">{{ $t('about.text1') }}</p>
            <p :class="$style.text">{{ $t('about.text2') }}</p>
            <p :class="$style.text">{{ $t('about.text3') }}</p>
            <p :class="$style.text">{{ $t('about.text4') }}</p>
          </div>

          <!-- Iskustvo & Obrazovanje -->
          <div :class="$style.twoColumns">
            <!-- Radno iskustvo -->
            <div :class="$style.card">
              <div :class="$style.cardHeader">
                <h3 :class="$style.cardTitle">{{ $t('about.experienceTitle') }}</h3>
                <span :class="$style.badge">{{ $t('about.experiencePeriod') }}</span>
              </div>
              <h4 :class="$style.roleTitle">{{ $t('about.role') }}</h4>
              <p :class="$style.company">{{ $t('about.company') }}</p>
              <ul :class="$style.compactList">
                <li v-for="(item, idx) in $tm('about.experienceItems')" :key="idx">{{ item }}</li>
              </ul>
            </div>

            <!-- Obrazovanje & Usavršavanje -->
            <div :class="$style.card">
              <h3 :class="$style.cardTitle">{{ $t('about.educationTitle') }}</h3>
              <h4 :class="$style.roleTitle">{{ $t('about.degree') }}</h4>
              <p :class="$style.company">{{ $t('about.faculty') }}</p>
              
              <h4 :class="[$style.roleTitle, $style.marginTop]">{{ $t('about.trainingTitle') }}</h4>
              <ul :class="$style.compactList">
                <li v-for="(item, idx) in $tm('about.trainingItems')" :key="idx">{{ item }}</li>
              </ul>
            </div>
          </div>

          <!-- Tehnologije -->
          <div :class="$style.card">
            <h3 :class="$style.cardTitle">{{ $t('about.skillsTitle') }}</h3>
            <div :class="$style.skillsGrid">
              <div v-for="categoryKey in ['backend', 'frontend', 'desktop', 'tools']" :key="categoryKey" :class="$style.skillGroup">
                <h4 :class="$style.categoryTitle">{{ $t(`about.skills.${categoryKey}.title`) }}</h4>
                <ul :class="$style.compactList">
                  <li v-for="(item, idx) in $tm(`about.skills.${categoryKey}.items`)" :key="idx">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script>

import profileImg from '../../assets/profileImage.jpg'
    export default {
        name:'AboutSectionComponent',
 
  setup() {
    const skillGroups = {
      backend: [
        '.NET 5–9 (ASP.NET Core Web API)',
        'REST API & HTTP protokol',
        'Entity Framework / EF Core',
        'SQL (MS SQL, PostgreSQL)',
        'Repository & Unit of Work'
      ],
      frontend: [
        'Vue.js',
        'Angular & TypeScript',
        'React (Hooks)',
        'HTML5, CSS3, Bootstrap'
      ],
      desktop: [
        'C#, WPF (MVVM), XAML',
        'Data Binding & Commands',
        'Asinhrono programiranje (async/await)',
        'UI logika & state management'
      ],
      tools: [
        'Git & Azure DevOps',
        'Agile / Scrum',
        'Clean Architecture principi',
        'Produkcioni rad'
      ]
    }

    return {
      skillGroups,
      profileImg
    }
  }

    }
</script>


<style module>
.about {
  padding: 3.5rem 1.5rem;
  background-color: #ffffff;
}

.container {
  max-width: 1050px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
}

.title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background-color: #42b883;
  margin: 0.4rem auto 0;
  border-radius: 2px;
}

.content {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 2rem;
  align-items: start;
}

.sidebar {
  display: flex;
  justify-content: center;
}

.imageWrapper {
  position: sticky;
  top: 90px;
}

.profileImage {
  width: 180px;
  height: 220px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.mainContent {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.twoColumns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.card {
  background-color: #f8f9fa;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.cardTitle {
  font-size: 1.15rem;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.roleTitle {
  font-size: 0.95rem;
  color: #2c3e50;
  font-weight: 600;
  margin-top: 0.2rem;
}

.company {
  font-size: 0.85rem;
  color: #42b883;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.marginTop {
  margin-top: 0.8rem;
}

.badge {
  background-color: #e6f4ed;
  color: #2e7d32;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-weight: 600;
}

.text {
  font-size: 0.92rem;
  line-height: 1.5;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.text:last-child {
  margin-bottom: 0;
}

.compactList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.compactList li {
  font-size: 0.88rem;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  line-height: 1.35;
}

.compactList li::before {
  content: "•";
  color: #42b883;
  font-weight: bold;
  font-size: 1rem;
  position: absolute;
  left: 0;
  top: -1px;
}

.skillsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.6rem;
}

.skillGroup {
  background-color: #ffffff;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.categoryTitle {
  font-size: 0.9rem;
  color: #42b883;
  font-weight: 700;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 868px) {
  .content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .twoColumns, .skillsGrid {
    grid-template-columns: 1fr;
  }

  .sidebar {
    justify-content: center;
  }

  .imageWrapper {
    position: static;
  }
}
</style>