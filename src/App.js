import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    this.gameStart();
  }

  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.setComputerNumber();
    this.setUserNumber();
  }

  setUserNumber() {
    const USER_NUMBER =
      MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    this.calculateScore(this.computer, USER_NUMBER);
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
    if (
      isNaN(Number(answer)) ||
      answer.length !== 3 ||
      !this.duplicateNumber(answer)
    )
      throw new Error("only number");
  }

  reStartAnswerCheck(answer) {
    if (answer !== "1" && answer !== "2")
      throw new Error("잘못된 값을 입력하였습니다.");
  }

  calculateScore(computer, answer) {
    const strikeNumber = computer.filter(
      (number, index) => number === answer[index]
    );

    const ballNumber = computer
      .filter((number) => answer.includes(number))
      .filter((number) => !strikeNumber.includes(number));

    this.scoreDisplay(strikeNumber.length, ballNumber.length);
    if (strikeNumber.length === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.reStart();
    } else this.gameStart();
  }

  scoreDisplay(strike, ball) {
    if (strike === 0 && ball !== 0)
      return MissionUtils.Console.print(`${ball}볼`);
    if (strike !== 0 && ball === 0)
      return MissionUtils.Console.print(`${strike}스트라이크`);
    if (strike === 0 && ball === 0) return MissionUtils.Console.print("낫싱");
    return MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  reStart() {
    MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 : "
    ).then((answer) => {
      this.reStartAnswerCheck(answer);
      if (answer === "1") this.gameStart();
    });
  }
}

const test = new App();
test.play();

export default App;
