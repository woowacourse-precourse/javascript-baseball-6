import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const answerNumberArray = generateAnswerNumber(); // 정답 숫자 생성

  }
}

export default App;

function generateAnswerNumber() { // 정답 숫자 배열 생성
  const numbers = [];
  while (numbers.length < 3) {
    const n = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!numbers.includes(n)) {
      numbers.push(n)
    }
  }

  return numbers;
}

const app = new App();
app.play();