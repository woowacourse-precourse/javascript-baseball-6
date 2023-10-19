import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const number = await InputNumber();
  }
}

const REG_INPUT_NUMBER = /^(?!.*(\d).*\1)\d{3}$/;

async function InputNumber() {
  try {
    const yourNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    checkString(yourNumber);
  } catch (error) {
    throw new Error(error, 'readLineAsync Promise Rejected.');
  }
}

function checkString(input) {
  if (!REG_INPUT_NUMBER.test(input))
    throw new Error('Input Value is Incorrect.');
}

const app = new App();
app.play();

export default App;
