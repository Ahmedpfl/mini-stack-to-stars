<script setup>
import { useQuizStore } from './stores/Quiz'

const quiz = useQuizStore()
</script>

<template>
  <header>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/quiz">Quiz</router-link>
    </nav>
    <span>Score: {{ quiz.score }}</span>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 12px;
}
</style>
