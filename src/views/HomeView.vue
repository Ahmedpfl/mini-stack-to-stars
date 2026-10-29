<script setup>
import { useQuizStore } from '../stores/Quiz'
import { useRouter } from 'vue-router'

const router = useRouter()
const quiz = useQuizStore()

function startQuiz() {
  quiz.start()
  router.push('/quiz')
}
</script>

<template>
  <h1>Mini-quiz</h1>
  <p>3 vragen. Elk goed antwoord is 1 punt.</p>
  <button @click="startQuiz">Start</button>
</template>
