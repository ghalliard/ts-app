import { Producto } from "./product.model";

let productArr: Producto[] = [];

export const addProducto = (data: Producto) =>{
  productArr.push(data);
  console.log(productArr);
}
