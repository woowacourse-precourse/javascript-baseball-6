import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 2. '숫자 야구 게임을 시작합니다'를 출력한다.
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");

    const computer = this.generateComputer();

    // 3-1. 사용자의 값을 입력 받고
    const userInput = await MissionUtils.Console.readLineAsync();
    // 3-2. 입력 받은 숫자를 출력한다.
    MissionUtils.Console.print(`숫자를 입력해주세요 : ${userInput}`);

    // 4. 플레이어에게 입력 받은 숫자의 답을 출력해준다.
    const evaluation = this.evaluateInput(userInput, computer);
    MissionUtils.Console.print(evaluation);
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
}



export default App;
