
<template>
  <div :class="$style.contactContainer">
    <!-- Naslovna sekcija -->
    <header :class="$style.header">
      <h1>{{ $t('contact.title') }}</h1>
      <p :class="$style.subtitle">{{ $t('contact.subtitle') }}</p>
    </header>

    <!-- Kartice sa informacijama -->
    <div :class="$style.cardsGrid">
      
      <!-- Kartica: Ime i Prezime -->
      <div :class="$style.infoCard">
        <span :class="$style.icon">👤</span>
        <div :class="$style.cardContent">
          <span :class="$style.label">{{ $t('contact.labels.fullName') }}</span>
          <p :class="$style.value">{{ $t('contact.info.name') }}</p>
        </div>
      </div>

      <!-- Kartica: Email -->
      <div :class="$style.infoCard">
        <span :class="$style.icon">✉️</span>
        <div :class="$style.cardContent">
          <span :class="$style.label">{{ $t('contact.labels.email') }}</span>
          <a href="mailto:vlaja432@gmail.com" :class="$style.link">
            {{ $t('contact.info.email') }}
          </a>
        </div>
      </div>

      <!-- Kartica: Telefon -->
      <div :class="$style.infoCard">
        <span :class="$style.icon">📞</span>
        <div :class="$style.cardContent">
          <span :class="$style.label">{{ $t('contact.labels.phone') }}</span>
          <a href="tel:+38163627029" :class="$style.link">
            {{ $t('contact.info.phone') }}
          </a>
        </div>
      </div>

      <!-- Kartica: Lokacija -->
      <div :class="$style.infoCard">
        <span :class="$style.icon">📍</span>
        <div :class="$style.cardContent">
          <span :class="$style.label">{{ $t('contact.labels.location') }}</span>
          <p :class="$style.value">{{ $t('contact.info.location') }}</p>
          <small :class="$style.workMode">{{ $t('contact.info.workMode') }}</small>
        </div>
      </div>

    </div>

    <!-- Sekcija sa profesionalnim mrežama -->
    <div :class="$style.socialSection">
      <h3>{{ $t('contact.socialTitle') }}</h3>
      <div :class="$style.socialButtons">
      <a 
  href="https://www.linkedin.com/in/%C5%BEivkovi%C4%87-vladimir-7319702b" 
  target="_blank" 
  rel="noopener noreferrer"
  :class="$style.socialBtn"
>
  <span>🔗</span> LinkedIn
</a>
        <a 
          href="https://github.com/VladimirZivkovic49" 
          target="_blank" 
          rel="noopener noreferrer"
          :class="$style.socialBtn"
        >
          <span>💻</span> GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
    name:'ContactComponent',
           
    }
</script>

<style module>
.contactContainer {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.25rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  margin-top: 20px;  
  color: #64748b;
  font-size: 1.1rem;
}

/* Grid sa 2 kolone na desktopu, 1 na mobilnom */
.cardsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

/* Izgled svake pojedinačne kartice */
.infoCard {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: left; /* Poravnanje ulevo unutar kartice deluje mnogo čistije */
}

.infoCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: #cbd5e1;
}

/* Ikonica sa upečatljivom pozadinom */
.icon {
  font-size: 1.8rem;
  background-color: #f1f5f9;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cardContent {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.8rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.value {
  font-size: 1.05rem;
  color: #0f172a;
  font-weight: 600;
  margin: 0.2rem 0 0 0;
}

.link {
  font-size: 1.05rem;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  margin-top: 0.2rem;
  transition: color 0.2s ease;
}

.link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.workMode {
  color: #10b981;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 0.2rem;
}

/* Donji deo za društvene mreže */
.socialSection {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.socialSection h3 {
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 1.25rem;
  font-weight: 700;
}

.socialButtons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Dugmad u obliku modernih pilula za LinkedIn i GitHub */
.socialBtn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.75rem;
  background-color: #0f172a;
  color: #ffffff !important;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.socialBtn:hover {
  background-color: #1e293b;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Responsiveness za telefone */
@media (max-width: 640px) {
  .cardsGrid {
    grid-template-columns: 1fr; /* Na telefonima 1 kartica po redu */
  }
}

</style>