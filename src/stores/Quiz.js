import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useQuizStore = defineStore('quiz', () => {
  const started = ref(false)
  const score = ref(0)

  const scoreText = computed(() => `${score.value} punten`)

  function start() { started.value = true; score.value = 0 }
  function addPoint() { score.value++ }

  return { started, score, scoreText, start, addPoint }
})