import { addProducto, updateProduct } from "./products/product.service";
import { ProductDto } from "./products/productDto.model";

const producto1: ProductDto = {
  title: 'adidas training',
  stock: 10,
  size: 'M',
  price: 100,
  tags: ['electronics'],
  categoryId: '1'
}
/*
const dto: ProductDto = {
  categoryId: 2,
};
*/
const res1 = addProducto(producto1);
const res2 = updateProduct(res1.id, {
  title: 'otro titulo',
  price: 1000,
  stock: 44
});

console.log(res1);
console.log(res2);
