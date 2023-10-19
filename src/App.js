import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    generateAnswer();
  }
}

const app = new App();
app.play();

function generateAnswer() {
  const answer = [];
  while(answer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!answer.includes(number)) {
      answer.push(number)
    }
  }

  console.log(answer);
}

export default App;
