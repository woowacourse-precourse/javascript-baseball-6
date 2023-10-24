import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = [];

    // 컴퓨터가 0에서 9 사이의 서로 다른 숫자 3개를 무작위로 뽑음
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    let attempts = 0;

    while (true) {
      // 사용자로부터 값을 입력받음
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 (예: 1 2 3): "
      );

      if (!this.isValidInput(userInput)) {
        MissionUtils.Console.print(
          "올바른 입력이 아닙니다. 0에서 9 사이의 서로 다른 숫자 3개를 입력하세요."
        );
        continue;
      }

      const userNumbers = userInput.split(" ").map(Number);

      // S(스트라이크)와 B(볼) 판별
      const { strikes, balls } = this.checkGuess(computer, userNumbers);
      attempts++;

      if (strikes === 3) {
        MissionUtils.Console.print(
          `축하합니다! 정답을 맞혔습니다. 횟수: ${attempts}번`
        );
        break;
      } else {
        MissionUtils.Console.print(`${strikes}스트라이크 ${balls}볼`);
      }
    }
  }

  isValidInput(userInput) {
    const userNumbers = userInput.split(" ").map(Number);
    return (
      userNumbers.length === 3 &&
      userNumbers.every(
        (number) => !isNaN(number) && number >= 0 && number <= 9
      ) &&
      new Set(userNumbers).size === 3
    );
  }

  checkGuess(computer, user) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (computer[i] === user[i]) {
        strikes++;
      } else if (computer.includes(user[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }
}

export default App;

(async () => {
  const app = new App();
  await app.play();
})();
