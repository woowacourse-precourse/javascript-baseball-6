import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.userNum = "";
    this.answer = [];
    this.continueGame = true;
  }

  // 1-1. 초기화
  init() {
    this.userNum = "";
    this.answer = [];
    this.continueGame = true;
  }

  // 1-2. 정답 설정
  setAnswer() {
    let ans = [];
    while (ans.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!ans.includes(num)) {
        ans.push(num);
      }
    }

    Console.print(ans);
  }

  // 2. 입력값 받기
  async userInput() {
    this.userNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.isValidate();
  }

  // 2-1. 입력값 유효성 검사
  isValidate() {
    // 1) 숫자
    if (isNaN(+this.userNum)) {
      throw new Error("[ERROR] 숫자가 아닙니다");
    }

    let inputArr = this.userNum.split("");
    // 2) 3자리 수
    if (inputArr.length !== 3) {
      throw new Error("[ERROR] 3자리 숫자가 아닙니다");
    }

    // 3) 1~9 사이의 숫자
    inputArr.forEach((num) => {
      if (+num === 0) {
        throw new Error("[ERROR] 1~9 사이의 숫자가 아닙니다");
      }
    });

    // 4) 각 자리 숫자가 다름
    let checkArr = [];
    inputArr.forEach((num) => {
      if (!checkArr.includes(num)) {
        checkArr.push(num);
      } else {
        throw new Error("[ERROR] 각 자리 숫자가 달라야 합니다");
      }
    });
  }

  async play() {
    this.init();
    this.setAnswer();
    await this.userInput();
  }
}

const game = new App();
game.play();

export default App;
