export const createProduct = (
  id: string | number,
  isNew: boolean = false,
  stock: number = 0,
) =>{
  return {
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1);
console.log(p1);
