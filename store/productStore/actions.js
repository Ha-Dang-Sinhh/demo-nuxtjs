export default {
  async getProducts({commit}) {
    let product = await this.$repositories.product.getProductDetail(4);
    commit('setProducts', product);
  }
}
