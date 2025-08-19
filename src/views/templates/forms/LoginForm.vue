<template>
  <Base>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-header bg-success text-white p-4">
              <h2 class="text-center mb-0">Login</h2>
            </div>
            <div class="card-body p-4">
              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label for="loginIdentifier" class="form-label">Email ou Apelido</label>
                  <input type="text" class="form-control" id="loginIdentifier" v-model="identifier" required>
                </div>
                <div class="mb-3">
                  <label for="loginPassword" class="form-label">Senha</label>
                  <input type="password" class="form-control" id="loginPassword" v-model="password" required>
                </div>
                <div class="d-grid mb-3">
                  <button type="submit" class="btn btn-success btn-lg">Entrar</button>
                </div>
                <div class="text-center">
                  <router-link to="/cadastro">Não tem conta? Cadastre-se</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Base>
</template>

<script>
// Importa o componente base
import Base from '@/views/templates/base.vue';

export default {
  name: 'LoginForm',
  components: {
    Base // Registra o componente
  },
  data() {
    return {
      identifier: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // Lógica de autenticação
      console.log('Login attempt:', this.identifier, this.password);
      // Redirecionar para dashboard após login
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  overflow: hidden;
}

.card-header {
  border-bottom: none;
}

.btn-success {
  background-color: #157347;
  border-color: #157347;
}

.btn-success:hover {
  background-color: #0d5a35;
  border-color: #0d5a35;
}
</style>