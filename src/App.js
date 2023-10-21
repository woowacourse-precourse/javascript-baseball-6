import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    console.log('숫자 야구 게임을 시작합니다.');
    await this.playGame();    
  }

  async playGame() {
    const computer = this.computerNumber();

    while (true) {
      const user = await this.userNumber();
      this.validateInput(user);
      const isEnd = this.check(computer, user);
      
      if (isEnd) break;
    }

    console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');    
        
    const option = await this.endingOption();
    if (option == 1) {
      await this.playGame();
    } else {
      Console.print('게임 종료');
    }
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

  async endingOption() {
    const option = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n');
    if (option != 1 && option != 2) {
      throw new Error('[ERROR] 1,2만 입력할 수 있습니다.');  
    }
    return option;
  }
}

export default App;
