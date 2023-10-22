import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    // 재시도시 메시지 출력 핸들링
    this.firstTime = true;
  }
  async play() {
    if (this.firstTime) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }
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
    while (true) {
      const userAnswer = await this.getUserAnswer();
      if (correctAnswer.join("") === userAnswer) {
        MissionUtils.Console.print("3스트라이크");
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.result();
        break;
      } else {
        const userAnswerArray = userAnswer.split("").map((num) => Number(num));
        this.retry(userAnswerArray, correctAnswer);
      }
    }
  }
  retry(userAnswer, correctAnswer) {
    let ballCount = 0;
    let strikeCount = 0;

    userAnswer.forEach((userNum, userIndex) => {
      correctAnswer.forEach((rightNum, rightIndex) => {
        if (userNum === rightNum) {
          userIndex === rightIndex ? (strikeCount += 1) : (ballCount += 1);
        }
      });
    });

    const ball = ballCount > 0 ? `${ballCount}볼` : "";
    const strike = strikeCount > 0 ? `${strikeCount}스트라이크` : "";

    if (ballCount === 0 && strikeCount == 0) {
      MissionUtils.Console.print("낫싱");
    } else {
      if (ballCount === 0) {
        MissionUtils.Console.print(`${strike}`);
      } else if (strikeCount === 0) {
        MissionUtils.Console.print(`${ball}`);
      } else {
        MissionUtils.Console.print(`${ball} ${strike}`);
      }
    }
  }
  async result() {
    this.firstTime = false;
    const answer = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (answer === "1") {
      this.play();
    } else if (answer === "2") {
      MissionUtils.Console.print("게임 종료");
    } else {
      throw new Error(
        "[ERROR] 잘못된 입력입니다. 재시작은 1번을, 게임 종료는 2번을 입력해 주세요."
      );
    }
  }
}

const app = new App();
app.play();

export default App;
