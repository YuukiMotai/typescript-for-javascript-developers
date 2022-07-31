export {};

class VisaCard {
  constructor (public readonly owner: string) {}
}

let myVisaCard = new VisaCard('YuukiMotai');
//myVisaCard.owner = 'Ham';
console.log(myVisaCard.owner);