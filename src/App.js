import { Console, Random, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.Computer_Number = this.Get_Random_Number();
  }

  Get_Random_Number() {
    const RandomNumbers = [];
    while (RandomNumbers.length < 3) {
      const Number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!RandomNumbers.includes(Number)) {
        RandomNumbers.push(Number);
      }
    }
    return RandomNumbers;
  }

  async Get_User_Input() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해 주세요."
    );

    // 입력값이 숫자가 아니거나 중복된 숫자가 있는 경우 예외 발생
    if (!/^[1-9]{3}$/.test(userInput) || new Set(userInput).size !== 3) {
      throw new Error("올바른 형식의 숫자를 입력해주세요.");
    }

    return userInput;
  }

  async play() {
    this.Computer_Number = await this.Get_Random_Number();
    console.log(this.Computer_Number);

    console.log("숫자 야구 게임을 시작합니다.");

    while (true) {
      const User_Input = await this.Get_User_Input();
      console.log(User_Input);
    }
  }
}

export default App;

const app = new App();
app.play();
