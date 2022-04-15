<template>
<div>
  <span>{{dataQuizType3.question}}</span>
  <div v-for="(answersItem,answersIndex) in dataQuizType3.answers" :key="answersIndex">
    <input type="checkbox" :value="answersIndex" name="check">
    <span>{{answersItem}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "QuizType3",
  props: ['dataQuizType3'],
}
</script>

<style scoped>

</style>
