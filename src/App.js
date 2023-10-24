import { Console, Random } from '@woowacourse/mission-utils';

function createComputerNumber() {
  let numbers = [];
  let number;
  do {
    number = Random.pickNumberInRange(1, 9);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  } while (numbers.length < 3);
  return numbers;
}

async function printUserAnswer() {
  try {
    const answer = await Console.readLineAsync('숫자를 입력해주세요: ');
    return answer;
  } catch (error) {
    Console.print('[ERROR]:', error);
  }
}

class App {
  async play() {
    try {
      Console.print('숫자 야구 게임을 시작합니다.');
      let computerAnswer = createComputerNumber();
      let userAnswer = await Console.readLineAsync('숫자를 입력해주세요: ');
      if (computerAnswer.join('') == userAnswer) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      }
    } catch (err) {
      Console.print("[ERROR]: ", err)
    }
  }
}

const app = new App();
app.play();

export default App;
