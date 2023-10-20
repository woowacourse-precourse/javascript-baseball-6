import { Console, Random } from "@woowacourse/mission-utils";

class App {
  computerNum;
  NUMBER_LENGTH = 3;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNum = [];
    this.createRandomNum();
    console.log("--컴퓨터 함수--");
    console.log(this.computerNum);
    this.inputNum();
  }

  async inputNum() {
    const inputValue = await Console.readLineAsync("숫자를 입력해주세요.");
    this.checkInputNum(inputValue);
    this.checkResult(inputValue);
  }

  calculateStrikeAndBall(inputValue) {
    const inputNumArr = inputValue.split("");
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < this.NUMBER_LENGTH; i++) {
      for (let j = 0; j < this.NUMBER_LENGTH; j++) {
        if (i === j && this.computerNum[i] === inputNumArr[j]) {
          strike++;
        }
        if (i !== j && this.computerNum[i] === inputNumArr[j]) {
          ball++;
        }
      }
    }

    return { strike, ball };
  }

  async checkResult(inputValue) {
    console.log("checkResult");
    const { strike, ball } = this.calculateStrikeAndBall(inputValue);

    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
      await this.inputNum();
    }

    if (ball == 0 && strike !== 0) {
      Console.print(`${strike}스트라이크`);
      await this.inputNum();
    }

    if (strike == 0 && ball !== 0) {
      Console.print(`${ball}볼`);
      await this.inputNum();
    }

    if (ball !== 0 && strike !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      await this.inputNum();
    }

    if (strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const inputValue = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (parseInt(inputValue) === 1) {
        this.play();
      } else {
        console.log("겜 종료");
      }
    }
  }

  createRandomNum() {
    while (this.computerNum.length < this.NUMBER_LENGTH) {
      const randomNum = Random.pickNumberInRange(1, 9).toString(); // 랜덤 숫자를 돌린다.
      const isInclude = this.computerNum.includes(randomNum); // 중복 숫자가 있으면 true, 없으면 false 를 반환한다.

      if (!isInclude) {
        this.computerNum.push(randomNum);
      }
    }
  }

  checkInputNum(inputValue) {
    const numArr = inputValue.split("");
    const newNum = parseInt(inputValue);

    if (this.isHasZero(numArr)) {
      throw new Error("0을 제외한 숫자를 입력해주세요.");
    }
    if (this.isDuplicate(numArr)) {
      throw new Error("입력한 값이 중복일 수 없습니다.");
    }

    if (this.isNotInteger(newNum)) {
      throw new Error("입력 값이 숫자 혹은 정수가 아닙니다.");
    }

    if (inputValue.length != this.NUMBER_LENGTH) {
      throw new Error("입력 값의 길이가 3이 아닙니다.");
    }
  }

  //예외처리 함수
  isHasZero(arr) {
    return arr.some((num) => num === "0");
  }

  isDuplicate(arr) {
    return arr.some((x) => arr.indexOf(x) !== arr.lastIndexOf(x));
  }

  isNotInteger(inputValue) {
    if (inputValue % 1 !== 0) {
      return true;
    }

    if (typeof inputValue !== "number") {
      return true;
    }

    return false;
  }
}

const app = new App();
app.play();

export default App;
