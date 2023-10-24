import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    function getRanNum() {
      const computer = [];

      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }

      return computer;
    }

    async function process(computer) {
      let answer = "";
      let strike = 0;
      let ball = 0;

      let number = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요."
      );

      if (number.length !== 3) {
        throw new Error("[ERROR]");
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

    async function restart() {
      let computer = getRanNum();
      let answer = "";

      while (answer !== "3스트라이크") {
        answer = await process(computer);
        await MissionUtils.Console.print(answer);
      }

      let finish = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      finish === "1"
        ? await restart()
        : await MissionUtils.Console.print("게임 종료");
    }

    await restart();
  }
}

export default App;
