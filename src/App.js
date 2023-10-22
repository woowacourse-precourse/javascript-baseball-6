import { print, readLineAsync } from "./utils/console.js";
import { pickNumberInRange } from "./utils/random.js";
import { QUIT, RESTART } from "./constants/input.js";
import { MESSAGE } from "./constants/message.js";

class App {
  #computerNumberTypeArr = [];

  async play() {
    print(MESSAGE.GAME_START);

    while (true) {
      await this.startGame();

      const answer = await readLineAsync(MESSAGE.RESTART_OR_QUIT);

      if (answer !== RESTART && answer !== QUIT) {
        throw new Error(MESSAGE.ERROR_RESTART_OR_QUIT_INPUT_WRONG);
      }

      if (answer === QUIT) {
        print(MESSAGE.APPLICATION_TERMINATED);
        return;
      }
    }
  }

  async startGame() {
    this.createComputerNumber();

    while (true) {
      const userNumberTypeArr = await this.guessNumber();
      const judgedInfo = this.judge(userNumberTypeArr);
      this.printJudgedInfo(judgedInfo);

      if (judgedInfo.strikeCnt === 3) {
        print(MESSAGE.GAME_OVER);
        return;
      }
    }
  }

  createComputerNumber() {
    this.#computerNumberTypeArr = [];

    while (this.#computerNumberTypeArr.length < 3) {
      const number = pickNumberInRange(1, 9);
      if (this.#computerNumberTypeArr.includes(number)) {
        continue;
      }
      this.#computerNumberTypeArr.push(number);
    }
  }

  async guessNumber() {
    const answer = await readLineAsync(MESSAGE.GUESS_NUMBER);

    if (answer.length !== 3) {
      throw new Error(MESSAGE.ERROR_GUESS_NUMBER_INPUT_WRONG);
    }

    const isIncludeNonNumeric = answer
      .split("")
      .some((element) => element > "9" || element < "1");

    if (isIncludeNonNumeric) {
      throw new Error(MESSAGE.ERROR_GUESS_NUMBER_INPUT_WRONG);
    }

    return answer.split("").map((n) => parseInt(n));
  }

  judge(userNumberTypeArr) {
    const judgedInfo = {
      strikeCnt: 0,
      ballCnt: 0,
    };

    for (let i = 0; i < 3; i++) {
      if (this.isStrike(userNumberTypeArr, i)) {
        judgedInfo.strikeCnt++;
      } else if (this.isBall(userNumberTypeArr, i)) {
        judgedInfo.ballCnt++;
      }
    }

    return judgedInfo;
  }

  isStrike(userNumberTypeArr, idx) {
    return userNumberTypeArr[idx] === this.#computerNumberTypeArr[idx]
      ? true
      : false;
  }

  isBall(userNumberTypeArr, idx) {
    return this.#computerNumberTypeArr.includes(userNumberTypeArr[idx])
      ? true
      : false;
  }

  printJudgedInfo(judgedInfo) {
    if (judgedInfo.strikeCnt === 0 && judgedInfo.ballCnt === 0) {
      print(MESSAGE.JUDGE_NOTHING);
      return;
    }

    const ballMessage = `${judgedInfo.ballCnt}${MESSAGE.JUDGE_BALL}`;
    const strikeMessage = `${judgedInfo.strikeCnt}${MESSAGE.JUDGE_STRIKE}`;

    if (judgedInfo.strikeCnt === 0) {
      print(ballMessage);
      return;
    }

    if (judgedInfo.ballCnt === 0) {
      print(strikeMessage);
      return;
    }

    print(`${ballMessage} ${strikeMessage}`);
  }
}

export default App;
