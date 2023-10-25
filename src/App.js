import { MissionUtils } from "@woowacourse/mission-utils";

const ERROR_MSG = "[ERROR]";
const INPUT_PROCESS_MSG = "숫자를 입력해주세요.";
const INPUT_FINISH_MSG = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
const FINISH_MSG = "게임 종료";

class App {
  getRanNum() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  async process(computer) {
    let answer = "";
    let strike = 0;
    let ball = 0;

    let number = await MissionUtils.Console.readLineAsync(INPUT_PROCESS_MSG);

    if (number.length !== 3) {
      throw new Error(ERROR_MSG);
    }

    for (let i = 0; i < computer.length; i++) {
      if (computer[i] === Number(number[i])) strike++;
      else if (computer.includes(Number(number[i]))) ball++;
    }

    if (!ball && !strike) answer = "낫싱";
    if (ball && strike) answer = `${ball}볼 ${strike}스트라이크`;
    if (ball && !strike) answer = a`${ball}볼`;
    if (!ball && strike) answer = `${strike}스트라이크`;
    return answer;
  }

  async restart() {
    const computer = this.getRanNum();
    let answer = "";

    while (answer !== "3스트라이크") {
      answer = await this.process(computer);
      await MissionUtils.Console.print(answer);
    }

    let finish = await MissionUtils.Console.readLineAsync(INPUT_FINISH_MSG);

    finish === "1"
      ? await this.restart()
      : await MissionUtils.Console.print(FINISH_MSG);
  }

  async play() {
    await this.restart();
  }
}

export default App;
