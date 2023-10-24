import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    function generateRandomNumber() {
      const randoms = new Set();
      while (randoms.size < 3) {
        randoms.add(Random.pickNumberInRange(1, 9));
      }
      return [...randoms].join("");
    }

    function getFeedback(secretNumber, answers) {
      let strikes = 0;
      let balls = 0;

      for (let i = 0; i < 3; i++) {
        if (answers[i] === secretNumber[i]) {
          strikes++;
        } else if (secretNumber.includes(answers[i])) {
          balls++;
        }
      }

      if (strikes === 3) {
        return "3스트라이크! 모든 숫자를 맞혔습니다. 게임 종료.";
      } else if (strikes > 0 || balls > 0) {
        return `${balls}볼 ${strikes}스트라이크 `;
      } else {
        return "낫싱";
      }
    }

    Console.print("숫자 야구 게임을 시작합니다.");

    let secretNumber = generateRandomNumber();

    while (true) {
      const answers = await Console.readLineAsync("숫자를 입력하세요: ");

      if (
        answers.length !== 3 ||
        !/^[1-9]+$/.test(answers) ||
        new Set(answers).size !== 3
      ) {
        throw new Error("[ERROR]");
      }

      const feedback = getFeedback(secretNumber, answers);
      Console.print(feedback);

      if (feedback === "3스트라이크! 모든 숫자를 맞혔습니다. 게임 종료.") {
        const playAgain = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        if (playAgain !== "1") {
          break;
        } else {
          // 다시 시작할 때 새로운 랜덤 숫자 생성
          secretNumber = generateRandomNumber();
        }
      }
    }
  }
}

export default App;

// 프로그램 시작점
const app = new App();
app.play();
