import { Console, Random } from "@woowacourse/mission-utils";
import MSG from "./consts/msg.js";
import ErrorValidate from "./Error.js";
import Computer from "./Computer.js";

const { GAME, ERROR, GAME_SELECT_REPLAY } = MSG;
const { GAME_START, GAME_END, GAME_INPUT, GAME_SUCCESS } = GAME;
const {
  ERROR_LENGTH_NUMBER,
  ERROR_REPLAY_NUMBER,
  ERROR_NONE_NUMBER,
  ERROR_ZERO_NUMBER,
  ERROR_DUPLICATE_NUMBER,
  ERROR_NOT_NUMBER,
} = ERROR;

class App {
  computerNum;
  inputValue;
  NUMBER_LENGTH = 3;

  constructor() {}

  async play() {
    Console.print(GAME_START);

    Computer.createRandomNum(this.NUMBER_LENGTH);
    this.computerNum = Computer.computerNum;

    await this.guessNum();
  }

  async guessNum() {
    //숫자 맞히기 시작 함수
    await this.getInputNum();
    await this.printStrikeAndBall(this.inputValue);
  }

  async getInputNum() {
    //숫자를 입력받는 함수
    this.inputValue = "";
    this.inputValue = await Console.readLineAsync(GAME_INPUT);
    this.checkInputValidate(this.inputValue);
  }

  async printStrikeAndBall(inputValue) {
    //결과를 출력하는 함수
    const { strike, ball } = this.calculateStrikeAndBall(inputValue);

    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
    } else {
      Console.print(
        `${ball > 0 ? ball + "볼 " : ""}${
          strike > 0 ? strike + "스트라이크" : ""
        }`
      );
    }

    if (strike === 3) {
      Console.print(GAME_SUCCESS);

      const isPlay = await this.selectPalyAgain();
      if (isPlay) {
        this.play();
      }
      return;
    }

    await this.guessNum();
  }

  async selectPalyAgain() {
    // 1 과 2 를 입력받아 게임을 시작할지 종료할지 검증하는 함수
    const inputValue = await Console.readLineAsync(GAME_SELECT_REPLAY);

    if (Number(inputValue) === 1) {
      return true;
    }
    if (Number(inputValue) === 2) {
      Console.print(GAME_END);
      return false;
    }
    throw new Error(ERROR_REPLAY_NUMBER);
  }

  calculateStrikeAndBall(inputValue) {
    //스트라이크인지 볼인지 계산하는 함수
    const inputNumArr = inputValue.split("").map(Number);
    const score = { strike: 0, ball: 0 };

    inputNumArr.forEach((num, i) => {
      if (num === this.computerNum[i]) {
        score.strike++;
        return;
      }
      if (this.computerNum.includes(num)) {
        score.ball++;
      }
    });

    return score;
  }

  checkInputValidate(inputValue) {
    if (!/^\d{3}$/.test(inputValue)) {
      throw new Error(ERROR_LENGTH_NUMBER);
    }

    if (inputValue === "") {
      throw new Error(ERROR_NONE_NUMBER);
    }

    if (ErrorValidate.isHasZero(inputValue)) {
      throw new Error(ERROR_ZERO_NUMBER);
    }

    if (ErrorValidate.isDuplicate(inputValue)) {
      throw new Error(ERROR_DUPLICATE_NUMBER);
    }

    if (ErrorValidate.isNotInteger(Number(inputValue))) {
      throw new Error(ERROR_NOT_NUMBER);
    }
  }
}

const app = new App();
app.play();

export default App;
