export enum ROLES{
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  userName: string,
  role: ROLES
}

const gabriel: User = {
  userName: 'gabriel montoya huamani',
  role: ROLES.ADMIN
};

console.log(gabriel.role, gabriel.userName);
