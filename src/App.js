import { Console, Random } from "@woowacourse/mission-utils";

class App {
  computerNum = [];
  NUMBER_LENGTH = 3;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNum();
    this.inputNum();
  }

  async inputNum() {
    const inputValue = await Console.readLineAsync("숫자를 입력해주세요.");

    this.checkInputNum(inputValue);
    this.checkResult(inputValue);
  }

  checkResult(inputValue) {
    const inputNumArr = inputValue.split("");
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < this.NUMBER_LENGTH; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === j && this.computerNum[i] === inputNumArr[j]) {
          strike++;
        }
        if (this.computerNum[i] === inputNumArr[j]) {
          ball++;
        }
      }
    }

    if (ball === 0 && strike === 0) {
      console.log("낫싱,,");
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
