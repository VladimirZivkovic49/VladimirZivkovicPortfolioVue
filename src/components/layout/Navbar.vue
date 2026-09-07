<template>
    <!-- <div>
   
    </div> -->


    <header :class="$style.header">
<div :class="$style.container">
<div :class="$style.logo">
        <span :class="$style.logoText">VŽ</span>
      </div>
<nav :class="$style.nav">
        <a href="#home" :class="$style.link">{{ $t('nav.home') }}</a>
        <a href="#about" :class="$style.link">{{ $t('nav.about') }}</a>
        <a href="#projects" :class="$style.link">{{ $t('nav.projects') }}</a>
        <a href="#contact" :class="$style.link">{{ $t('nav.contact') }}</a>
      </nav>
<button :class="$style.langBtn" @click="toggleLanguage">
        {{ locale === 'sr' ? 'ENG' : 'SRB' }}
      </button>
</div>

</header>

</template>

<script>
import { useI18n } from 'vue-i18n'
    export default {
        name:'NavBarComponent',
    setup() {
    const { locale } = useI18n()

    const toggleLanguage = () => {
      locale.value = locale.value === 'sr' ? 'en' : 'sr'
    }

    // Return mora biti na kraju setup() funkcije, izvan toggleLanguage!
    return {
      locale,
      toggleLanguage
    }
  }

}
</script>

<!-- <style scoped>

</style> -->
<style module>
.header {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  z-index: 100;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logoText {
  font-weight: 800;
  font-size: 1.5rem;
  background: #42b883;
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
}

.nav {
  display: flex;
  gap: 2rem;
}

.link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.2s;
}

.link:hover {
  color: #42b883;
}

.langBtn {
  background: transparent;
  border: 2px solid #42b883;
  color: #42b883;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.langBtn:hover {
  background: #42b883;
  color: white;
}

@media (max-width: 768px) {
  .nav {
    gap: 1rem;
    font-size: 0.9rem;
  }
}
</style>