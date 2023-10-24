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

function compareNumbers(computerAnswer, userAnswer) {
  let ball = 0;
  let strike = 0;
  for (let i = 0; i < 2; i++) {
    if (computerAnswer[i] == userAnswer[i]) {
      strike++
    }
    if (userAnswer.includes(computerAnswer[i])) {
      ball++
    }
  }
  if (strike == 3) {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
  }
  if (ball > 0) {
    Console.print(`${ball}볼`)
  }
  if (strike > 0 && strike != 3) {
    Console.print(`${strike}스트라이크`)
  }
}

class App {
  async play() {
    try {
      Console.print('숫자 야구 게임을 시작합니다.');
      let computerAnswer = createComputerNumber();
      let userAnswer = await Console.readLineAsync('숫자를 입력해주세요: ');
      compareNumbers(computerAnswer, userAnswer.split(''))
    } catch (err) {
      Console.print(err);
    } 
  } 
}

const app = new App();
app.play();

export default App;
