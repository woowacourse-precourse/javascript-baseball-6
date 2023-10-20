import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

// async 내부에는 await + Method를 할 것
// Random.<Method Name> 을 통해 랜덤을 사용할 것
// Console.<Method Name> 을 통해 콘솔을 사용할 것

class App {
  // 야구게임 정답 생성
  generateRandomNumber() {
    let numArr = [];
    while (numArr.length < 3) {
      let pickNum = Random.pickNumberInRange(1, 9);
      if (!numArr.includes(pickNum)) numArr.push(pickNum);
    }
    return numArr;
  }

  // 야구게임 정답 판별
  checkAnswer(input = [], answer = []) {
    if (
      !Array.isArray(input) ||
      !Array.isArray(answer) ||
      input.length !== 3 ||
      answer.length !== 3
    ) {
      throw new Error("[ERROR] 올바르지 않은 인자 형식입니다.");
    }
    let message = "";
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (input[i] === answer[i]) {
        strike++;
      } else if (answer.includes(input[i])) {
        ball++;
      }
    }

    message += ball !== 0 ? `${ball}볼 ` : ``;
    message += strike !== 0 ? `${strike}스트라이크` : ``;

    return message.length === 0 ? `낫싱` : message;
  }

  // 야구게임 진행구간
  async playBaseballGame(answer) {
    try {
      let input = await this.userInputNumbers();
      let check = await this.checkAnswer(input, answer);

      await Console.print(check);

      if (check !== "3스트라이크") {
        // 재귀적 호출로 게임 계속 진행
        return await this.playBaseballGame(answer);
      }

      return await Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    } catch (e) {}
  }

  // 유저의 숫자 입력받기 + 예외처리
  async userInputNumbers() {
    try {
      let input = await Console.readLineAsync("숫자를 입력해주세요 : ");

      if (input === "") throw new Error("[ERROR] 입력된 값이 없습니다");
      if (input && input.length !== 3)
        throw new Error("[ERROR] 3자리의 숫자를 입력해주세요");
      if (input && input.includes(NaN))
        throw new Error("[ERROR] 숫자를 입력해주세요");

      if (input !== undefined) input = input.split("").map(Number);

      return input;
    } catch (e) {}
  }

  // 게임이 진행되는 곳
  async play() {
    try {
      // 시작 멘트
      Console.print("숫자 야구 게임을 시작합니다.");

      // 야구게임 정답 생성
      let answer = this.generateRandomNumber();

      await this.playBaseballGame(answer);

      // 야구게임 재시작 / 종료 이행
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      let selectContinue = await Console.readLineAsync("");

      if (selectContinue === "2") {
        return;
      } else if (selectContinue !== "1") {
        throw new Error("[ERROR] 잘못된 접근입니다");
      }
      return app.play();
    } catch (e) {
      throw e;
    }
  }
}

export default App;

// node src/App.js를 통해 실제 야구게임을 실행해볼수 있다.
const app = new App();
app.play();

// npm test를 통해 최종 테스트 진행할 것
