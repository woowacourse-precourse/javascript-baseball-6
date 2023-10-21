import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = this.computerNumber();

    while (true) {
      const user = await this.userNumber();
      this.validateInput(user);

      const isEnd = this.check(computer, user);
      
      if (isEnd) break;
    }
    
    console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');    
  }

  computerNumber() {
    const numbers = [];

    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers.join('');
  }

  async userNumber() {
    return Console.readLineAsync('숫자를 입력해주세요 : ' );
  }

  validateInput(value) {
    const regex = /^(?!.*(.).*\1)\d{3}$/;

    if (!regex.test(value)) {
      throw new Error('[ERROR] 잘못된 입력값 입니다.');
    }
  }

  check(computer, user) {
    let strikes = 0;
    let balls = 0;
    
    for (let i = 0; i < 3; i++) {
      if (user[i] == computer[i]) {
        strikes++;
      } else if (computer.includes(user[i])) {
        balls++;
      }
    }

    if (strikes == 3) {
      Console.print('3스트라이크');
      return true;
    }
    
    if (strikes == 0 && balls == 0) {
      Console.print('낫싱');
    } else if (strikes == 0) {
      Console.print(`${balls}볼`);
    } else if (balls == 0) {
      Console.print(`${strikes}스트라이크`);
    } else {
      Console.print(`${balls}볼 ${strikes}스트라이크 `);
    }
    
    return false; 
  }
}

export default App;
