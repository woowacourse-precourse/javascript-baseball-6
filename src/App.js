import { Console, Random } from "@woowacourse/mission-utils";
import MSG from "./consts/msg.js";

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

  async play() {
    Console.print(GAME_START);
    this.createRandomNum();
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

  calculateStrikeAndBall(inputValue) {
    //스트라이크인지 볼인지 계산하는 함수
    const inputNumArr = inputValue
      .split("")
      .map((numStr) => parseInt(numStr, 10));

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

    if (parseInt(inputValue) === 1) {
      return true;
    }
    if (parseInt(inputValue) === 2) {
      Console.print(GAME_END);
      return false;
    }
    throw new Error(ERROR_REPLAY_NUMBER);
  }

  createRandomNum() {
    this.computerNum = [];
    while (this.computerNum.length < this.NUMBER_LENGTH) {
      const randomNum = Random.pickNumberInRange(1, 9); // 랜덤 숫자를 돌린다.
      const isInclude = this.computerNum.includes(randomNum); // 중복 숫자가 있으면 true, 없으면 false 를 반환한다.

      if (!isInclude) {
        this.computerNum.push(randomNum);
      }
    }
  }

  checkInputValidate(inputValue) {
    if (!/^\d{3}$/.test(inputValue)) {
      throw new Error(ERROR_LENGTH_NUMBER);
    }

    if (inputValue === "") {
      throw new Error(ERROR_NONE_NUMBER);
    }

    if (this.isHasZero(inputValue)) {
      throw new Error(ERROR_ZERO_NUMBER);
    }

    if (this.isDuplicate(inputValue)) {
      throw new Error(ERROR_DUPLICATE_NUMBER);
    }

    if (this.isNotInteger(parseInt(inputValue))) {
      throw new Error(ERROR_NOT_NUMBER);
    }
  }

  //예외처리 함수
  isHasZero(inputValue) {
    //0 이 있는지
    const numArr = inputValue.split("");
    return numArr.some((num) => num === 0);
  }

  isDuplicate(inputValue) {
    //중복 숫자가 있는지
    const numArr = inputValue.split("");
    return numArr.some((x) => numArr.indexOf(x) !== numArr.lastIndexOf(x));
  }

  isNotInteger(inputValue) {
    if (inputValue % 1 !== 0) {
      //소수점 판별
      return true;
    }

    if (inputValue < 0) {
      //음수 판별
      return true;
    }

    if (typeof inputValue !== "number") {
      //넘버 판별
      return true;
    }

    return false;
  }
}

const app = new App();
app.play();

export default App;
