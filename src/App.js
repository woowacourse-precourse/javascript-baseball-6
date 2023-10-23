import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log(`숫자 야구 게임을 시작합니다.`);
    const computer = new Computer(); // Computer 클래스의 인스턴스를 생성
    computer.createNumbers(); // Computer 클래스의 createNumbers() 메서드를 호출해서 app.play()로 쓸 수 있게 만든다.

    try {
      const user = new User();
      await user.createInputs();
    } catch (error) {
      console.error(error);
    }
  }
}

class Computer {
  // Computer 클래스에 numbers 로 빈 배열을 만든다. 이 배열안에는 컴퓨터가 생성할 난수를 저장할 곳이다.
  constructor() {
    this.numbers = [];
  }
  // createNumbers 메서드는 컴퓨터의 숫자를 생성한다.
  createNumbers() {
    // while문을 통해서 배열에 숫자가 3개 들어갈 때까지 반복한다
    while (this.numbers.length < 3) {
      // 프리코스에 제공된 라이브러리로 1 - 9의 난수를 만들고 num에 저장한다
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      // while문을 통해서 하나씩 숫자가 반복될 때 생성된 난수 중 numbers 배열에 포함되지 않으면 (true)로 중복되지 않게 3개의 수를 생성하게 된다.
      if (!this.numbers.includes(num)) {
        this.numbers.push(num);
      }
    }
    // numbers 배열에 저장된 3개의 난수를 출력한다
    console.log(this.numbers);
  }
}

class User {
  constructor() { }

  async createInputs() {
    const userInput = [];

    try {
      const input = await MissionUtils.Console.readLineAsync(`숫자를 입력해주세요 : `);
      userInput.push(parseInt(input));
      console.log(userInput);

      // parseInt() 함수는 주어진 문자열을 정수로 변환할 수 있을 때까지 반환을 시도하고, 변환이 불가능한 경우 NaN을 반환한다
      // 따라서 parseInt() 함수를 사용하면 문자나 숫자 상관없이 항상 NaN이 아닌 값을 반환한다
      // 사용자가 숫자로 입력하더라도 parseInt()함수로 변환할 때 숫자로 변환될 수 없는 부분까지 변환을 시도하면, 결과적으로 NaN이 된다.
      // 이 경우에 Number.isNaN()을 사용하면 true가 반환되기에 문자를 넣어도 에러가 발생하지 않고 그냥 출력된거 같다.
      // 따라서 isNaN을 사용하여 사용자의 입력이 숫자인지만 확인한다.
      if (isNaN(input)) {
        throw new Error(`숫자를 입력하셔야 합니다. 프로그램이 종료 됩니다.`);
      }
    } catch (error) {
      throw error;
    }
  }
}


const app = new App();
app.play().catch(error => {
  console.error(error);
});
