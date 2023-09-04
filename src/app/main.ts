import { addProducto } from "./products/product.service";
import { Producto } from "./products/product.model";

const producto1: Producto = {
  id: '123',
  title: 'adidas training',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 10,
  size: 'M',
  category: {
    id: '01',
    createdAt: new Date('2023-08-10'),
    updatedAt: new Date(),
    name: 'zapatillas'
  }
}

addProducto(producto1);
