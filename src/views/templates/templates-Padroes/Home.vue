<template>
  <Base>
    <div class="home-page">
      <section class="hero-section position-relative text-center text-white">
        <div class="overlay"></div>
        <div class="container py-5 position-relative">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="display-3 fw-bold mb-3">COP30 Belém - A Amazônia no centro do mundo</h1>
              <p class="lead mb-4">Soluções sustentáveis para o mercado de créditos de carbono</p>
              <router-link to="/register" class="btn btn-success btn-lg px-4 py-2 fw-bold">
                Comece agora
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" class="py-5">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="display-5 fw-bold mb-3">Nossos Serviços</h2>
            <div class="divider mx-auto"></div>
          </div>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card h-100 shadow border-0">
                <div class="card-body p-4">
                  <div class="icon-box bg-success mb-4">
                    <i class="bi bi-calculator"></i>
                  </div>
                  <h4 class="card-title fw-bold">Análise de Emissões</h4>
                  <p class="card-text">Medição precisa da pegada de carbono para empresas de todos os portes.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 shadow border-0">
                <div class="card-body p-4">
                  <div class="icon-box bg-success mb-4">
                    <i class="bi bi-arrow-left-right"></i>
                  </div>
                  <h4 class="card-title fw-bold">Mercado de Carbono</h4>
                  <p class="card-text">Plataforma segura para compra e venda de créditos de carbono certificados.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 shadow border-0">
                <div class="card-body p-4">
                  <div class="icon-box bg-success mb-4">
                    <i class="bi bi-tree"></i>
                  </div>
                  <h4 class="card-title fw-bold">Projetos Sustentáveis</h4>
                  <p class="card-text">Desenvolvimento e certificação de projetos de preservação na Amazônia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cop30" class="py-5 bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <img src="https://via.placeholder.com/600x400/157347/ffffff?text=COP30+Belém" 
                   alt="COP30 Belém" 
                   class="img-fluid rounded shadow">
            </div>
            <div class="col-lg-6">
              <h2 class="display-5 fw-bold mb-4">COP30 - Belém 2025</h2>
              <p class="lead mb-4">A maior conferência climática do mundo acontecerá no coração da Amazônia</p>
              <p>Estamos preparando soluções inovadoras para apresentar durante a COP30, posicionando Belém como centro das discussões sobre sustentabilidade e mercado de carbono.</p>
              <ul class="list-unstyled">
                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Plataforma de negociação de créditos</li>
                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Certificação de projetos amazônicos</li>
                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Tecnologia blockchain para rastreabilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 bg-success text-white">
        <div class="container text-center">
          <h2 class="display-5 fw-bold mb-4">Junte-se à revolução verde</h2>
          <p class="lead mb-4">Faça parte do principal ecossistema de créditos de carbono do Brasil</p>
          <router-link to="/register" class="btn btn-light btn-lg px-5 py-3 fw-bold">
            Cadastre-se agora
          </router-link>
        </div>
      </section>
    </div>
  </Base>
</template>

<script>
// A importação e o registro já estão corretos
import Base from '@/views/templates/base.vue';

export default {
  name: 'HomePage',
  components: {
    Base
  }
};
</script>

<style scoped>
/* Seu CSS */
.home-page {
  padding-top: 0;
}

.hero-section {
  padding: 120px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://via.placeholder.com/1920x800/157347/ffffff?text=COP30+Belém');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(21, 115, 71, 0.8) 0%, rgba(4, 62, 36, 0.9) 100%);
}

.icon-box {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #157347;
  border-radius: 2px;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.bg-light {
  background-color: #f8f9fa !important;
}
</style>