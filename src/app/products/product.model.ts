import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Size = 'S' | 'M' | 'L' | 'XL';
export interface Producto extends BaseModel{
  title: string,
  stock: number,
  size?: Size,
  category: Category
}
