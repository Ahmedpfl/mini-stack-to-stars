<script setup>
const props = defineProps({
  question: Object
})
const emit = defineEmits(['answer'])
</script>

<template>
  <div class="card">
    <h2>{{ props.question.text }}</h2>
    <div>
      <button class="btn"
        v-for="option in props.question.options"
        :key="option"
        @click="emit('answer', option)"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<style scoped>

.card {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  background: darkseagreen;
}

.btn {
    flex: content;
    width: 100%;
    margin: 2px;
    padding: 4px;
    border-style: none;
    border-radius: 5rem;
    flex-direction: column;
    background: white;
}

.btn:hover {
  background: #42b883;
  color: white;
}


</style>
