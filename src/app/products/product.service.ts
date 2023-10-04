import { Producto } from "./product.model";
import { ProductDto, findProductDto, updateProductDto } from "./productDto.model";

let productArr: Producto[] = [];

export const addProducto = (data: ProductDto): Producto =>{
  const id = Math.floor(Math.random() * 100);
  const newProduct: Producto = {
    ...data,
    id: id,
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      name: "electronics",
      id: data.categoryId,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  };
  productArr.push(newProduct);
  return newProduct;
}
export const updateProduct = (id: Producto['id'], data: updateProductDto): Producto =>{
  const productIndex = productArr.findIndex(item => item.id == id);
  const product = productArr[productIndex];
  const updateProduct = {
    ...product,
    ...data
  };
  productArr.splice(productIndex, 1, updateProduct);
  return updateProduct;
}

export const findProduct = (data: findProductDto): Producto[] =>{
  // data.title = 'hola'; -> error
  const products: Producto[] = [];

  // data.tags = []; -> error
  // data.tags.push(); -> error

  // code
  return products;
}
