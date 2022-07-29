export {};

type Mojiretsu = string;

let hello: Mojiretsu = 'Hello';
let world: string = 'World';

const example1 = {
  name: 'Ham',
  age: 43
};

type Profile = {
  name: Mojiretsu;
  age: number;
};

const example2: Profile = {
  name: 'yuuki',
  age: 33
};

type Profile2 = typeof example1;