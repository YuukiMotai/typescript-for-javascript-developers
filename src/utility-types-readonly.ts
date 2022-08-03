export {};

type Profile = {
  name: string;
  age: number;
}

const me: Profile = {
  name: 'Yuuki',
  age: 33
}

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 35
};

//friend.age++;

type Yomitori<T> = {readonly [P in keyof T]: T[P];};
type YomitoriProfile = Yomitori<Profile>;
