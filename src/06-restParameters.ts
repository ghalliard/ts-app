import { User, ROLES } from "./01-enum";

const user: User ={
  userName: 'gabriel montoya huamani',
  role: ROLES.ADMIN
}

console.log(user);

export const checkUserAdmin = () =>{
  if(user.role === ROLES.ADMIN){
    return 'el usuario es un administrador';
  }
  return 'ustede no es un administrador';
}

console.log(checkUserAdmin());

export const checkUserAdmin1 = (role1: string, role2: string) =>{
  if(user.role === role1){
    return 'el usuario es un administrador';
  }
  if(user.role === role2){
    return 'el usuario es customer';
  }
  return 'ustede no es customer ni administrador';
}

console.log(checkUserAdmin1(ROLES.ADMIN, ROLES.CUSTOMER));

export const checkUserAdmin2 = (roles: string[]) =>{
  if(roles.includes(user.role)){
    return 'El usuario es administrador';
  }
  return 'el usuario no es administrador';
}

console.log(checkUserAdmin2([ROLES.CUSTOMER, ROLES.SELLER]));


export const checkUserAdmin3 = (...roles: string[]) =>{
  if(roles.includes(user.role)){
    return 'El usuario es administrador';
  }
  return 'el usuario no es administrador';
}

console.log(checkUserAdmin3(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER));
