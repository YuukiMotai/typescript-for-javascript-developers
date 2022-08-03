export {};

class Person {
  name: string;
  age: number;

  constructor (name:string, age:number) {
    this.name = name,
    this.age = age
  }
}

const taro = new Person('Taro', 30);

console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Yuuki', 33];
const yuuki = new Person (...profile);

console.log(yuuki);

type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
