export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

//type TwoWayPlayer = {
//  throwingSpeed: number;
//  battingAverage: number;
//}
type TwoWayPlayer = Pitcher1 & Batter1;

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHIromitsu: Batter1 = {
  battingAverage: 0.367
};

const OotaniShouhei : TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286  
};
