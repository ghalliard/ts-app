import { BaseModel } from "../base.model";
import { Producto } from "../products/product.model";
import { User } from "../user/user.model";

interface order extends BaseModel{
  products: Producto[],
  user: User
}
