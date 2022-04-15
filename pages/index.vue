<template>
  <div>
      <Tutorial/>
<!--    &lt;!&ndash;  <NuxtLink :to="{name:'product-id',params:{'id':1000}}">goToProduct 1000</NuxtLink>&ndash;&gt;-->
<!--    <div v-if="$fetchState.pending">-->
<!--      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>-->
<!--    </div>-->
<!--    <div v-if="!$fetchState.pending ">{{homeData}}</div>-->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data(){
    return{
      homeData:null,
    }
  },
  // async asyncData({$axios}){
  //   const {data} = await $axios.get('/home')
  //   return{
  //     data:data
  //   }
  // },
  // async fetch(){
  //   this.homeData =await this.$repositories.home.getHome();
  //   if(process.client){
  //     // làm vc vs local ở đây
  //   }
  // },
  // fetchOnServer:false
}
</script>
