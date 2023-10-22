import { MissionUtils } from '@woowacourse/mission-utils';
class Baseball {
  #randomNumber;

  constructor() {
    this.makeRandomNumber();
  }

  async gameStart() {
    let isPlaying = true;
    MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
    while (isPlaying) {
      const userinputNumber = await this.getUserinputNumber(false);
      const gameResult = this.calcGameCount(userinputNumber);
      MissionUtils.Console.print(this.makeGameResultString(gameResult));
      if (gameResult.strikeCount === 3) {
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        MissionUtils.Console.print(
          `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
        );
        const userinputNumber = await this.getUserinputNumber(true);
        if (userinputNumber === 1) {
          this.makeRandomNumber();
        } else {
          isPlaying = false;
        }
      }
    }
  }
  async getUserinputNumber(gameOver) {
    try {
      const userinput = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );
      if (!gameOver) {
        if (this.checkInputGamePlaying(userinput)) {
          return Number(userinput);
        }
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      } else {
        if (this.checkInputGameOver(userinput)) {
          return Number(userinput);
        }
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    } catch (error) {
      // reject 되는 경우
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }

  checkInputGamePlaying(userinput) {
    if (userinput.length !== 3) {
      return false;
    }
    const set = new Set();
    for (let c of userinput) {
      if ('0' <= c && c <= '9') {
        set.add(c);
      }
    }
    if (set.size === 3) {
      return true;
    }
    return false;
  }

  checkInputGameOver(userinput) {
    if (userinput === '1' || userinput === '2') {
      return true;
    }
    return false;
  }

  makeRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#randomNumber = [...computer];
  }

  calcGameCount(userinputNumber) {
    const userinputNumberArray = Array.from(String(userinputNumber), Number);
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < this.#randomNumber.length; i++) {
      if (this.#randomNumber.at(i) === userinputNumberArray.at(i)) {
        strikeCount += 1;
      } else if (this.#randomNumber.includes(userinputNumberArray.at(i))) {
        ballCount += 1;
      }
    }
    return { strikeCount, ballCount };
  }

  makeGameResultString({ strikeCount, ballCount }) {
    if (strikeCount === 0 && ballCount === 0) {
      return `낫싱`;
    } else if (strikeCount !== 0 && ballCount === 0) {
      return `${strikeCount}스트라이크`;
    } else if (strikeCount === 0 && ballCount !== 0) {
      return `${ballCount}볼`;
    } else if (strikeCount !== 0 && ballCount !== 0) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
  }
}
export default Baseball;
