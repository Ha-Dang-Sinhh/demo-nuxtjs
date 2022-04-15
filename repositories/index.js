import HomeRepo from "./HomeRepo";
import CategoryRepo from "./CategoryRepo";
import ProductsRepo from "./ProductRepo";
export default ($axios) => ({
  home:HomeRepo($axios),
  category:CategoryRepo($axios),
  product:ProductsRepo($axios),
})
