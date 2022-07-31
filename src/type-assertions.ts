export {};

let name: any = 'Type Assertive.';

let length = name.length as number;
//let length = (name as string).length;
//let length = (<string>name).length 非推奨　JSXと似ているため
//length = 'foo';

console.log(length);
