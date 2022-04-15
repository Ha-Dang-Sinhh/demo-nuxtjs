export default ($axios)=>({
  getProductDetail(id){
    return $axios.get('products/'+id)
  },
})
