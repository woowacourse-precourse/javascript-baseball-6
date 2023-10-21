import { Console, Random } from "@woowacourse/mission-utils";

const NUMBER_LENGTH = 3;

function start() {
  Console.print('숫자 야구 게임을 시작합니다.');

  // 컴퓨터의 랜덤값 생성
  const computer = [];
  while(computer.length < NUMBER_LENGTH) {
    const number = Random.pickNumberInRange(1, 9);
    if(!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

async function progress(computer) {
  while(true) {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const user = (input + '').split('').map((num) => parseInt(num));
    user.map((item) => Console.print(item));
    validateNumber(user);
    const gameResult = getResult(computer, user);
    Console.print(gameResult);

    if(gameResult === '3스트라이크') {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
      break;
    }
  }
}

function getResult(computer, user) {
  let strike = 0;
  let ball = 0;

  for(let computerItem in computer) {
    for(let userItem in user) {
      if(computer[computerItem] === user[userItem]) {
        if(computerItem === userItem) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }

  if(strike + ball === 0) {
    return '낫싱'
  } else if(strike === 0) {
    return `${ball}볼`
  } else if(ball === 0) {
    return `${strike}스트라이크`
  } else {
    return `${ball}볼 ${strike}스트라이크`
  }
}

function validateNumber(number) {
  if(number.length !== 3) {
    throw Error("[ERROR] 올바른 형식이 아닙니다.");
  } else {
    for(let item in number) {
      if(item === NaN) {
        throw Error("[ERROR] 올바른 형식이 아닙니다.");
      }
      if(item === 0) {
        throw Error("[ERROR] 올바른 형식이 아닙니다.");
      }
    }
    if(number.length !== new Set(number).size) {
      throw Error("[ERROR] 겹치는 숫자가 있습니다.");
    }
  }
}

async function finish() {
  // 게임 재시작 여부 멘트 출력
  Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
  const input = await Console.readLineAsync('입력해주세요 : ')
  
  if(input === '1') return true
  else if(input === '2') return false
  else {
    throw new Error("[ERROR] 잘못된 형식입니다.");
  }
}

class App {
  async play() {
    let playing = true;
    while(playing) {
      const computer = start();
      await progress(computer);
      playing = await finish();
    }
  }
}

export default App;
