import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
  //게임 생성
  //게임이 진행 중이라면(true), 아니라면(false)
    this.isRunning = true;
  }
  //게임 시작 기능
  async play() {
    while (this.isRunning) {
      const START = this.makeAnswer();
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      
      let result;
      while (result !== "3스트라이크") {
        //사용자의 입력을 받는 기능
        const INPUT = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        if (
          INPUT.length !== 3 ||
          new Set(INPUT).size !== 3 ||
          [...INPUT].some((item) => Number(item) < 1 || Number(item) > 9)
        ) {
          //잘못된 값을 입력하면 ERROR를 반환
          throw new Error("[ERROR] 제시된 조건을 확인해주세요(1~9까지의 서로 다른 3자리의 수)");
        }
        result = this.checkAnswer(INPUT, START);
        MissionUtils.Console.print(result);
      }
      //정해진 조건에 충족되었을 때, while문을 빠져나온다.
      MissionUtils.Console.print("3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      //게임의 재시작 또는 종료를 정하는 기능
      const REPLAY = await MissionUtils.Console.readLineAsync(
        "게임을 다시 시작하려면 1 / 게임을 종료하려면 2를 입력하세요."
      );

      if (REPLAY === "2") {
        this.isRunning = false;
      }
    }
  }

  //랜덤 숫자를 설정하는 기능
  makeAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(RANDOM_NUM)) computer.push(RANDOM_NUM);
    }
  
    return [...computer];
  }

  //입력된 값에서 스트라이크 / 볼 / 낫싱을 판정하고 return
  checkAnswer(target, computer) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if(target[i] == computer[i]) {
        strike++;
      } else if (computer.includes(Number(target[i]))) {
        ball++;
      }
    }
    if (strike === 0 && ball === 0) return "낫싱";

    const answer = `${ball ? ball + "볼" : ""} ${strike ? strike + "스트라이크" : ""}`.trim();

    return answer;
  }
}

export default App;