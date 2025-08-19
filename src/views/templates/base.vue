<template>
  <div :class="{'dark-mode': darkMode}">
    <nav class="navbar navbar-expand-lg" :class="darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'">
      <div class="container">
        <router-link class="navbar-brand" to="/home">
          <i class="bi bi-tree-fill me-2 text-success"></i>
          Olho no Verde
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">COP30</a>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-sm me-2" @click="toggleTheme" :title="darkMode ? 'Modo Claro' : 'Modo Escuro'">
              <i :class="darkMode ? 'bi bi-sun' : 'bi bi-moon'"></i>
            </button>
            <router-link to="/login" class="btn btn-outline-success me-2">Login</router-link>
            <router-link to="/register" class="btn btn-success">Cadastrar</router-link>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <slot></slot>
    </main>

    <footer class="py-4" :class="darkMode ? 'bg-dark text-light' : 'bg-light text-dark'">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5>Olho no Verde</h5>
            <p>Soluções em créditos de carbono para um futuro sustentável</p>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Contato</h5>
            <p>Belém, PA<br>contato@olhonoverde.com.br<br>(55) 1234-5678</p>
          </div>
          <div class="col-md-4">
            <h5>COP30 - Belém 2025</h5>
            <p>Juntos pela sustentabilidade da Amazônia</p>
          </div>
        </div>
        <div class="text-center mt-3">
          <small>&copy; 2023 Olho no Verde. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
  data() {
    return {
      darkMode: localStorage.getItem('darkMode') === 'true' || false
    }
  },
  watch: {
    darkMode(newVal) {
      document.body.style.backgroundColor = newVal ? '#121212' : '#fff';
      localStorage.setItem('darkMode', newVal);
    }
  },
  mounted() {
    this.updateBodyTheme();
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      this.updateBodyTheme();
    },
    updateBodyTheme() {
      document.body.style.backgroundColor = this.darkMode ? '#121212' : '#fff';
    }
  }
}
</script>

<style scoped>
.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
  min-height: 100vh;
}

.navbar-brand {
  font-weight: 700;
  letter-spacing: 0.5px;
}

.btn-outline-success {
  border-width: 2px;
}

footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.dark-mode footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>