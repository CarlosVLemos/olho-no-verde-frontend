<template>
  <Base>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow">
            <div class="card-header bg-success text-white p-4">
              <h2 class="text-center mb-0">Criar Conta</h2>
            </div>
            <div class="card-body p-4">
              <form @submit.prevent="handleSignup">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName" class="form-label">Nome Completo</label>
                    <input type="text" class="form-control" id="firstName" v-model="firstName" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="username" class="form-label">Apelido</label>
                    <input type="text" class="form-control" id="username" v-model="username" required>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="email" required>
                </div>
                
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="password" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="password" v-model="password" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="confirmPassword" class="form-label">Confirmar Senha</label>
                    <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="nationality" class="form-label">Nacionalidade</label>
                  <select class="form-select" id="nationality" v-model="nationality" required>
                    <option value="">Selecione...</option>
                    <option value="BR">Brasil</option>
                    <option value="US">Estados Unidos</option>
                    <option value="AR">Argentina</option>
                    <option value="DE">Alemanha</option>
                    <option value="other">Outra</option>
                  </select>
                </div>
                
                <div class="mb-3" v-if="nationality === 'BR'">
                  <label for="cpf" class="form-label">CPF</label>
                  <input type="text" class="form-control" id="cpf" v-model="cpf" required>
                </div>
                
                <div class="mb-3">
                  <label class="form-label">Telefone</label>
                  <div class="input-group">
                    <select class="form-select" style="max-width: 120px;" v-model="phoneCode">
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+54">🇦🇷 +54</option>
                      <option value="+49">🇩🇪 +49</option>
                    </select>
                    <input type="tel" class="form-control" v-model="phone" required>
                  </div>
                </div>
                
                <div class="form-check mb-4">
                  <input class="form-check-input" type="checkbox" id="terms" v-model="agreeTerms" required>
                  <label class="form-check-label" for="terms">
                    Concordo com os Termos de Uso e Política de Privacidade
                  </label>
                </div>
                
                <div class="d-grid">
                  <button type="submit" class="btn btn-success btn-lg">Cadastrar</button>
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
  name: 'SignupForm',
  components: {
    Base // Registra o componente
  },
  data() {
    return {
      firstName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      nationality: '',
      cpf: '',
      phoneCode: '+55',
      phone: '',
      agreeTerms: false
    }
  },
  methods: {
    handleSignup() {
      // Validação e envio
      if (this.password !== this.confirmPassword) {
        alert('As senhas não coincidem!');
        return;
      }
      
      console.log('Signup data:', {
        firstName: this.firstName,
        username: this.username,
        email: this.email,
        password: this.password,
        nationality: this.nationality,
        cpf: this.cpf,
        phone: this.phoneCode + this.phone
      });
      
      // Redirecionar após cadastro
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

.form-check-input:checked {
  background-color: #157347;
  border-color: #157347;
}
</style>