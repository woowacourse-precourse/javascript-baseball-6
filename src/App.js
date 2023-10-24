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
    while (this.answer.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(num)) {
        this.answer.push(num);
      }
    }

    Console.print("answer : " + this.answer);
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

  // 3. 정답 비교
  async checkAns() {
    let isCorrect = false;
    while (!isCorrect) {
      await this.userInput();

      Console.print("userNum " + typeof this.userNum);
      Console.print("answer " + typeof this.answer[0]);

      let inputArr = this.userNum.split("");

      // 1) 스트라이크 계산
      let strike = 0;

      for (let i = 0; i < 3; i++) {
        if (+inputArr[i] === this.answer[i]) {
          strike++;
        }
      }

      // 2) 볼 계산
      let ball = 0;

      for (let i = 0; i < 3; i++) {
        if (
          this.answer.includes(+inputArr[i]) &&
          +inputArr[i] !== this.answer[i]
        ) {
          ball++;
        }
      }

      // 3) 결과 출력
      let result = "낫싱";
      if (strike === 3) {
        result = "3스트라이크\n 게임 종료";
        isCorrect = true;
      } else if (strike > 0) {
        ball > 0
          ? (result = `${ball}볼 ${strike}스트라이크`)
          : `${strike}스트라이크`;
      } else if (ball > 0) {
        result = `${ball}볼`;
      }
      Console.print(result);
    }
  }

  // 4. 재시작
  async newGame() {
    let input = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (input === "1") {
      return true;
    } else if (input === "2") {
      return false;
    }
  }

  /**
   * 게임 실행
   */
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.continueGame) {
      this.init();
      this.setAnswer();

      await this.checkAns();

      this.continueGame = await this.newGame();
      if (!this.continueGame) break;
    }
  }
}

const game = new App();
game.play();

export default App;
