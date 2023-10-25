import { MissionUtils, Console } from '@woowacourse/mission-utils';

const REG_INPUT_NUMBER = /^(?!.*([1-9]).*\1)[1-9]{3}$/;

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerNumber = CreateComputerNumber(3);
    const number = await InputNumber();
    CompareNumber(computerNumber, number);
  }
}

async function InputNumber() {
  try {
    const yourNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    CheckString(yourNumber);
    return yourNumber;
  } catch (error) {
    throw new Error(error, '[ERROR] readLineAsync Promise Rejected.');
  }
}

function CheckString(input) {
  if (!REG_INPUT_NUMBER.test(input))
    throw new Error('[ERROR] Input Value is Incorrect.');
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
  return number;
}

function CompareNumber(computerNumber, myNumber) {
  const myArrayNumber = myNumber.split('').map(Number);

  let ball = 0;
  let strike = 0;
  let comDigits = 0;
  computerNumber.forEach((comNum) => {
    let myDigits = 0;
    myArrayNumber.forEach((myNum) => {
      if (comNum === myNum) {
        if (comDigits === myDigits) strike++;
        else ball++;
      }
      myDigits++;
    });
    comDigits++;
  });
  const [result, isEnd] = PrintOutput(ball, strike);
  Console.print(computerNumber);
  Console.print(result);
}

function PrintOutput(ball, strike) {
  let output = '';
  if (strike === 3) {
    return ['3스트라이크', 1];
  } else if (strike === 0 && ball === 0) {
    return ['낫싱', 0];
  }
  if (ball !== 0) output += `${ball}볼`;
  if (strike !== 0) output += ` ${strike}스트라이크`;

  return [output, 0];
}

const app = new App();
app.play();

export default App;
