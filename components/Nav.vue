<template>
  <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10">
    <router-link :to="{name:'ListProducts'}">
      <img class="w-16 h-16 " src="https://2momart.vn/upload/medium/042020/ma-giam-gia-shopee.png" alt="">
    </router-link>

    <div class="flex items-center gap-4">
      <div class="md:inline-block hidden">
        <ul class="flex items-center gap-4 ">
          <li><a href="">Thông báo</a></li>
<!--          <Nuxt-link :to="{name:'ListOrder'}">-->
<!--            <li><a href="">List Order</a></li>-->
<!--          </Nuxt-link>-->
<!--          <li ><a class=" cursor-pointer" >Edit Profile</a></li>-->
<!--          <Nuxt-link :to="{name:'Signup'}">-->
<!--            <li><a href="">Đăng ký</a></li>-->
<!--          </Nuxt-link>-->
<!--          <Nuxt-link :to="{name:'Login'}">-->
<!--            <li><a href="">Đăng nhập</a></li>-->
<!--          </Nuxt-link>-->
        </ul>
      </div>

      <div class="md:hidden inline-block ">
        <i class="fa-solid fa-bars text-2xl"></i>
      </div>
      <div class=" relative">
<!--        <Nuxt-link :to="{name:'CartProducts'}">-->
          <i class="fa-solid text-amber-600 fa-cart-plus text-2xl"></i>
<!--        </Nuxt-link>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data(){
    return{

    }
  },
  methods: {

  },
}


</script>

<style scoped>

</style>
