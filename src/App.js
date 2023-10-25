import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  userNumber = "";

  async play() {
    const answer = this.getRandomNumber();
    let isCorrect = false;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (!isCorrect) {
      this.userNumber = await this.getUserNumber();

      let strike = 0;
      let ball = 0;

      this.userNumber.split("").forEach((number, index) => {
        if (answer[index] === parseInt(number)) strike++;
        else if (answer.includes(parseInt(number))) ball++;
      });

      if (strike === 3) {
        isCorrect = true;
        MissionUtils.Console.print("3스트라이크");
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }

      if (ball === 0 && strike === 0) MissionUtils.Console.print("낫싱");
      if (ball === 0 && strike !== 0)
        MissionUtils.Console.print(`${strike}스트라이크`);
      if (ball !== 0 && strike === 0) MissionUtils.Console.print(`${ball}볼`);
      if (ball !== 0 && strike !== 0)
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    await this.handleEndGame();
  }

  getRandomNumber() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  async getUserNumber() {
    const number = await MissionUtils.Console.readLineAsync(
      "숫자를 입력하세요: "
    );

    if (isNaN(number)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    if (number.length !== 3)
      throw new Error("[ERROR] 3자리 숫자를 입력해주세요.");
    if ([...new Set(number)].length !== 3)
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");

    return number;
  }

  async handleEndGame() {
    const answer = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (answer === "1") return this.play();
    if (answer === "2") return;
    throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
  }
}

export default App;
