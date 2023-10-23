import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.computer = [];
    this.userAnswer = [];
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart(this.setComputerNumber());
  }

  gameStart() {
    MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ").then(
      (answer) => {
        this.answerCheck(answer);
        this.userAnswer = answer.split("").map((v) => Number(v));
        this.calculateScore(this.computer, this.userAnswer);
      }
    );
  }

  setComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computer = [...computer];
  }

  duplicateNumber(answer) {
    const userAnswer = [...new Set(answer)];
    if (userAnswer.length !== 3) return false;
    return true;
  }

  answerCheck(answer) {
    if (isNaN(Number(answer))) throw new Error("숫자만 입력해주세요.");
    if (answer.length !== 3) throw new Error("3자리 숫자를 입력해주세요.");
    if (!this.duplicateNumber(answer))
      throw new Error("중복되지 않은 숫자를 입력해주세요.");
  }

  calculateScore(computer, answer) {
    const strikeNumber = computer.filter(
      (number, index) => number === answer[index]
    );

    const ballNumber = computer
      .filter((number) => answer.includes(number))
      .filter((number) => !strikeNumber.includes(number));

    this.scoreDisplay(strikeNumber.length, ballNumber.length);
    if (strikeNumber.length == 3)
      return MissionUtils.Console.print(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
    return this.gameStart();
  }

  scoreDisplay(strike, ball) {
    if (strike === 0 && ball !== 0)
      return MissionUtils.Console.print(`${ball}볼`);
    if (strike !== 0 && ball === 0)
      return MissionUtils.Console.print(`${strike}스트라이크`);
    if (strike === 0 && ball === 0) return MissionUtils.Console.print("낫싱");
    return MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

export default App;
