import { MissionUtils } from "@woowacourse/mission-utils";
const COMPUTER_NUMBER = [];

class App {
  generateRandomNumber() {
    while (COMPUTER_NUMBER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUMBER.includes(number)) {
        COMPUTER_NUMBER.push(number);
      }
    }
  }
  showResults(strikeNumbers, ballNumbers) {
    if (strikeNumbers === 0 && ballNumbers === 0) {
      MissionUtils.Console.print("낫싱");
    } else {
      strikeNumbers === 0 && ballNumbers !== 0 && MissionUtils.Console.print(`${ballNumbers}볼`);
      strikeNumbers !== 0 && ballNumbers === 0 && MissionUtils.Console.print(`${strikeNumbers}스트라이크`);
      strikeNumbers !== 0 && ballNumbers !== 0 && MissionUtils.Console.print(`${ballNumbers}볼 ${strikeNumbers}스트라이크`);
    }
  }
  //유저의 숫자와 컴퓨터의 숫자 비교
  compareNumbers(guessNumber) {
    let strikeNumbers = 0,
      ballNumbers = 0;
    for (let i = 0; i < 3; i++) {
      if (parseInt(guessNumber[i]) === COMPUTER_NUMBER[i]) {
        strikeNumbers += 1;
      } else if (COMPUTER_NUMBER.includes(parseInt(guessNumber[i]))) {
        ballNumbers += 1;
      }
    }
    this.showResults(strikeNumbers, ballNumbers);
    return strikeNumbers;
  }
  //각 자리 숫자들이 서로 다른지 판별
  verifyUniqueDigit(guessNumber) {
    const digit1 = Math.floor(guessNumber / 100);
    const digit2 = Math.floor((guessNumber % 100) / 10);
    const digit3 = guessNumber % 10;
    return !(digit1 !== digit2 && digit1 !== digit3 && digit2 !== digit3);
  }
  async askNumber() {
    const guessNumber = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    if (
      guessNumber.length !== 3 ||
      !guessNumber ||
      isNaN(guessNumber) ||
      this.verifyUniqueDigit(guessNumber)
    ) {
      throw new Error('[ERROR]');
    } else {
      if (this.compareNumbers(guessNumber) === 3) {
        this.gameExiter();
        return;
      }
    }
    await this.askNumber();
  }

  async startGame() {
    this.generateRandomNumber();
    await this.askNumber();
  }
  async gameExiter() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const exitNumber = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (exitNumber === "1") {
      COMPUTER_NUMBER.length = 0;
    } else if (exitNumber === "2") {
      MissionUtils.Console.print("게임을 종료합니다.");
      return;
    } else {
      throw new Error('[ERROR]');
    }
    this.startGame();
  }

  async play() {
    await this.startGame();
  }
}

export default App;
