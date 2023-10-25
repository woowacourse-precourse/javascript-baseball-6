import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.isPlaying = true;
    this.random = "";
  }

  async play() {
    while (this.isPlaying) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      this.random = this.getRandomNumber();

      while (true) {
        const userInput = await this.getInput();
        const guess = this.guessing(userInput, this.random);
        MissionUtils.Console.print(guess);
        if (guess === "3스트라이크") {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          const restart = await this.askToRestart();
          if (restart) this.isPlaying = true;
          else break;
        }
      }
    }
  }

  // 사용자 입력
  async getInput() {
    const input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    if (!this.isValidInput(input)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return input;
  }

  // 사용자 입력시, 유효성 검사
  isValidInput(input) {
    return /^[1-9]{3}$/.test(input) && new Set(input).size === 3;
  }

  // 사용자-상대방 값 비교하기
  guessing(input, random) {
    let strikeCount = 0;
    let ballCount = 0;

    const randomNum = random.join("");

    for (let i = 0; i < randomNum.length; i++) {
      if (input[i] === randomNum[i]) {
        strikeCount++;
      } else if (randomNum.includes(input[i])) {
        ballCount++;
      }
    }

    if (strikeCount === 0 && ballCount === 0) {
      return "낫싱";
    }

    let result = "";

    if (ballCount > 0) {
      result += `${ballCount}볼 `;
    }

    if (strikeCount > 0) {
      result += `${strikeCount}스트라이크`;
    }

    return result.trim();
  }

  // 재시작 여부 확인
  async askToRestart() {
    const ask = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    MissionUtils.Console.print(ask);
    if (ask === "1") {
      this.isPlaying = true;
    } else if (ask === "2") {
      this.isPlaying = false;
    } else if (ask !== "1" && ask != "2") {
      MissionUtils.Console.print("[ERROR]");
    }
  }

  // 상대방 랜덤 숫자 생성
  getRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const getNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(getNumber)) {
        randomNumber.push(getNumber);
      }
    }
    return randomNumber;
  }
}

export default App;

const app = new App();
app.play();
