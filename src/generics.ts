export {};

//const echo = (arg: number): number => {
// return arg;
//};

//const echo = (arg: string): string => {
//  return arg;
//};

const echo = <T>(arg: T): T =>{
  return arg
}

console.log(echo<string>('YuukiMotai'));
console.log(echo<number>(33));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor (public value: T){}

  echo (): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello Generics.').echo());
console.log(new Mirror<boolean>(true).echo());

