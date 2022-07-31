export {};

interface Profile {
  underTwenty: boolean;
  name: string
  
  [index: string]: string | number | boolean
}

let profile:  Profile  = {
  name: 'Ham',
  underTwenty: false
};

profile.name = 'Yuuki';
// {{[index: typeForIndex]:typeForValue}}
profile.age = 43;
profile.nationality = 'Japan';