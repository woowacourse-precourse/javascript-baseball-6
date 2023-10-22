import { MissionUtils, Random } from '@woowacourse/mission-utils';
class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLineAsync()
  }
}


// 컴퓨터가 랜덤으로 숫자를 고름

class Computer {
  constructor(number1, number2) {
    this.number1 = push(Random.pickNumberInRange(1,10))
    this.number2 = push(Random.pickNumberInRange(1,10))

  }
}

// 서로 다른 세 자리 수 입력받기



// 결과 출력하기

const app = new App();
app.play();

export default App;
