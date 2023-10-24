import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.computerNumber();//숫자 출력해보기
  }

  computerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    console.log("컴퓨터 숫자", computer);
  }
}

export default App;

//실행 시키기
const app = new App();
app.play();
