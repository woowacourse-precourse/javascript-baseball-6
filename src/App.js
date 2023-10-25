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

function PrintOutput(ball, strike) {
  let output = '';
  if (strike === 3) {
    return ['3스트라이크', 1];
  } else if (strike === 0 && ball === 0) {
    return ['낫싱', 0];
  }
  if (ball !== 0) output += `${ball}볼 `;
  if (strike !== 0) output += `${strike}스트라이크`;

  return [output, 0];
}

function CheckString(input) {
  if (!REG_INPUT_NUMBER.test(input))
    throw new Error('[ERROR] Input Value is Incorrect.');
}

function CheckRestartInput(input) {
  if (input === '1') return true;
  if (input === '2') return false;

  throw new Error(
    '[ERROR] Input Value is Incorrect. You have to choose 1 or 2.'
  );
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
  Console.print(result);
  isRestartGame(isEnd);
}

async function isRestartGame(isEnd) {
  if (!isEnd) return;
  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  try {
    const choice = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    const restart = CheckRestartInput(choice);
  } catch (error) {
    throw new Error(error, '[ERROR] readLineAsync Promise Rejected.');
  }
}

const app = new App();
app.play();

export default App;
