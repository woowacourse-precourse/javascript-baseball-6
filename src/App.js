import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  play() {
    const computer = new Computer();
  }
}

class Computer {
  constructor() {
    this.numbers = [];
  }
  createNumbers() {
    while (this.numbers.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.numbers.includes(num)) {
        this.numbers.push(num);
      }
    }
    console.log(this.numbers);
  }
}

const computer = new Computer();
computer.createNumbers();
