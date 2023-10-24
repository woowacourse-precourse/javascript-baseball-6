import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }

  gameStart() {
    this.setComputerNumber();
    this.setUserNumber();
  }

  async setUserNumber() {
    const USER_NUMBER = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

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
    return answer.split("").map((nbr) => parseInt(nbr, 10));
  }

  reStartAnswerCheck(answer) {
    if (answer !== "1" && answer !== "2")
      throw new Error("잘못된 값을 입력하였습니다.");
  }

  async calculateScore(computer, answer) {
    const USER_NUMBER = this.answerCheck(answer);
    console.log(computer, USER_NUMBER);
    const strikeNumber = computer.filter(
      (number, index) => number === USER_NUMBER[index]
    );

    const ballNumber = computer
      .filter((number) => USER_NUMBER.includes(number))
      .filter((number) => !strikeNumber.includes(number));

    this.scoreDisplay(strikeNumber.length, ballNumber.length);

    if (strikeNumber.length === 3) {
      const RESET_NUMBER = await MissionUtils.Console.readLineAsync(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
      );
      this.reStart(RESET_NUMBER);
    } else this.setUserNumber();
  }

  scoreDisplay(strike, ball) {
    if (strike === 0 && ball !== 0)
      return MissionUtils.Console.print(`${ball}볼`);
    if (strike !== 0 && ball === 0)
      return MissionUtils.Console.print(`${strike}스트라이크`);
    if (strike === 0 && ball === 0) return MissionUtils.Console.print("낫싱");
    return MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  async reStart(answer) {
    this.reStartAnswerCheck(answer);
    if (answer === "1") this.gameStart();
    else return;
  }
}

const test = new App();
test.play();

export default App;
