export {};

class Animal {
  constructor (public name: string){}

  run (): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number

  constructor (name: string, speed: number){
    super(name);

    this.speed = speed;
  }

  run (): string {
    const parentMessage = super.run();
    //console.log({parentMessage});

    return `${super.run()} ${this.speed}km/h.`
  }
}

//let dog = new Animal();
//let lion = new Lion();

//console.log(dog.run());
//console.log(lion.run());
console.log(new Animal('Pochi').run());
console.log(new Lion('Simba', 80).run());