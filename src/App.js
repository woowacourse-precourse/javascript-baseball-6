import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR_MESSAGE } from './Message.js';

class App {
  async play() {
    Console.print(MESSAGE.PLAY);
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

    Console.print(MESSAGE.FINIFH);    
        
    const option = await this.endingOption();
    if (option == 1) {
      await this.playGame();
    } else {
      Console.print(MESSAGE.END);
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
    return Console.readLineAsync(MESSAGE.USERNUMBER);
  }

  validateInput(value) {
    const regex = /^(?!.*(.).*\1)\d{3}$/;

    if (!regex.test(value)) {
      throw new Error(ERROR_MESSAGE.VALIDATEINPUT_ERROR);
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
      Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
    
    return false; 
  }

  async endingOption() {
    const option = await Console.readLineAsync(MESSAGE.ENDINGOPTION);
    if (option != 1 && option != 2) {
      throw new Error(ERROR_MESSAGE.ENDINGOPTION_ERROR);  
    }
    
    return option;
  }
}

export default App;