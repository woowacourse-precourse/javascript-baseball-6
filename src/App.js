import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE, GAME_TYPE, RULES } from "./constants";
import { isBaseballGameInput } from "./utils/validator";

class App {
  #isPause = false;
  #answer = null;
  async play() {
    Console.print(GAME_MESSAGE.startGame);
    this.initAnswer();
    await this.playball();
  }

  async playball() {
    while (!this.#isPause) {
      let inputedNumbers = '';
      try {
        inputedNumbers = await Console.readLineAsync(GAME_MESSAGE.inputNumberPrompt);
      } catch (e) {
        throw new Error(e);
      }
      this.checkInputedNumbersValidation(inputedNumbers);
      const countedResult = this.countStrikeAndBall(this.#answer, inputedNumbers);
      Console.print(this.trimString(countedResult));
      if (this.checkAnswer(countedResult.cntStrike)) {
        Console.print(GAME_MESSAGE.win);
        await this.checkTryAgain();
      }
    }
  }

  async checkTryAgain() {
    const pickedType = await Console.readLineAsync(GAME_MESSAGE.restartPrompt);
    if (pickedType === GAME_TYPE.end) {
      this.#isPause = true;
    } else if (pickedType === GAME_TYPE.restart) {
      this.initAnswer();
    }
  }

  checkInputedNumbersValidation(inputedNumbers) {
    if (this.isExistDuplication(inputedNumbers))
      throw new Error(ERROR_MESSAGE.duplicateNumber);
    if (!isBaseballGameInput(inputedNumbers, { size: RULES.digitCount }))
      throw new Error(ERROR_MESSAGE.invalidInput);
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
    return cntStrike === RULES.digitCount;
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
    while (computer.length < RULES.digitCount) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#answer = computer.join('');
  }
}

export default App;
