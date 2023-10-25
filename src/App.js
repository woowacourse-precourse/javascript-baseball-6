import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.isRunning = true;
  }
  async play() {
    while (this.isRunning) {
      const START = this.makeAnswer();
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
      let result;
      while (result !== "3스트라이크") {
        const INPUT = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        if (
          INPUT.length !== 3 ||
          new Set(INPUT).size !== 3 ||
          [...INPUT].some((item) => Number(item) < 1 || Number(item) > 9)
        ) {
          throw new Error("[ERROR] 제시된 조건을 확인해주세요(1~9까지의 서로 다른 3자리의 수)");
        }
        result = this.checkAnswer(INPUT, START);
        MissionUtils.Console.print(result);
      }

      MissionUtils.Console.print("3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const REPLAY = await MissionUtils.Console.readLineAsync(
        "게임을 다시 시작하려면 1 / 게임을 종료하려면 2를 입력하세요."
      );

      if (REPLAY === "2") {
        this.isRunning = false;
      }
    }
  }

  makeAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(RANDOM_NUM)) computer.push(RANDOM_NUM);
    }
  
    return [...computer];
  }

  checkAnswer(target, computer) {
    let ball = 0;
    let strike = 0;

    for (let i=0; i<3; i++) {
      if(target[i] == computer[i]) {
        strike++;
      } else if (computer.includes(Number(target[i]))) {
        ball++;
      }
    }
    if (strike === 0 && ball === 0) return "낫싱";

    const ANSWER = `${ball ? ball + "볼" : ""} ${strike ? strike + "스트라이크" : ""}`.trim();
    
    return ANSWER;
  }
}

export default App;