<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import QuestionCard from '../components/QuestionCard.vue'
import { useQuizStore } from '../stores/Quiz'

const quiz = useQuizStore()
const router = useRouter()

const questions = [
  { text: 'Hoeveel planeten heeft ons zonnestelsel?', options: ['7', '8', '9'], correct: '8' },
  { text: 'Hoeveel landen vallen er onder de koninklijke Nederlanden?', options: ['1', '4', '12'], correct: '4' },
  { text: 'Ork, ork, ork, soep eet je met een.', options: ['Fork', 'je drinkt soep', 'lepel'], correct: 'lepel' },
]
const index = ref(0)
const current = computed(() => questions[index.value])

function handleAnswer(choice) {
  if (choice === current.value.correct) quiz.addPoint()
  index.value++
}
</script>

<template>
    <div class="card">

    
  <div v-if="current">
    <p>Vraag {{ index + 1 }} van {{ questions.length }}</p>
    <QuestionCard :question="current" @answer="handleAnswer" />
  </div>

  <div v-else>
    <h2>Klaar!</h2>
    <p>Je score: {{ quiz.score }} / {{ questions.length }}</p>
    <button @click="router.push('/')">Opnieuw</button>
  </div>
  </div>
</template>

<style scoped>
    .card {
  max-width: 600px;
  margin: 40px auto;
  padding: 5px;
  border-radius: 12px;
  background: darkseagreen;
}

</style>