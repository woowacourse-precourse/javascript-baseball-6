import { Console, Random } from "@woowacourse/mission-utils";
import MSG from "./consts/msg.js";
import ErrorValidate from "./Error.js";
import Computer from "./Computer.js";

const { GAME, ERROR } = MSG;
const { GAME_START, GAME_END, GAME_INPUT, GAME_SUCCESS, GAME_SELECT_REPLAY } =
  GAME;
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
  gameResult;
  NUMBER_LENGTH = 3;

  constructor() {}

  async play() {
    Console.print(GAME_START);

    Computer.createRandomNum(this.NUMBER_LENGTH);
    this.computerNum = Computer.computerNum;
    console.log(this.computerNum);

    await this.guessNum();
  }

  async guessNum() {
    //숫자 맞히기 시작 함수
    await this.getInputNum();
    this.calculateStrikeAndBall();
    await this.printStrikeAndBall();
  }

  async getInputNum() {
    //숫자를 입력받는 함수
    this.inputValue = "";
    this.inputValue = await Console.readLineAsync(GAME_INPUT);
    this.checkInputValidate();
  }

  async printStrikeAndBall() {
    //결과를 출력하는 함수
    const { strike, ball } = this.gameResult;

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
      await this.selectPalyAgain();
      return;
    }

    await this.guessNum();
  }

  async selectPalyAgain() {
    // 1 과 2 를 입력받아 게임을 시작할지 종료할지 검증하는 함수
    Console.print(GAME_SUCCESS);
    const inputValue = await Console.readLineAsync(GAME_SELECT_REPLAY);

    if (Number(inputValue) === 1) {
      await this.play();
      return;
    }
    if (Number(inputValue) === 2) {
      Console.print(GAME_END);
      return;
    }
    throw new Error(ERROR_REPLAY_NUMBER);
  }

  calculateStrikeAndBall() {
    //스트라이크인지 볼인지 계산하는 함수
    const inputNumArr = this.inputValue.split("").map(Number);
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

    this.gameResult = score;
  }

  checkInputValidate() {
    if (!/^\d{3}$/.test(this.inputValue)) {
      throw new Error(ERROR_LENGTH_NUMBER);
    }

    if (this.inputValue === "") {
      throw new Error(ERROR_NONE_NUMBER);
    }

    if (ErrorValidate.isHasZero(this.inputValue)) {
      throw new Error(ERROR_ZERO_NUMBER);
    }

    if (ErrorValidate.isDuplicate(this.inputValue)) {
      throw new Error(ERROR_DUPLICATE_NUMBER);
    }

    if (ErrorValidate.isNotInteger(Number(this.inputValue))) {
      throw new Error(ERROR_NOT_NUMBER);
    }
  }
}

const app = new App();
app.play();

export default App;
