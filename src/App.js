import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      while (true) {
        console.log("숫자 야구 게임을 시작합니다.");
        const randomNumber = this.generateRandomNumber();
        while (true) {
          const userInput = await MissionUtils.Console.readLineAsync(
            "숫자를 입력해주세요 : "
          );

          if (!this.isValidInput(userInput)) {
            throw new Error("[ERROR] 세 자리 숫자만 입력 가능합니다.");
          }

          const result = this.compareNumbers(randomNumber, userInput);

          if (result === "3스트라이크") {
            MissionUtils.Console.print(result);
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            const restart = await MissionUtils.Console.readLineAsync(
              "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
            );
            if (restart !== "1") return;
            break;
          } else {
            MissionUtils.Console.print(result);
          }
        }
      }
    } catch (error) {
      // catch 블록 시작
      MissionUtils.Console.print(error.message);
      throw error;
      return;
    }
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  compareNumbers(randomNumber, userInput) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (randomNumber[i] === userInput[i]) {
        strikes++;
      } else if (randomNumber.includes(userInput[i])) {
        balls++;
      }
    }

    if (strikes === 3) {
      return "3스트라이크";
    } else if (strikes === 0 && balls === 0) {
      return "낫싱";
    } else if (strikes === 0) {
      return `${balls}볼`;
    } else if (balls === 0) {
      return `${strikes}스트라이크`;
    } else {
      return `${balls}볼 ${strikes}스트라이크`;
    }
  }

  isValidInput(input) {
    return /^\d{3}$/.test(input) && new Set(input).size === 3;
  }
}
export default App;
