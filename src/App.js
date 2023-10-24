import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  generateComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let continuePlaying = true;

    while (continuePlaying) {
      const computer = this.generateComputerNumbers();

      let attempts = 0;
      let gameOver = false;

      while (!gameOver) {
        attempts++;
        const userInput = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );

        // 맞는지 확인용
        MissionUtils.Console.print(`입력한 숫자 : ${userInput}`);

        if (!/^\d{3}$/.test(userInput)) {
          throw new Error(
            "[ERROR] 서로 다른 3자리의 숫자만 입력할 수 있습니다."
          );
        }

        const userNumbers = userInput.split("").map(Number);
        let strikes = 0;
        let balls = 0;

        for (let i = 0; i < 3; i++) {
          if (userNumbers[i] === computer[i]) {
            strikes++;
          } else if (computer.includes(userNumbers[i])) {
            balls++;
          }
        }

        if (strikes === 3) {
          MissionUtils.Console.print(
            `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
          );
          gameOver = true;
        } else if (strikes > 0 || balls > 0) {
          MissionUtils.Console.print(
            `${balls >= 1 ? balls + "볼" : ""} ${
              strikes >= 1 ? strikes + "스트라이크" : ""
            }`
          );
        } else {
          MissionUtils.Console.print("낫싱");
        }
      }

      const choice = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      MissionUtils.Console.print(`choice : ${choice}`);

      if (!/^[12]$/.test(choice)) {
        throw new Error("[ERROR] 재시작 여부는 1 또는 2를 입력해야 합니다.");
      }

      if (choice === "2") {
        continuePlaying = false;
        MissionUtils.Console.print("게임 종료");
      }
    }
  }
}

export default App;
