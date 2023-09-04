const arrExample: (number | string)[] = [1, 2, 3, 'hola'];

arrExample.push(1);
arrExample.push('que tal');

let user: [string, number];

user = ['gabriel', 22];

const [userName, userAge] = user;

console.log(userName, userAge);

