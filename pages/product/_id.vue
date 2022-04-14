<template>
  <div>
    {{id}}
  </div>
</template>

<script>
export default {
  head(){
    return{
      title:'This Product Detail'+this.id,
      meta:[
        {
          name: "description",
          content:"This is product detail page"+this.id,
        }
      ]
    }
  },
  name: "About",
  data(){
    return{
      id:'',
    }
  },
  mounted() {
    this.id = this.$route.params.id
  },
}
</script>

<style scoped>

</style>
