export {};

function add (a: number, b: number) {
  return a + b;
} 

console.log(add(3,8));

type ReturnTypeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
  ) => infer R //ジェネリクス型を宣言できる
    ? R 
    : any;

