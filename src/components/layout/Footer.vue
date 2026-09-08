
<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <div :class="$style.content">
        <!-- Brending i kratak opis -->
        <div :class="$style.brandSection">
          <div :class="$style.logo">VŽ</div>
          <p :class="$style.brandText">
            Vladimir Živković — Software Developer
          </p>
        </div>

        <!-- Brza navigacija -->
        <nav :class="$style.nav">
          <router-link to="/" :class="$style.navLink">{{ $t('nav.home') || 'Početna' }}</router-link>
          <router-link to="/about" :class="$style.navLink">{{ $t('nav.about') || 'O meni' }}</router-link>
          <router-link to="/projects" :class="$style.navLink">{{ $t('nav.projects') || 'Projekti' }}</router-link>
          <router-link to="/contact" :class="$style.navLink">{{ $t('nav.contact') || 'Kontakt' }}</router-link>
        </nav>
      </div>

      <!-- Donja linija sa autorskim pravima -->
      <div :class="$style.bottomBar">
        <p>&copy; {{ currentYear }} Vladimir Živković. Sva prava zadržana.</p>
      </div>
    </div>
  </footer>
</template>
 
<script>
import { computed } from 'vue'

export default {
  name: 'FooterComponent',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear
    }
  }
}
</script>


<style module>
.footer {
  background-color: #0f172a; /* Tamna elegancija usklađena sa dugmadima na Contact stranici */
  color: #94a3b8;
  padding: 3rem 1.5rem 1.5rem;
  margin-top: 4rem;
  border-top: 1px solid #1e293b;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #1e293b;
}

.brandSection {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  background: #10b981; /* Vaša prepoznatljiva zelena boja sa zaglavlja */
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  letter-spacing: 0.05em;
}

.brandText {
  color: #f8fafc;
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
}

.nav {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.navLink {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.navLink:hover {
  color: #38bdf8; /* Blago svetloplava pri prelasku mišem */
}

.bottomBar {
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
}

/* prilagođavanje za mobilne ekrane */
@media (max-width: 640px) {
  .content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .brandSection {
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav {
    justify-content: center;
    gap: 1rem;
  }
}
</style>