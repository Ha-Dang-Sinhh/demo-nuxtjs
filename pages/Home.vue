<template>
<div>
  <div v-if="$fetchState.pending">
    <div wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 class="text-center text-white text-xl font-semibold" v-tooltip="'loading'">Loading...</h2>
      <p class="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
    </div>
  </div>
  <div class="my-5 mx-5 md:mx-10">
    <h3 class="text-2xl font-semibold" v-tooltip="'loading'">Sản Phẩm Mới Nhất</h3>
  </div>
  <div class=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-10 mx-5" >
<!--    -->

    <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative" v-if="!$fetchState.pending " v-for="(lastProductsItem,lastProductsindex) in lastProducts" :key="lastProductsindex">
      <Nuxt-link :to="{name:'ProductsDetail',query:{id:lastProductsItem.id}}">
        <img class="w-full h-72 object-cover" :src="lastProductsItem.image.full_image_path || img" alt="">
        <div class="mx-3 my-2 ">
          <div class="flex justify-between items-center">
            <h6 class="text-xl font-semibold">{{lastProductsItem.name}}</h6>
            <i class="fa-solid fa-heart"></i>
          </div>
          <span class="text-xl font-semibold my-4 inline-block">{{lastProductsItem.price}}</span>
          <div class="flex justify-between items-center">
            <div class="flex">
              <span class="inline-block ">-</span>
              <span class="w-8 text-center text-md border border-indigo-200 inline-block ml-1 rounded ">1</span>
              <span class="inline-block ml-1">+</span>
            </div>
            <div class="gap-1 flex">
              <button class="p-2 text-md bg-gray-900 text-white" >
                Add To Cart
              </button>
              <button class="p-2 text-md bg-gray-900 text-white ml-2"><i class="fa-solid fa-share-nodes"></i></button>
            </div>
          </div>
        </div>
      </Nuxt-link>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "Home",
  head: {
    titleTemplate: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    script:[
      {}
    ],
    link:[

    ]
  },
  data(){
    return{
      homeData:null,
      lastProducts:[],
    }
  },
  async fetch(){
    this.homeData = await this.$repositories.home.getHome();
    // console.log(this.homeData.data.lastProducts);
    this.lastProducts = this.homeData.data.lastProducts;
    // if(process.client){
    //   // làm vc vs local ở đây
    // }
  },
  fetchOnServer:false
}
</script>

<style scoped>

</style>
