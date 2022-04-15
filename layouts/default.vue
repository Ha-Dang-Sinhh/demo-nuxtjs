<template>
<div>
  <Nav></Nav>
  <Nuxt></Nuxt>
  <Footer></Footer>
</div>
</template>

<script>

export default {
  name: "default",
  head: {
    titleTemplate: 'web bán hàng tự động',
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
      {rel:"stylesheet" ,href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
        integrity:"sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
        crossOrigin:"anonymous" ,referrerpolicy:"no-referrer"}
    ]
  },
}
</script>

<style scoped>

</style>
