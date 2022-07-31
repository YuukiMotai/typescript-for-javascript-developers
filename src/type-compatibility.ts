export {};

let fooCompatible: any;
let compatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = compatible;

console.log(fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 2;

//fooInCompatible = barInCompatible;

let fooString: string ;
let barString: string = 'barSt';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1989 = 1989;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor (public age: number, public name: string){

  }
}

let me: Animal;
me = new Person(33, 'YuukiMotai');
console.log(me);//構造的部分型の利用