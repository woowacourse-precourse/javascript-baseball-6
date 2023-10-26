import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { GameType, Rules } from "./constants";
import { isBaseballGameInput } from "./utils/validator";

class App {
  #isPause = false;
  #answer = null;
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.initAnswer();
    await this.playball();
  }

  async playball() {
    while (!this.#isPause) {
      let inputedNumbers = '';
      try {
        inputedNumbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
      } catch (e) {
        throw new Error(e);
      }
      this.checkInputedNumbersValidation(inputedNumbers);
      const countedResult = this.countStrikeAndBall(this.#answer, inputedNumbers);
      Console.print(this.trimString(countedResult));
      if (this.checkAnswer(countedResult.cntStrike)) {
        Console.print(`${Rules.DIGIT_COUNT}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        await this.checkTryAgain();
      }
    }
  }

  async checkTryAgain() {
    const pickedType = await Console.readLineAsync(`게임을 새로 시작하려면 ${GameType.RESTART}, 종료하려면 ${GameType.END}를 입력하세요.`);
    if (pickedType === GameType.END) {
      this.#isPause = true;
    } else if (pickedType === GameType.RESTART) {
      this.initAnswer();
    }
  }

  checkInputedNumbersValidation(inputedNumbers) {
    if (this.isExistDuplication(inputedNumbers))
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    if (!isBaseballGameInput(inputedNumbers, { size: Rules.DIGIT_COUNT }))
      throw new Error(`[ERROR] 1 ~ 9사이의 ${Rules.DIGIT_COUNT}자리 숫자가 필요합니다.`);
  }

  isExistDuplication(inputedNumbers) {
    let result = false;
    inputedNumbers.split('').forEach((first, idx) => {
      inputedNumbers.split('').forEach((second, jdx) => {
        if (idx < jdx) {
          if (first === second)
            result = true;
        }
      })
    })
    return result;
  }

  trimString({ cntStrike, cntBall }) {
    if (cntStrike === 0 && cntBall === 0)
      return '낫싱';
    if (cntStrike === 0)
      return `${cntBall}볼`;
    if (cntBall === 0)
      return `${cntStrike}스트라이크`;
    return `${cntBall}볼 ${cntStrike}스트라이크`;
  }

  checkAnswer(cntStrike) {
    return cntStrike === Rules.DIGIT_COUNT;
  }

  countStrikeAndBall(answer, numbers) {
    let cntStrike = 0;
    let cntBall = 0;
    const answers = answer?.split('');
    numbers.split('').forEach((item, idx) => {
      if (answers[idx] === item) {
        ++cntStrike;
      } else if (answers?.indexOf(item) !== -1) {
        ++cntBall;
      }
    });
    return { cntStrike, cntBall };
  }

  initAnswer() {
    const computer = [];
    while (computer.length < Rules.DIGIT_COUNT) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#answer = computer.join('');
  }
}

export default App;
