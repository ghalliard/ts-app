const withOutEnd = () =>{
  while(true){
    console.log('nunca pares de aprender');
  }
} // funcion de tipo never

const fail = (message: string) =>{
  throw new Error(message);
}

// funcion con parametro tipo unknown
const example = (input: unknown) =>{
  if(typeof input === 'string'){
    return 'soy un string';
  } else if(Array.isArray(input)){
    return 'soy un array';
  }
  return fail('ups, hubo un error');
}

console.log(example('hola que tal'));
console.log(example([1, 2, 3, 4 , 5]));
console.log(example(1212));
console.log(example('como estas?'));

