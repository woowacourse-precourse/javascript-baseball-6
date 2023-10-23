import Pitcher from './Pitcher.js';
import Catcher from './Catcher.js';

class Umpire {
  getResultOfJudgment(inputPitcherNumbers) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (inputPitcherNumbers[i] === this.catcherNumbers[i]) {
        strikes += 1;
      } else if (this.catcherNumbers.includes(inputPitcherNumbers[i])) {
        balls += 1;
      }
    }
    let result = '';

    if (balls > 0) {
      result = `${balls}볼 `;
    }

    if (strikes > 0) {
      result += `${strikes}스트라이크`;
    }

    if (result === '') {
      result = '낫싱';
    }

    Console.print(result);
    return result;
  }
}

export default Umpire;

