<template>
<div class="m-20">
  <div v-for="(dataQuizItem,dataQuizIndex) in dataQuiz" :key="dataQuizIndex">
    <div v-if="dataQuizItem.type == 1">
      <span>Câu {{dataQuizIndex+1}} :</span>
      <QuizType1 v-bind:dataQuizType1="dataQuizItem" ></QuizType1>
    </div>
    <div v-if="dataQuizItem.type == 2">
      <span>Câu {{dataQuizIndex+1}} :</span>
      <QuizType2 v-bind:dataQuizType2="dataQuizItem" ></QuizType2>
    </div>
    <div v-if="dataQuizItem.type == 3">
      <span>Câu {{dataQuizIndex+1}} :</span>
      <QuizType3 v-bind:dataQuizType3="dataQuizItem" ></QuizType3>
    </div>
    <div v-if="dataQuizItem.type == 4">
      <label >Câu {{dataQuizIndex+1}} : </label>
      <span>{{dataQuizItem.question}}</span>
      <QuizType4 v-bind:dataQuizType4="dataQuizItem" ></QuizType4>
    </div>
  </div>
  <button class="mt-10 bg-blue-500 px-4 py-2 rounded">submit</button>
</div>
</template>

<script>
export default {
  name: "Quiz",
  data(){
    return{
      dataQuiz:[]
    }
  },
  mounted() {
    this.dataQuiz = this.$store.state.store.data;
  }
}
</script>

<style scoped>

</style>
