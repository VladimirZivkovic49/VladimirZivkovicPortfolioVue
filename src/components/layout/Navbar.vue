<template>
  <header :class="$style.navbar">
    <div :class="$style.container">
      <!-- Logo -->
      <a href="#home" :class="$style.logo">
        <span :class="$style.logoText">VŽ</span>
      </a>

      <!-- Hamburger dugme za mobilne ekrane -->
      <button 
        :class="[$style.hamburger, isMenuOpen && $style.isOpen]" 
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navigacioni linkovi i dugme za jezik (spojeni u mobilni meni) -->
      <nav :class="[$style.navLinks, isMenuOpen && $style.active]">
        <a href="#home" :class="$style.link" @click="closeMenu">{{ $t('nav.home') }}</a>
        <a href="#about" :class="$style.link" @click="closeMenu">{{ $t('nav.about') }}</a>
        <a href="#projects" :class="$style.link" @click="closeMenu">{{ $t('nav.projects') }}</a>
        <a href="#contact" :class="$style.link" @click="closeMenu">{{ $t('nav.contact') }}</a>

        <button :class="$style.langBtn" @click="toggleLanguage">
          {{ locale === 'sr' ? 'ENG' : 'SRB' }}
        </button>
      </nav>
    </div>
  </header>
</template>


<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'NavbarComponent',
  setup() {
    const { locale } = useI18n()
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    const toggleLanguage = () => {
      locale.value = locale.value === 'sr' ? 'en' : 'sr'
    }

    return {
      locale,
      isMenuOpen,
      toggleMenu,
      closeMenu,
      toggleLanguage
    }
  }
}
</script>

<style module>
.navbar {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
}

.logoText {
  background: #10b981;
  color: #ffffff;
  font-weight: 800;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  font-size: 1.2rem;
}

.navLinks {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.link {
  color: #334155;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.link:hover {
  color: #10b981;
}

.langBtn {
  border: 1px solid #10b981;
  color: #10b981;
  background: transparent;
  padding: 0.38rem 0.85rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.langBtn:hover {
  background-color: #10b981;
  color: #ffffff;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  width: 100%;
  height: 3px;
  background-color: #334155;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Mobilni odziv (ekrani ispod 768px) */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navLinks {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #ffffff;
    flex-direction: column;
    padding: 1.5rem 0;
    gap: 1.25rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #e2e8f0;
    display: none;
  }

  .navLinks.active {
    display: flex;
  }

  /* Animacija hamburgera u 'X' */
  .hamburger.isOpen span:nth-child(1) {
    transform: translateY(8.5px) rotate(45deg);
  }
  .hamburger.isOpen span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.isOpen span:nth-child(3) {
    transform: translateY(-8.5px) rotate(-45deg);
  }
}
</style>