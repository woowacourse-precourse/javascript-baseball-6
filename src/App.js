import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer";

class App {
  constructor() {
    this.computer = new Computer();
  }

  userNumber = [];

  gameStart = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  };

  /***   
    1. Number
    2. 1에서 9 사이의 숫자
    3. 서로 다른 세 자리의 숫자
  ***/
  checkUserNumberValidation = (input) => {
    const validRegex = /^[1-9]{3}$/;

    if (validRegex.test(input)) {
      if (new Set(input).size === 3) {
        return true;
      }
    }

    return false;
  };

  getUserNumberInput = async () => {
    try {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (!this.checkUserNumberValidation(input)) {
        throw new Error("[ERROR] 입력이 잘못된 형식입니다.");
      }
      this.userNumber = Array.from(input).map((el) => Number(el));
    } catch (err) {
      Console.print(err.message);
    }
  };

  async play() {
    this.gameStart();
    this.computer.createRandomNumber();
    this.getUserNumberInput();
  }
}

export default App;

const app = new App();
app.play();
