import { MissionUtils, Console } from '@woowacourse/mission-utils';

const REG_INPUT_NUMBER = /^(?!.*([1-9]).*\1)[1-9]{3}$/;

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    CreateComputerNumber(3);
    const number = await InputNumber();
  }
}

async function InputNumber() {
  try {
    const yourNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    CheckString(yourNumber);
    return yourNumber;
  } catch (error) {
    throw new Error(error, 'readLineAsync Promise Rejected.');
  }
}

function CheckString(input) {
  if (!REG_INPUT_NUMBER.test(input))
    throw new Error('Input Value is Incorrect.');
}

function CreateComputerNumber(digit) {
  const number = [...Array(digit)].reduce((result) => {
    let randomDigit;
    do {
      randomDigit = MissionUtils.Random.pickNumberInRange(1, 9);
    } while (result.includes(randomDigit));

    result.push(randomDigit);
    return result;
  }, []);

  Console.print(number);
}

const app = new App();
app.play();

export default App;
