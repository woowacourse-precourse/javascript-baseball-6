import { MissionUtils } from '@woowacourse/mission-utils';
class Baseball {
  #randomNumber;
  #isPlaying;

  constructor() {
    this.#isPlaying = true;
    this.makeRandomNumber();
  }

  async getUserinputNumber() {
    try {
      const userinput = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );
      if (this.#isPlaying) {
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
      console.log(error);
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
}
export default Baseball;
