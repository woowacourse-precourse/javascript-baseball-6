import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.computerNumber = []
  }
  //상대방 숫자 랜덤 생성
  generateRandomNumber() {
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }
  //스트라이크 볼 개수 결과 출력
  showResults(strikeNumbers, ballNumbers) {
    if (strikeNumbers === 0 && ballNumbers !== 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strikeNumbers === 0) {
      MissionUtils.Console.print(`${ballNumbers}볼`);
    } else if (ballNumbers === 0) {
      MissionUtils.Console.print(`${strikeNumbers}스트라이크`);
    }
    MissionUtils.Console.print(`${ballNumbers}볼 ${strikeNumbers}스트라이크`);
  }
  //유저의 숫자와 컴퓨터의 숫자 비교
  compareNumbers(guessNumber) {
    let strikeNumbers = 0,
      ballNumbers = 0;
    for (let i = 0; i < 3; i++) {
      if (parseInt(guessNumber[i]) === this.computerNumber[i]) {
        strikeNumbers += 1;
      } else if (this.computerNumber.includes(parseInt(guessNumber[i]))) {
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
  //유저가 숫자 입력
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
      throw new Error("[ERROR]");
    } else {
      if (this.compareNumbers(guessNumber) === 3) {
        this.gameExiter();
        return;
      }
    }
  }
  //게임 시작할시 필요한 메소드들
  async startGame() {
    this.generateRandomNumber();
    await this.askNumber();
  }
  //게임이 끝난 후 유저의 입력값에 따라 재시작 or 종료
  async gameExiter() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const EXIT_NUMBER = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (EXIT_NUMBER === "1") {
      this.computerNumber.length = 0;
    } else if (EXIT_NUMBER === "2") {
      MissionUtils.Console.print("게임을 종료합니다.");
      return;
    } else {
      throw new Error("[ERROR]");
    }
    this.startGame();
  }
  async play() {
    await this.startGame();
  }
}

export default App;
