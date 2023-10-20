import { Console, Random } from "@woowacourse/mission-utils";
import { GUIDE_TEXT, NUMBER_SIZE, ERROR_MESSAGE } from "./constant/constant";

class App {
  constructor() {
    this.computerNumber = "";
  }

  gameStart() {
    Console.print(GUIDE_TEXT.GAME_START);
  }

  async getUserChoice() {
    const myNum = await Console.readLineAsync(GUIDE_TEXT.USER_INPUT);

    if (!this.checkValidation(myNum))
      throw new Error(ERROR_MESSAGE.INVALID_ANSWER);
    return myNum;
  }

  checkValidation(input) {
    const str = String(input);
    const pattern = /^[1-9]{3}$/;

    if (str.length === NUMBER_SIZE && pattern.test(str)) {
      return true;
    }
    return false;
  }

  getComputerChoice() {
    let str = "";

    while (str.length < NUMBER_SIZE) {
      const num = Random.pickNumberInRange(1, 9);
      if (!str.includes(String(num))) {
        str += String(num);
      }
    }

    return Number(str);
  }

  assignComputerNumber() {
    this.computerNumber = this.getComputerChoice();
  }

  checkNumbersOfStrikesAndBalls(userInput) {
    let computer = this.computerNumber;
    const userArr = String(userInput).split("");
    const comArr = String(computer).split("");

    const STRIKE = userArr.filter((v, i) => v === comArr[i]).length;
    const BALL = comArr.filter(
      (v, i) => v !== userArr[i] && userArr.includes(v)
    ).length;

    return { STRIKE, BALL };
  }

  compareNumber(strike, ball) {
    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print(GUIDE_TEXT.CORRECT_ANSWER);
      return true;
    }
    if ((strike === 0) & (ball === 0)) {
      Console.print("낫싱");
    }
    if ((strike === 0) & (ball !== 0)) {
      Console.print(`${ball}볼`);
    }
    if ((strike !== 0) & (ball === 0)) {
      Console.print(`${strike}스트라이크`);
    }
    if ((strike !== 0) & (ball !== 0)) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    return false;
  }

  async play() {
    this.gameStart();
    this.assignComputerNumber();
    let isPlaying = true;
    try {
      while (isPlaying) {
        const input = await this.getUserChoice();

        const { STRIKE, BALL } = this.checkNumbersOfStrikesAndBalls(input);
        let result = this.compareNumber(STRIKE, BALL);

        if (result) {
          const reset = await Console.readLineAsync(GUIDE_TEXT.RESTART);
          Console.print(GUIDE_TEXT.RESTART); // 테스트용
          Console.print(reset); // 테스트용

          const pattern = /^[12]$/;
          if (!pattern.test(reset)) throw new Error(ERROR_MESSAGE);

          if (reset === "1") {
            this.assignComputerNumber();
            continue;
          }

          if (reset === "2") {
            isPlaying = false;
            Console.print(GUIDE_TEXT.END_GAME);
          }
        }
      }
    } catch (e) {
      Console.print(ERROR_MESSAGE);

      throw e;
    }
  }
}

export default App;
