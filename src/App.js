import { Random, Console } from '@woowacourse/mission-utils';


class App {
  // 답 생성
  static setRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    
    Console.print(randomNumber); // 확인
  }

  static play() {
    Console.print('숫자 야구 게임을 시작합니다')
    this.setRandomNumber();
  }
}

App.play();

export default App;
