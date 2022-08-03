export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
}

type simpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type simeleProfile2 = Omit<DetailedProfile, 'weight'>

type MyOmit = Pick<DetailedProfile, 'name'|'weight'>;
type MySmallProfile = MyOmit;

