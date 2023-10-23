import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    // 게임 실행 여부 저장
    this.start = true;
  }

  async play() {
    // 1. 게임 안내
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (this.start) {
      // 2. 컴퓨터의 정답 생성
      const computerAnswer = this.makeRandomAnswer();

      try {
        // 3. 게임 시작! 정답 맞추기
        await this.playBaseballGame(computerAnswer);

        // 4. 게임 재시작 여부 확인하기
        this.start = await this.restart();
      } catch (error) {
        throw error;
        this.start = false;
      }
    }
  }

  // 랜덤 숫자로 이루어진 배열 만들기
  makeRandomAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9); // 1-9자리 랜덤 숫자 추출
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  // 숫자 야구 게임하기
  async playBaseballGame(computerAnswer) {
    try {
      let result = "";
      do {
        // 사용자 답안 입력 받기
        let userAnswer = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        // 사용자 답안 유효성 검사
        this.validateUserAnswer(userAnswer);
        userAnswer = userAnswer.split("").map((v) => +v);
        // 정답과 사용자 답안을 비교해서 볼/스트라이크 판단
        result = this.compareAnswer(userAnswer, computerAnswer);
        MissionUtils.Console.print(result);
      } while (result !== "3스트라이크");
      MissionUtils.Console.print("3의 숫자를 모두 맞히셨습니다! 게임 종료");
    } catch (error) {
      throw error;
    }
  }

  // 입력된 숫자에 대한 유효성 검사
  validateUserAnswer(userAnswer) {
    if (
      userAnswer.length !== 3 ||
      isNaN(+userAnswer) ||
      new Set(userAnswer).size !== 3
    ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  // 볼/스트라이크 분석하기
  compareAnswer(userAnswer, computerAnswer) {
    let answer = "";
    const count = {
      ball: 0,
      strike: 0,
    };
    // 볼/스트라이크 계산
    for (let i = 0; i < 3; i++) {
      if (computerAnswer.indexOf(userAnswer[i]) === i) {
        count["strike"]++;
      } else if (computerAnswer.indexOf(userAnswer[i]) !== -1) {
        count["ball"]++;
      }
    }
    if (count["strike"] === 0 && count["ball"] === 0) {
      answer = "낫싱";
    } else {
      answer += count["ball"] > 0 ? `${count["ball"]}볼` : ``;
      answer += count["ball"] > 0 && count["strike"] > 0 ? ` ` : ``;
      answer += count["strike"] > 0 ? `${count["strike"]}스트라이크` : ``;
    }
    return answer;
  }

  // 재시작 or 종료 확인
  async restart() {
    const userChoice = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (userChoice === "1") {
      return true;
    } else if (userChoice === "2") {
      return false;
    }
  }
}

const app = new App();
app.play();

export default App;
