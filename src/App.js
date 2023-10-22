import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 1. 게임 안내
    Console.print("숫자 야구 게임을 시작합니다.");
    // 2. 컴퓨터의 정답 생성
    computerAnswer = this.makeRandomAnswer;
    // 3. 게임 시작! 정답 맞추기
    return this.playBaseBallGame(computerAnswer);
  }

  // 랜덤 숫자로 이루어진 배열 만들기
  makeRandomAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9); // 1-9자리 랜덤 숫자 추출
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  // 숫자 야구 게임 진행하기
  async playBaseBallGame(computerAnswer) {
    const BALL_STATUS = ["스트라이크", "볼", "낫싱"];
    try {
      // 사용자 답안 입력 받기
      let userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const userAnswer = userInput.split("");
      // 사용자 답안 유효성 검사
      this.validateUserAnswer(userAnswer, computerAnswer);
      // 정답과 사용자 답안 비교 대조
      do {
        this.compareAnswer(userAnswer, computerAnswer);
      } while (userAnswer === computerAnswer);
    } catch (error) {
      Console.print(error.message);
    }
  }

  // 숫자 입력 유효성 검사
  validateUserAnswer(userAnswer, computerAnswer) {
    const setUserAnswer = new Set(userAnswer);
    if (
      userAnswer.length !== 3 ||
      isNaN(userAnswer) ||
      setUserAnswer.size !== 3
    ) {
      throw new Error("[EROOR] 숫자가 잘못된 형식입니다.");
    }
  }

  //
}

const app = new App();
app.play();

export default App;
