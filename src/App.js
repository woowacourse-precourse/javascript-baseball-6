import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 게임 시작 전
  async play() {
    try {
      const computerNumber = this.generateGame();
      await this.game(computerNumber);
    } catch (error) {
      throw error;
    }
  }
  generateGame() {
    // 게임 제작
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }
  async getUserAnswer() {
    // 유저 입력 get
    const answer = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    const checkNumber = new RegExp(/[1-9]/); // 1 ~ 9까지의 숫자인지 판별
    const checkLength = answer.length !== 3; //"" 길이 체크
    const checkSameNumber = new Set(answer).size !== 3; // 중복된 숫자 유무 판별

    if (!checkNumber.test(answer)) {
      throw new Error(
        "[ERROR] 형식이 옳지 않습니다. 답은 1부터 9까지의 숫자를 입력해 주세요."
      );
    } else if (checkLength) {
      throw new Error("[ERROR] 답변은 3자리로 입력해 주세요.");
    } else if (checkSameNumber) {
      throw new Error("[ERROR] 답변에 중복된 숫자는 들어갈 수 없습니다.");
    }
    return answer;
  }

  async game(correctAnswer) {
    const userAnswer = await this.getUserAnswer();
  }
}

const app = new App();
app.play();

export default App;
