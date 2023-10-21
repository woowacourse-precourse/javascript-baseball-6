import { Random, Console } from '@woowacourse/mission-utils';

class App {
  static setRandomNumber() {
    const randomNumber = [];

    while (randomNumber.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(num)) randomNumber.push(num);
    }

    Console.print(randomNumber); // todo delete
  }

  static async setAnswer() {
    const inputNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');

    if (!inputNumber.match(/^[1-9]{3}$/)) {
      throw new Error('[ERROR] 세자리 숫자를 입력해주세요.');
    }
  }

  static play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    this.setRandomNumber();
    this.setAnswer();
  }
}

App.play(); // todo delete

export default App;
