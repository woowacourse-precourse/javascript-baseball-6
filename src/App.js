import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME } from "./Message";

class App {
  constructor() {
    this.computerValue = this.generateRandomNumber();
    this.playGame = true;
  }

  // generateRandomNumber(): 컴퓨터가 1~9 사이의 서로 다른 임의의 수 3개 생성하는 메소드
  // 랜덤으로 생성된 3자리 숫자 배열 반환
  generateRandomNumber = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  };

  // isValidInput(): 사용자 입력 검증 메소드 (0~9까지 3자리 수)
  // 입력 검증 후 true 또는 false 반환
  isValidInput = (userInput) => {
    const inputRegex = /^[0-9]{3}$/.test(userInput);
    return inputRegex;
  };

  // inputNumber(): 사용자로부터 입력 받는 메소드
  // 잘못된 값을 입력했을 시 throw 사용해 예외 처리
  // 사용자에게 입력 받은 값 배열 반환
  getUserValue = async () => {
    const userGuess = await MissionUtils.Console.readLineAsync(GAME.INPUT);
    if (!this.isValidInput(userGuess)) {
      throw new Error("[ERROR] 서로 다른 숫자 3개만 입력 가능합니다.");
    }

    return [...userGuess].map((value) => Number(value));
  };

  // calculateResult(): 입력한 수에 대한 결과를 판단하는 메소드
  // 게임이 종료됐을 때 재시작 여부를 묻기 위한 문자열 반환
  calculateResult = (userGuess) => {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userGuess[i] === this.computerValue[i]) strikes++;
      else if (this.computerValue.includes(userGuess[i])) balls++;
    }

    if (strikes === 3) {
      MissionUtils.Console.print(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
      return "restart";
    } else if (strikes && balls)
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    else if (strikes) MissionUtils.Console.print(`${strikes}스트라이크`);
    else if (balls) MissionUtils.Console.print(`${balls}볼`);
    else MissionUtils.Console.print("낫싱");
  };

  // reGame(): 게임 재시작 or 종료를 수행하는 메소드
  // 1 또는 2가 아닌 숫자를 입력했을 시 throw 사용해 예외 처리
  reGame = async (userValue) => {
    const result = this.calculateResult(userValue);

    if (result) {
      const restart = await MissionUtils.Console.readLineAsync(GAME.RESTART);
      if (restart === "1") this.computerValue = this.generateRandomNumber();
      else if (restart === "2") this.playGame = false;
      else {
        throw new Error("[ERROR] 1 또는 2의 숫자만 입력해주세요.");
      }
    }
  };

  async play() {
    MissionUtils.Console.print(GAME.START);

    while (this.playGame) {
      const userValue = await this.getUserValue();
      await this.reGame(userValue);
    }
  }
}

export default App;
