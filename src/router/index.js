import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import { useQuizStore } from '../stores/Quiz'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/quiz', name: 'quiz', component: QuizView }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const quiz = useQuizStore()
  if (to.name === 'quiz' && !quiz.started) {
    return '/'
  }
})

export default router