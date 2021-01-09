//rewritten example from Syllabus
class Human {
  name: string;
  age: number;
  iq: number;

  constructor(name: string, age: number, iq: number) {
    this.name = name;
    this.age = age;
    this.iq = iq;
  }

  public isSmart(): boolean {
    return this.iq > 100;
  }

  public isNameless(): boolean {
    return this.name === 'unknown' || this.name === '';
  }

  public beSmarter() {
    return 100 - this.iq;
  }
}

const human2 = new Human('Hector', 1, 67);
const human3 = new Human('Laci', 18, 110);

if (human2.isSmart()) {
  console.log(`${human2.name} is smart, with iq: ${human2.iq}`);
} else {
  console.log(
    `${human2.name} be smarter, increase your iq with ${human2.beSmarter()} `
  );
}

if (human3.isSmart()) {
  console.log(`${human3.name} is smart, with iq: ${human3.iq}`);
} else {
  console.log(
    `${human3.name} be smarter, increase your iq with ${human3.beSmarter} `
  );
}
