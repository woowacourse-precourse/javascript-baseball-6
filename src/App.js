import { Console, Random } from "@woowacourse/mission-utils";
import { CONSTANTS } from "./constants/constants";

class App {
  constructor() {
    this.userNum = "";
    this.computerNum = [];
    this.playNewGame = true;
  }

  init() {
    this.userNum = "";
    this.computerNum = [];
    this.playNewGame = true;
  }

  // 2️⃣ 컴퓨터 값 설정
  SetComputerNum() {
    while (this.computerNum.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNum.includes(number)) {
        this.computerNum.push(number);
      }
    }

    // 컴퓨터 값 확인용
    Console.print("쉿! 정답은 : " + this.computerNum);
    // Console.print(this.computerNum);
  }
  // 3️⃣ 사용자 입력값 받기
  async userInput() {
    this.userNum = await Console.readLineAsync(CONSTANTS.MESSAGES.INPUT);
    this.isValidate();
  }
  // 4️⃣ 입력값 유효성 검사 (타입, 길이, 0, 중복여부)
  isValidate() {
    // (1) 숫자가 아니라면
    if (isNaN(this.userNum)) {
      throw new Error(CONSTANTS.ERROR.TYPE_VALID);
    }
    // (2) 3자리수가 아니라면
    if (this.userNum.split("").length !== 3) {
      throw new Error(CONSTANTS.ERROR.LENGTH_VALID);
    }
    // (3) 입력된 수들 중 하나라도 0이라면
    this.userNum.split("").forEach((n) => {
      if (n == 0) {
        throw new Error(CONSTANTS.ERROR.ZERO_VALID);
      }
    });
    // (4) 중복된 값이 있다면 -> ✅ 보류
    if (new Set(this.userNum).size !== 3) {
      throw new Error(CONSTANTS.ERROR.DUPLICATE_VALID);
    }
  }
  // 5️⃣ 입력값을 컴퓨터 값과 비교해 결과 출력하는 메인 기능
  async playBaseballGame() {
    // 정답을 맞추기 전까지 실행되는 게임
    let isCorrect = false;
    while (!isCorrect) {
      await this.userInput();

      let strike = 0;
      let ball = 0;

      // 스트라이크 계산하기: 인덱스가 같으면 스트라이크
      for (let i = 0; i < 3; i++) {
        if (+this.userNum.split("")[i] === this.computerNum[i]) {
          strike++;
        }
      }
      // 볼 계산하기: 입력 수가 있고, 스트라이크가 아니면 볼
      for (let i = 0; i < 3; i++) {
        if (
          this.computerNum.includes(+this.userNum.split("")[i]) &&
          +this.userNum.split("")[i] !== this.computerNum[i]
        ) {
          ball++;
        }
      }

      // 최종 결과 출력!!!!!
      let result = "낫싱";

      //정답
      if (strike === 3) {
        result = "3스트라이크\n" + CONSTANTS.MESSAGES.END;
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

  // 6️⃣ 게임 종료 후 -> 재시작 여부 결정
  async restartGame() {
    let input = await Console.readLineAsync(CONSTANTS.MESSAGES.RESTART);
    if (input === "1") {
      return true;
    } else if (input === "2") {
      Console.print(CONSTANTS.MESSAGES.EXIT);
      return false;
    } else if (input !== 1 && input !== 2) {
      Console.print(CONSTANTS.ERROR.RESTART_VALID);
    }
  }

  // 1️⃣ 게임 실행하기
  async play() {
    Console.print(CONSTANTS.MESSAGES.START);
    while (this.playNewGame) {
      this.init();
      this.SetComputerNum();
      await this.playBaseballGame();
      this.playNewGame = await this.restartGame();
      if (!this.playNewGame) break;
    }
  }
}

const app = new App();
app.play();

export default App;
