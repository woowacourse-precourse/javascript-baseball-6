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
    const answerList = Array.from(answer).map((num) => parseInt(num));
    if (
      answerList.length !== 3 ||
      new Set(answerList).size !== 3 ||
      !answerList.every((num) => num >= 1 && num <= 9)
    ) {
      throw new Error("[ERROR]1부터 9까지 서로 다른 수로 이루어진 3자리의 랜덤 값만 입력 가능합니다");
    }
    return answerList;
  }

  getHint(userVal) {
    let strikeCount = 0;
    let ballCount = 0;
    
    for (let i = 0; i < userVal.length; i++) {
      if (userVal[i] === this.computerVal[i]) {
        strikeCount++;
      } else if (this.computerVal.includes(userVal[i])) {
        ballCount++;
      }
    }

    if (strikeCount === 3) {
      Console.print(`3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      return "restart";
    } else if (ballCount && strikeCount) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    } else if (ballCount) {
      Console.print(`${ballCount}볼`);
    } else if (strikeCount) {
      Console.print(`${strikeCount}스트라이크`);
    } else {
      Console.print("낫싱");
    }
  }


  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let keepPlaying = true;
    while (keepPlaying) {
      try {
        let userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
        const userVal = this.checkUserInput(userInput);
        const hintResult = this.getHint(userVal);
        if (hintResult){
          let replay = await Console.readLineAsync(
            `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`
          );
          if (replay === "1") {
            this.computerVal = this.getRandomValue();
          } else if (replay === "2") {
            keepPlaying = false;
          } else {
            throw new Error("[ERROR]1 아니면 2 만 입력가능하니다.");
          }
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
}
export default App;
