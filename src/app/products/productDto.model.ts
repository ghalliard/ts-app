import { Producto } from "./product.model";

/*
con type

export type ProductDto = Omit<Producto, "id" | "createdAt" | "updatedAt" | "category">;
*/

export interface ProductDto extends Omit<Producto, "id" | "createdAt" | "updatedAt" | "category">{
  categoryId: number | string,
}
// con type
// export type updateProductDto = Partial<Producto>;

export interface updateProductDto extends Partial<ProductDto>{}

export interface findProductDto extends Readonly<Partial<Omit<Producto, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
}
