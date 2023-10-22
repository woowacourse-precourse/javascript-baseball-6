import { print, readLineAsync } from "./utils/console.js";
import { pickNumberInRange } from "./utils/random.js";

class App {
  #computerNumberTypeArr = [];

  async play() {
    print("숫자 야구 게임을 시작합니다.");

    while (true) {
      await this.startGame();
      const answer = await readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      // TODO: 잘못된 입력에 대한 예외처리
      if (answer === "2") {
        print("숫자 야구 게임을 종료합니다. 감사합니다.");
        return;
      }
    }
  }

  async startGame() {
    this.createComputerNumber();
    print(this.#computerNumberTypeArr); // TODO: WILL DELETE LINE
    while (true) {
      const numberTypeStr = await this.guessNumber();
      const judgedInfo = this.judge(
        numberTypeStr.split("").map((n) => parseInt(n))
      );
      this.printJudgedInfo(judgedInfo);

      if (judgedInfo.strikeCnt === 3) {
        print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
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
    const numberTypeStr = await readLineAsync("숫자를 입력해주세요 : ");
    // TODO: 잘못된 입력에 대한 예외처리
    return numberTypeStr;
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
      print("낫싱");
      return;
    }

    const ballMessage = `${judgedInfo.ballCnt}볼`;
    const strikeMessage = `${judgedInfo.strikeCnt}스트라이크`;

    if (judgedInfo.strikeCnt === 0) {
      print(ballMessage);
      return;
    }

    if (judgedInfo.ballCnt === 0) {
      print(strikeMessage);
      return;
    }

    print(ballMessage + " " + strikeMessage);
  }
}

export default App;
