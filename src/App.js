import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    this.gameStart(this.setComputerNumber());
  }

  // 게임 시작.
  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ").then(
      (answer) => {
        this.answerCheck(answer);
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
    return computer;
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
}

export default App;
