<template>
    <div>
<section id="home" :class="$style.hero">
    <div :class="$style.content">
      <h1 :class="$style.title">Vladimir Živković</h1>
      <h2 :class="$style.subtitle">Software Developer</h2>
      <p :class="$style.description">
        {{ $t('hero.description') }}
      </p>
      
      <div :class="$style.actions">
        <a href="#projects" :class="$style.primaryBtn">{{ $t('hero.viewWork') }}</a>
        <a href="#contact" :class="$style.secondaryBtn">{{ $t('hero.contactMe') }}</a>
      </div>
    </div>
  </section>
    </div>
</template>

<script>
    export default {
    name:'HerosectionComponent',
    setup() {
    return {}
  }

        
    }
</script>


<style module>
.hero {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background-color: #f8f9fa;
  text-align: center;
}

.content {
  max-width: 800px;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #42b883;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primaryBtn {
  background-color: #42b883;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s;
}

.primaryBtn:hover {
  background-color: #33a06f;
}

.secondaryBtn {
  border: 2px solid #2c3e50;
  color: #2c3e50;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.secondaryBtn:hover {
  background-color: #2c3e50;
  color: white;
}

@media (max-width: 600px) {
  .title {
    font-size: 2.2rem;
  }
  
  .actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>