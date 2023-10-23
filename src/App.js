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

    try {
      const input = await MissionUtils.Console.readLineAsync(`숫자를 입력해주세요 : `);
      // 숫자로 구성된 배열로 전환
      const numbers = input.split('').map(num => parseInt(num)); // num은 map함수의 매개변수 ex) const map1 = array1.map((x) => x * 2);

      if (numbers.some(isNaN) || numbers.length !== 3) {
        throw new Error(`숫자 3개를 올바르게 입력해주세요.`); // some 함수로 numbers 배열 중 NaN이 있는지 확인한다.
      }
      // userInput 배열에 숫자를 넣는다
      const userInput = numbers;
      console.log(userInput);


    } catch (error) {
      throw error;
    }
  }
}


const app = new App();
app.play().catch(error => {
  console.error(error);
});
