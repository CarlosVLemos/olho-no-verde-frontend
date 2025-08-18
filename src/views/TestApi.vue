<template>
  <div>
    <h2>Teste API</h2>
    <p>A resposta da API é:</p>
    <pre>{{ result }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

const result = ref(null)

onMounted(async () => {
  result.value = 'Carregando...';
  try {
    // A chamada correta, com a URL em formato de string
    const { data } = await api.get('/ping/');
    result.value = data;
  } catch (err) {
    // Captura e exibe o erro real no console e na tela
    console.error('Erro ao chamar a API:', err);
    result.value = {
      message: 'Erro ao conectar com a API.',
      error: err.message
    };
  }
})
</script>

<style scoped>
pre {
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>