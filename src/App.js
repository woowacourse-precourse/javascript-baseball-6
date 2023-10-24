import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    // 게임 종료 상태를 나타내는 변수 추가
    this.isGameOver = false;
  }

  async play() {
    // 2. '숫자 야구 게임을 시작합니다'를 출력한다.
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");

    while (!this.isGameOver) {
      const computer = this.generateComputer();

      while (true) {
        // 3-1. 사용자의 값을 입력 받고
        const userInput = await MissionUtils.Console.readLineAsync();
        // 3-2. 입력 받은 숫자를 출력한다.
        MissionUtils.Console.print(`숫자를 입력해주세요 : ${userInput}`);

        // 5. 서로 다른 세 자리 수가 아닌 값을 입력받은 경우, 애플리케이션은 종료된다. (throw문을 사용해 예외 처리)
        if (!this.isValidInput(userInput)) {
          MissionUtils.Console.print(
            "올바른 입력이 아닙니다. 게임을 종료합니다."
          );
          throw new Error("[ERROR]");
        }

        // 4. 플레이어에게 입력 받은 숫자의 답을 출력해준다.
        const evaluation = this.evaluateInput(userInput, computer);
        MissionUtils.Console.print(evaluation);

        if (evaluation === "3스트라이크") {
          // 6. 컴퓨터가 생성한 3개의 숫자를 모두 맞히면  '3개의 숫자를 모두 맞히셨습니다! 게임 종료'를 출력하면서, 게임이 종료된다.
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          break;
        }
      }

      // 7. '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요'를 출력한다.
      MissionUtils.Console.print(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요"
      );
      const restartOption = await MissionUtils.Console.readLineAsync();
      MissionUtils.Console.print(restartOption);
      // 1을 입력 받으면 숫자 야구 게임을 재개한다.
      // 2를 입력 받으면 애플리케이션은 종료된다.
      if (restartOption !== "1") {
        this.isGameOver = true;
      }
    }
  }

  // 1. 서로 다른 임의의 수 3개를 생성한다.
  generateComputer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    const computerString = computer.join("");
    MissionUtils.Console.print(`컴퓨터 생성 숫자: ${computerString}`);
    return computer;
  }

  // 플레이어가 제시한 숫자에 대한 답
  evaluateInput(userInput, computer) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userInput[i] == computer[i]) {
        strikes++;
      } else if (computer.includes(Number(userInput[i]))) {
        balls++;
      }
    }

    if (strikes === 3) {
      // 3스트라이크인 경우
      return "3스트라이크";
    } else if (strikes > 0 || balls > 0) {
      // 같은 수가 같은 자리에 있으면 '{n}스트라이크'를 출력한다.
      // 같은 수가 다른 자리에 있으면 '{n}볼'을 출력한다.
      return `${balls}볼 ${strikes}스트라이크`;
    } else {
      // 같은 수가 전혀 없으면 '낫싱'을 출력한다.
      return "낫싱";
    }
  }

  isValidInput(input) {
    return /^\d{3}$/.test(input) && input.length <= 3; // 3자리 숫자 입력 여부 및 길이 확인
  }
}

export default App;
