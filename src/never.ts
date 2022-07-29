export {};

function error(message: string): never{
  throw new Error(message);
}

try {
  let result = error('error test')
  console.log({ result })
} catch (error) {
  console.log({ error })
}

let foo: void = undefined;
//let boo: never = null;
let bar: never = error('only me!');