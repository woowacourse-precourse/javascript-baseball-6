import { Console, Random } from '@woowacourse/mission-utils';

// 난수 생성
let computer = [];
const newNumber = () => {
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

// 입력 값 예외 처리
const userNumCheck = async () => {
  let userNumber;
  const userNum = await Console.readLineAsync('숫자를 입력해주세요 : ');
  userNumber = userNum.trim();
  const userNumSet = new Set(userNum.split(""));

  if (userNum.length !== 3 || userNum.includes('0') || userNumSet.size !== 3 || isNaN(parseInt(userNumber))) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  } else {
    return userNumber;
  }
  
}

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    newNumber();
    while (true) {
      let user = await userNumCheck();
      user = user.split('').map(Number);
      let strike = 0;
      let ball = 0;

      for (let i = 0; i < 3; i++) {
        if (computer[i] === user[i]) {
          strike++;
        } else if (computer.includes(user[i])) {
          ball++;
        }
      }

      if (strike === 3) {
        Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const retry = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    
        if (retry == '1') {
          computer = [];
          newNumber();
        } else if (retry === '2') {
          break
        }
      }
    
      if (strike > 0 || ball > 0) {
        if (strike === 0) {
          Console.print(`${ball}볼`);
        } else if (ball === 0) {
          Console.print(`${strike}스트라이크`);
        } else {
          Console.print(`${ball}볼 ${strike}스트라이크`);
        }
      } else {
        Console.print('낫싱');
      }
    }
  }
}

export default App;