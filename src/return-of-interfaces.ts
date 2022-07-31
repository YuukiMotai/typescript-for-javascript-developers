export {};

class Magician {}
class Bishop {}

class Taro extends Magician {}

interface Kenja {
  ionazun (): void;
}
interface Senshi {
  DoubleAttack(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  DoubleAttack (): void{
    console.log('Double Attack');
  }
}

const jiro = new Jiro();
jiro.DoubleAttack();
jiro.ionazun();
