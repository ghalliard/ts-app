import { BaseModel } from "../base.model";

enum ROLE{
  ADMIN = 'ADMINISTRADOR',
  SELLER = 'VENDEDOR',
  CUSTOMER = 'CLIENTE'
}

export interface User extends BaseModel{
  username: string,
  role: ROLE
}
