<template>
  <div>
    <span>{{dataQuizType1.question}}</span>
    <div v-for="(answersItem,answersIndex) in dataQuizType1.answers" :key="answersIndex">
      <input type="radio" :value="answersIndex" name="check">
      <span>{{answersItem}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizType1",
  props: ['dataQuizType1'],
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
