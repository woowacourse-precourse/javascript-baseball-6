import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

// async 내부에는 await + Method를 할 것
// Random.<Method Name> 을 통해 랜덤을 사용할 것
// Console.<Method Name> 을 통해 콘솔을 사용할 것

class App {
  // 시작 멘트
  startMent() {
    console.log("숫자 야구 게임을 시작합니다.");
  }

  // 야구게임 정답 생성
  generateRandomNumber() {
    let numArr = [];
    for (let i = 0; i < 3; i++) {
      numArr.push(Random.pickNumberInRange(1, 9));
    }
    // 추후에 지울 것
    console.log(numArr);
  }

  // 야구게임 정답 판별
  checkAnswer(answer = [0, 0, 0]) {
    console.log(answer);
  }

  // 야구게임 재시작 / 종료 이행

  // 게임이 진행되는곳
  async play() {
    // 시작 멘트
    this.startMent();

    // 야구게임 정답 생성
    let answer = this.generateRandomNumber();

    // 야구게임 정답 입력
    let input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    input = input.split("").map(Number);
    console.log(input);

    // 야구게임 정답 판별
    let check = await this.checkAnswer(answer);
    console.log(check);

    // 야구게임 재시작 / 종료 이행
  }
}

export default App;

// node src/App.js를 통해 실제 야구게임을 실행해볼수 있다.
const app = new App();
app.play();

// npm test를 통해 최종 테스트 진행할 것
