<template>
<div>
  <span>{{dataQuizType2.question}}</span>
  <textarea class="block border border-yellow-500" id="w3review" name="w3review" rows="4" cols="50"></textarea>
</div>
</template>

<script>
export default {
  name: "QuizType2",
  props: ['dataQuizType2'],
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
