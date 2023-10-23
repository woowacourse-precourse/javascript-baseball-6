import { Console, Random } from '@woowacourse/mission-utils';

const RANGE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class App {
  async play() {
    const computer = [];
    while (computer.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNumber)) {
        computer.push(randomNumber);
      }
    }
    Console.print('숫자 야구 게임을 시작합니다.');
    try {
      const inputNumber = await Console.readLineAsync(
        '0을 제외한 서로 다른 숫자를 3자리 입력해주세요: '
      );
      const parseArr = inputNumber.split('');
      for (let num of parseArr) {
        let valid = RANGE_NUMBERS.includes(Number(num));
        if (!valid) {
          throw new Error('1~9 사이의 숫자를 입력해야 합니다.');
        }
      }
      if (inputNumber.length !== 3) {
        throw new Error('3자리의 숫자를 입력해야 합니다.');
      }
      const deduplicateObj = new Set(parseArr);
      if (deduplicateObj.size !== inputNumber.length) {
        throw new Error('서로 다른 숫자를 입력해야 합니다.');
      }
    } catch (error) {
      console.log('[ERROR]', error.message);
    }
  }
}

const app = new App();
app.play();

export default App;
