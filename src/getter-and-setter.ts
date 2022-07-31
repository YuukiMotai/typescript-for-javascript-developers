export {};

// owner :所有者
// 初期化時に設定できる
// 途中変更不可にする
// 参照できるようにする
// secretNumber: 個人番号
// 初期化時に設定できる
// 途中変更可
//　参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor (owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner () {
    return this._owner;
  }

  set secretNumber (secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint () {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('YuukiMotai', 35273301);
card.secretNumber = 3375279;
console.log(card.debugPrint());
//card.owner = 'Yuuki'
console.log(card.owner);
//card.secretNumber;
//card._secretNumber;