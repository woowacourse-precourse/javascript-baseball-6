import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerVal = this.getRandomValue();
  }

  getRandomValue() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  checkUserInput(answer) {
    return new Promise((resolve, reject) => {
      let answerList = Array.from(answer).map((num) => parseInt(num));
      if (
        answerList.length != 3 ||
        new Set(answerList).size !== 3 ||
        !answerList.every((num) => num >= 1 && num <= 9)
      ) {
        reject(new Error("[ERROR]"));
      }
      resolve(answerList);
    });
  }

  getHint(userVal, computerVal) {
    let strikeCount = 0;
    let ballCount = 0;
    let nothing = 0;
    return new Promise((resolve) => {
      for (let i = 0; i < userVal.length; i++) {
        if (userVal[i] == computerVal[i]) {
          strikeCount++;
        } else if (computerVal.includes(userVal[i])) {
          ballCount++;
        } else {
          nothing++;
        }
      }
      resolve([strikeCount, ballCount, nothing]);
    });
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let keepPlaying = true;
    while (keepPlaying) {
      try {
        let userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
        let userVal = await this.checkUserInput(userInput);
        let [strikeCount, ballCount, nothing] = await this.getHint(
          userVal,
          this.computerVal
        );
        if (nothing === 3) {
          Console.print("낫싱");
        } else if (strikeCount === 3) {
          Console.print(
            `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
          );
          let replay = await Console.readLineAsync(
            `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
          );
          if (replay === "1") {
            this.computerVal = this.getRandomValue();
          } else if (replay === "2") {
            keepPlaying = false;
          } else {
            throw new Error("[ERROR]");
          }
        } else {
          Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
}
export default App;
