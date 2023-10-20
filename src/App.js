import { Console, Random } from "@woowacourse/mission-utils";

class App {
  computerNum = [];
  numberLength = 3;

  async play() {
    console.log("play 함수 실행");
    this.createRandomNum();
    this.inputNum();
  }

  async inputNum() {
    const INPUT_RESULT = await Console.readLineAsync("숫자를 입력하세요.");
    this.checkInputNum(INPUT_RESULT);
  }

  createRandomNum() {
    while (this.computerNum.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9); // 랜덤 숫자를 돌린다.
      const IS_INCLUDE = this.computerNum.includes(NUMBER); // 중복 숫자가 있으면 true, 없으면 false 를 반환한다.

      if (!IS_INCLUDE) {
        this.computerNum.push(NUMBER);
      }
    }
    console.log(this.computerNum);
  }

  checkInputNum(INPUT_RESULT) {
    const arr = INPUT_RESULT.toString().split("");
    if (this.isDuplicate(arr)) {
      throw new Error("입력한 값이 중복일 수 없습니다.");
    }

    if (this.isNotInteger(INPUT_RESULT)) {
      throw new Error("입력 값이 숫자 혹은 정수가 아닙니다.");
    }

    if (INPUT_RESULT.length != this.numberLength) {
      throw new Error("입력 값의 길이가 3이 아닙니다.");
    }
  }

  //예외처리 함수

  isDuplicate(arr) {
    return arr.some((x) => arr.indexOf(x) !== arr.lastIndexOf(x));
  }

  isNotInteger(value) {
    if (value % 1 !== 0) {
      return true;
    }

    if (typeof value !== "number") {
      return true;
    }

    return false;
  }
}

const app = new App();
app.play();

export default App;
