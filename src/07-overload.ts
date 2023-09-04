// GABRIEL => ['G', 'A', 'B', 'R', 'I', 'E', 'L']
// ['G', 'A', 'B', 'R', 'I', 'E', 'L'] => GABRIEL

function str(input: string): string[];
function str(input: string[]): string;

/*
function str(input: string | string[]){
  return Array.isArray(input) ? input.join('') : input.split('');
}
*/

function str(input: unknown): unknown{
  if(Array.isArray(input)){
    return input.join('')
  } else if(typeof input === 'string'){
    return input.split('');
  }
}

const var1 = str(['G', 'A', 'B', 'R', 'I', 'E', 'L']);

const var2 = str('GABRIEL');

console.log(`valor numero uno => ${var1.toLocaleLowerCase()}`);
console.log(`valor numero dos => ${var2}`);
