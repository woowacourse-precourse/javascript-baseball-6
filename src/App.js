import { Console, Random } from "@woowacourse/mission-utils";

class App {
  computerNum;
  inputValue;
  NUMBER_LENGTH = 3;

  async play() {
    Console.print("숫자 야구 게임을 시작합니돠.");
    this.computerNum = [];
    this.inputValue = "";
    this.createRandomNum();
    console.log(this.computerNum);
    await this.getInputNum();
  }

  async getInputNum() {
    this.inputValue = await Console.readLineAsync("숫자를 입력해주세요.");
    this.checkInputValidate(this.inputValue);
    await this.printStrikeAndBall(this.inputValue);
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

  async printStrikeAndBall(inputValue) {
    const { strike, ball } = this.calculateStrikeAndBall(inputValue);

    if (strike === 3) {
      Console.print(`${strike}스트라이크`);
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const inputValue = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (parseInt(inputValue) === 1) {
        await this.play();
      } else {
        Console.print("겜 종료");
        return;
      }

      return;
    }

    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
      await this.getInputNum();
    }

    if (ball == 0 && strike !== 0) {
      await this.getInputNum();
    }

    if (strike == 0 && ball !== 0) {
      Console.print(`${ball}볼`);
      await this.getInputNum();
    }

    if (ball !== 0 && strike !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      await this.getInputNum();
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

  checkInputValidate(inputValue) {
    if (!/^\d{3}$/.test(inputValue)) {
      throw new Error("[ERROR] 입력 값은 3자리 숫자여야 합니다.");
    }

    if (inputValue === "") {
      throw new Error("[ERROR] 값을 비울 수 없어요.");
    }

    if (this.isHasZero(inputValue)) {
      throw new Error("[ERROR] 0을 제외한 숫자를 입력해주세요.");
    }

    if (this.isDuplicate(inputValue)) {
      throw new Error("[ERROR] 입력한 값이 중복일 수 없습니다.");
    }

    if (this.isNotInteger(parseInt(inputValue))) {
      throw new Error("[ERROR] 입력 값이 숫자 혹은 정수가 아닙니다.");
    }
  }

  //예외처리 함수
  isHasZero(inputValue) {
    const numArr = inputValue.split("");
    return numArr.some((num) => num === "0");
  }

  isDuplicate(inputValue) {
    const numArr = inputValue.split("");
    return numArr.some((x) => numArr.indexOf(x) !== numArr.lastIndexOf(x));
  }

  isNotInteger(inputValue) {
    if (inputValue % 1 !== 0) {
      return true;
    }

    if (inputValue < 0) {
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
