import { Console, Random } from "@woowacourse/mission-utils";

const NUMBER_LENGTH = 3;

class App {
  async play() {
    let playing = true; // 게임 진행 여부를 확인하는 변수
    while(playing) {
      const computer = this.start();
      await this.progress(computer);
      playing = await this.finish();
    }
  }

  // 게임 시작 함수
  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computer = [];
    while(computer.length < NUMBER_LENGTH) {
      const number = Random.pickNumberInRange(1, 9);
      if(!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  // 게임 진행 함수
  async progress(computer) {
    while(true) {
      const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
      const user = (input + '').split('').map((num) => parseInt(num));

      this.validateNumber(user); // 숫자 유효 여부 확인

      const gameResult = this.getResult(computer, user);
      Console.print(gameResult);

      if(gameResult === '3스트라이크') {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
        break;
      }
    }
  }

  // 게임 종료 함수
  async finish() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
    const input = await Console.readLineAsync('입력해주세요 : ')
    
    if(input === '1') return true
    else if(input === '2') return false
    else {
      throw new Error('[ERROR] 올바른 형식이 아닙니다.');
    }
  }

  // 사용자가 입력한 숫자가 유효한 형식인지 확인하는 함수
  validateNumber(number) {
    if(number.length !== NUMBER_LENGTH) {
      throw Error('[ERROR] 세 자리의 수가 아닙니다.');
    } else {
      for(let item in number) {
        if(item === NaN) {
          throw Error('[ERROR] 문자가 포함되어 있습니다.');
        }
        if(item === 0) {
          throw Error('[ERROR] 1~9 사이의 숫자가 아닙니다.');
        }
      }
      if(number.length !== new Set(number).size) {
        throw Error('[ERROR] 중복되는 숫자가 있습니다.');
      }
    }
  }

  // 게임 진행 중 사용자가 입력한 값에 대한 결과를 보여주는 함수
  getResult(computer, user) {
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
}

export default App;
