import { Console, Random } from "@woowacourse/mission-utils";

class App {
  computerNum = [];
  numberLength = 3;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNum();
    this.inputNum();
  }

  async inputNum() {
    const INPUT_RESULT = await Console.readLineAsync("숫자를 입력해주세요.");

    this.checkInputNum(INPUT_RESULT);
    this.checkResult(INPUT_RESULT);
  }

  checkResult(INPUT_RESULT) {
    const arr = INPUT_RESULT.split("");
    console.log(arr);
  }

  createRandomNum() {
    while (this.computerNum.length < this.numberLength) {
      const RANDOM_NUM = Random.pickNumberInRange(1, 9); // 랜덤 숫자를 돌린다.
      const IS_INCLUDE = this.computerNum.includes(RANDOM_NUM); // 중복 숫자가 있으면 true, 없으면 false 를 반환한다.

      if (!IS_INCLUDE) {
        this.computerNum.push(RANDOM_NUM);
      }
    }
    console.log(this.computerNum);
  }

  checkInputNum(inputValue) {
    const NUM_ARR = inputValue.split("");
    const NEW_NUM = parseInt(inputValue);

    if (this.isDuplicate(NUM_ARR)) {
      throw new Error("입력한 값이 중복일 수 없습니다.");
    }

    if (this.isNotInteger(NEW_NUM)) {
      throw new Error("입력 값이 숫자 혹은 정수가 아닙니다.");
    }

    if (inputValue.length != this.numberLength) {
      throw new Error("입력 값의 길이가 3이 아닙니다.");
    }
  }

  //예외처리 함수
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
