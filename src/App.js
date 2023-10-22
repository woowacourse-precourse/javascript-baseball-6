import { Console, Random } from "@woowacourse/mission-utils";

class App {
  computerNum;
  inputValue;
  NUMBER_LENGTH = 3;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNum();
    console.log(this.computerNum);
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
    this.inputValue = await Console.readLineAsync("숫자를 입력해주세요.");
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
    const { strike, ball } = score;
    return { strike, ball };
  }

  async printStrikeAndBall(inputValue) {
    //결과를 출력하는 함수
    const { strike, ball } = this.calculateStrikeAndBall(inputValue);

    if (strike === 3) {
      Console.print(`${strike}스트라이크`);
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      await this.selectPalyAgain();
      return;
    }

    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
    }

    if (ball !== 0 && strike !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    if (ball == 0 && strike !== 0) {
      Console.print(`${strike}스트라이크`);
    }

    if (strike == 0 && ball !== 0) {
      Console.print(`${ball}볼`);
    }

    await this.guessNum();
  }

  async selectPalyAgain() {
    // 1 과 2 를 입력받아 게임을 시작할지 종료할지 검증하는 함수
    const inputValue = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (parseInt(inputValue) === 1) {
      await this.play();
      return;
    }
    if (parseInt(inputValue) === 2) {
      Console.print("게임을 종료합니다.");
      return;
    }
    throw new Error("[ERROR] 1과 2의 숫자만 입력해주세요.");
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
    return numArr.some((num) => num === 0);
  }

  isDuplicate(inputValue) {
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
