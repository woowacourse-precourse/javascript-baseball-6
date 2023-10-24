import { Console, Random } from '@woowacourse/mission-utils';

function makeRamdomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

async function getUserNumber() {
  const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
  
  if (!/^[1-9]{3}$/.test(Number(input)))
    throw new Error('[ERROR] 입력한 숫자가 잘못된 형식입니다.');

  const inputSet = new Set(input.split('').map((digit) => Number(digit)));
  if (input.length !== inputSet.size)
    throw new Error('[ERROR] 입력한 숫자에 중복된 숫자가 있습니다.');

  return input.split('').map(Number);
}

function getHint(input, computer) {
  let strike = 0;
  let ball = 0;

  computer.map((computerElement, computerIndex) => {
    input.map((inputElement, inputIndex) => {
      if (computerElement === inputElement) {
        if (computerIndex === inputIndex) {
          strike++;
        } else {
          ball++;
        }
      }
    });
  });

  return {strike, ball};
}

function printHint(strike, ball) {
  if (strike === 0 && ball === 0) {
    Console.print('낫싱');
  } else if (strike !== 0 && ball !== 0) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (strike !== 0) {
    Console.print(`${strike}스트라이크`);
  } else if (ball !== 0) {
    Console.print(`${ball}볼`);
  }
}

async function compareUserAndRamdomNumber(computer) {
  while (1) {
    const input = await getUserNumber();
    const { strike , ball } = getHint(input, computer);
    //console.log('strike , ball', strike , ball);
    printHint(strike, ball);
    if (strike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return startGameAgian();
    }
  }
}

async function startGameAgian() {
  const executeCondition = Number(await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'));
  
  if (executeCondition === 1) {
    return true;
  } else if (executeCondition === 2) {
    return false;
  } else {
    throw new Error('[ERROR] 게임 실행 조건을 잘못 입력하셨습니다.');
  }
}

class App {
  async play() {
    let isExecute = false;
    while(!isExecute) {
      Console.print('숫자 야구 게임을 시작합니다.');
      const computer = makeRamdomNumber();
      isExecute = await compareUserAndRamdomNumber(computer);
    }
  }
}


const app = new App();
app.play();

export default App;
