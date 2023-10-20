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
      if (!numArr.includes(pickNum)) {
        numArr.push(pickNum);
      }
    }
    // numArr = [1, 3, 5];
    return numArr;
  }

  // 야구게임 정답 판별
  checkAnswer(input, answer) {
    if (input.length !== 3) {
      throw new Error("[ERROR] 3자리의 숫자를 입력해주세요");
    }
    if (input.includes(NaN)) {
      throw new Error("[ERROR] 숫자가 아닌 문자를 입력하였습니다");
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
    if (ball !== 0) {
      message += `${ball}볼 `;
    }
    if (strike !== 0) {
      message += `${strike}스트라이크`;
    }
    if (message.length === 0) {
      message = "낫싱";
    }
    return message;
  }

  // 야구게임 재시작 / 종료 이행
  newGameOrQuit(selectContinue) {
    if (selectContinue === "1") {
      this.play();
    } else if (selectContinue === "2") {
      return;
    } else {
      throw new Error("[ERROR] 잘못된 접근입니다");
    }
  }

  // 게임이 진행되는곳
  async play() {
    // 시작 멘트
    await Console.print("숫자 야구 게임을 시작합니다.");

    // 야구게임 정답 생성
    let answer = await this.generateRandomNumber();

    while (true) {
      // 야구게임 정답 입력
      let input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      input = input.split("").map(Number);

      // 야구게임 정답 판별
      try {
        let check = await this.checkAnswer(input, answer);

        if (check.includes("3스트라이크")) {
          await Console.print(check);
          break;
        } else {
          await Console.print(check);
        }
      } catch (e) {
        throw e;
        // Error: 숫자가 아닌 문자를 입력하였습니다
        return;
      }
    }
    await Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    // 야구게임 재시작 / 종료 이행 (정상작동) (class로 변경 예정)
    await Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    let selectContinue = await Console.readLineAsync("");
    if (selectContinue === "1") {
      this.play();
    } else if (selectContinue === "2") {
      return;
    } else {
      throw new Error("[ERROR] 잘못된 접근입니다");
    }
  }
}

export default App;

// node src/App.js를 통해 실제 야구게임을 실행해볼수 있다.
const app = new App();
app.play();

// npm test를 통해 최종 테스트 진행할 것
