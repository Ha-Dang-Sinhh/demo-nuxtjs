<template>
<div>
  <select name="cars" id="cars">
    <option v-for="(answersItem,answersIndex) in dataQuizType4.answers" :key="answersIndex" :value="answersIndex">{{answersItem}}</option>
  </select>
</div>
</template>

<script>
export default {
  name: "QuizType4",
  props: ['dataQuizType4'],
}
</script>

<style scoped>

</style>
