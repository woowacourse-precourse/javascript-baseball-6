import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.randomNumberArray = [];
  }

  createRandomNumber() {
    this.randomNumberArray = [...Random.pickUniqueNumbersInRange(1, 9, 3)];

    console.log(this.randomNumberArray);
  }

  async submitUserAnswerHalnder() {
    let userAnswerArray;

    const oldAnswer = await Console.readLineAsync("숫자 3개를 입력해 주세요");

    userAnswerArray = Array.from(oldAnswer, Number);

    if (isNaN(oldAnswer)) {
      throw new Error("[Error] 숫자만 입력해 주세요.");
    }

    if (userAnswerArray.length !== 3 || userAnswerArray.includes(0)) {
      throw new Error("[Error] 0을 제외한 3자리의 숫자를 입력해 주세요.");
    }

    if (userAnswerArray.length !== [...new Set(userAnswerArray)].length) {
      throw new Error("[Error] 중복되지 않은 3자리의 숫자를 입력해 주세요.");
    }
    return this.createUserAnswerResult(userAnswerArray);
  }

  createUserAnswerResult(userAnswerArray) {
    let resultStrike = 0;
    let resultBall = 0;
    let currnetIndexValueResult;

    for (let index = 0; index < 3; index++) {
      currnetIndexValueResult = userAnswerArray.findIndex((element) => {
        return element == this.randomNumberArray[index];
      });

      if (currnetIndexValueResult == index) resultStrike = resultStrike + 1;
      if (currnetIndexValueResult !== -1 && currnetIndexValueResult !== index)
        resultBall = resultBall + 1;
    }
    this.gameResultPrint(resultBall, resultStrike);
  }

  async regameORgameover() {
    const gameState = await Console.readLineAsync(
      "게임을 계속하려면 1, 끝내려면 2를 눌러주세요."
    );

    if (+gameState == 1) {
      console.log(gameState);
      this.play();
    }
    if (+gameState == 2) {
      Console.print("게임을 종료합니다.");
    }

    if (isNaN(gameState)) {
      throw new Error("[Error] 게임을 계속하려면 1, 끝내려면 2를 눌러주세요.");
    }
  }

  gameResultPrint(resultBall, resultStrike) {
    if (resultStrike === 3) {
      Console.print("축하합니다. 당신이 이겼습니다!");
      return this.regameORgameover();
    }
    if (resultStrike > 0 || resultBall > 0) {
      Console.print(`${resultBall} 볼, ${resultStrike} 스트라이크`);
      return this.submitUserAnswerHalnder();
    }
    if (resultBall === 0 && resultStrike === 0) {
      Console.print("낫싱");
      return this.submitUserAnswerHalnder();
    }
  }

  async play() {
    this.createRandomNumber();
    this.submitUserAnswerHalnder();
  }
}

const app = new App();

app.play();

export default App;
