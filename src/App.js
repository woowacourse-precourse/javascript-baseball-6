import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer";

class App {
  constructor() {
    this.computer = new Computer();
  }

  userNumber = [];
  computerNumber = [];

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
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if (!this.checkUserNumberValidation(input)) {
      throw new Error("[ERROR] 입력이 잘못된 형식입니다.");
    }
    return Array.from(input).map((el) => Number(el));
  };

  calculateGameResult = async (computer, user) => {
    const result = { ball: 0, strike: 0 };

    computer.map((el, idx) => {
      if (user.indexOf(el) > -1) {
        if (user.indexOf(el) === idx) {
          result.strike++;
        } else {
          result.ball++;
        }
      }
    });

    return result;
  };

  async play() {
    try {
      this.gameStart();
      this.computerNumber = this.computer.createRandomNumber();

      while (1) {
        this.userNumber = await this.getUserNumberInput();

        const result = await this.calculateGameResult(
          this.computerNumber,
          this.userNumber
        );

        if (result.ball === 0 && result.strike === 0) {
          Console.print("낫싱");
        } else if (result.strike === 3) {
          Console.print("3스트라이크");
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        } else {
          Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
        }
      }
    } catch (err) {
      Console.print(err.message);
      return;
    }
  }
}

export default App;

const app = new App();
app.play();
