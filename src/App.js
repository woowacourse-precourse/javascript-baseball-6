import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = [];
    this.isGameEnd = false;
  }

  // 숫자 랜덤
  generateRandomNumbers() {
    this.computer = []; // 게임 재시작 시 기존 숫자 초기화
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  // 유효성 검사
  checkNumber(input) {
    if (isNaN(input)) throw new Error("[ERROR] 잘못된 형식의 입력입니다.");
    if (String(input).length !== 3)
      throw new Error("[ERROR] 세 자리 숫자를 입력해주세요.");

    const inputSet = new Set(String(input).split(""));

    if (inputSet.size !== String(input).length)
      throw new Error("[ERROR] 서로 다른 숫자를 입력해주세요.");

    return Array.from(inputSet);
  }

  // 계산
  calculateResult(userInput) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < this.computer.length; i++) {
      if (userInput[i] == this.computer[i]) {
        strikeCount++;
      } else if (this.computer.includes(Number(userInput[i]))) {
        ballCount++;
      }
    }
    if (strikeCount === 0 && ballCount === 0) return "낫싱";

    let resultMessage = "";
    if (ballCount > 0) resultMessage += `${ballCount}볼 `;
    if (strikeCount > 0) resultMessage += `${strikeCount}스트라이크`;
    return resultMessage.trim();
  }

  async play() {
    while (true) {
      // 전체 루프 추가
      Console.print("숫자 야구 게임을 시작합니다.");

      this.generateRandomNumbers();

      while (true) {
        // 각각의 게임 루프
        const userInputRawData = await Console.readLineAsync(
          "숫자를 입력해주세요."
        );

        const userInput = this.checkNumber(userInputRawData);

        const resultMessage = this.calculateResult(userInput);

        Console.print(resultMessage);

        if (resultMessage.includes("3스트라이크")) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break; // 해당 판만 종료
        }
      }

      const restartInput = await Console.readLineAsync(
        "게임을 새로 시작하려면 '1', 종료하려면 '2' 를 입력하세요"
      );

      if (restartInput !== "1") {
        break; // 전체 루프 종료
      }
    }
  }
}

export default App;
