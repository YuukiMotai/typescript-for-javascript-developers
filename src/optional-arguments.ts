export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
  ): number => {
    const bmi = weight / (height * height);
    if (printable) {
      console.log({ bmi })
    }

    return bmi;
};

bmi(1.75, 78);

// bmi(身長・体重・コンソール出力するかどうか)
