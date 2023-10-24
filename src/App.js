import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.isRunning = true;
  }
  async play() {
    while (this.isRunning) {
      const start = this.makeAnswer();
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
      let result;
      while (result !== "3 스트라이크") {
        const input = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        if (
          input.length !== 3 ||
          new Set(input).size !== 3 ||
          [...input].some((item) => Number(item) < 1 || Number(item) > 9)
        ) {
          throw new Error("제시된 조건을 확인해주세요(1~9까지의 서로 다른 3자리의 수)");
        }
        result = this.checkAnswer(input, start);
        MissionUtils.Console.print(result);
      }

      MissionUtils.Console.print("3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const replay = await MissionUtils.Console.readLineAsync(
        "게임을 다시 시작하려면 1 / 게임을 종료하려면 2를 입력하세요."
      );

      if (replay === "2") {
        this.isRunning = false;
      }
    }
  }

  makeAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNum)) computer.push(randomNum);
    }
  
    return [...computer];
  }

  checkAnswer(target, computer) {
    let ball = 0;
    let strike = 0;

    for (let i=0; i<3; i++) {
      if(target[i] == computer[i]) {
        strike++;
      } else if (computer.includes(Numner(target[i]))) {
        ball++;
      }
    }
    if (strike === 0 && ball === 0) return "낫싱";

    return `${ball ? ball + "볼" : ""} ${strike ? strike + "스트라이크" : ""}`.trim();
  }
}

export default App;