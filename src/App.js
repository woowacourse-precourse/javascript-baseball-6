import { MissionUtils } from '@woowacourse/mission-utils';

const CNT_NUMBER = 3;

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let round = true;
    while (round) {
      const randomNum = this.makeRandomNumber();
      await this.playGame(randomNum);
      round = await this.end();
    }
  }

  makeRandomNumber() {
    const randomNum = [];
    while (randomNum.length < CNT_NUMBER) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) {
        randomNum.push(number);
      }
    }
    return randomNum;
  }

  async playGame(randomNum) {
    while(true) {
      const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      const userInput = input.split('').map(Number);

      this.validateInput(input);

      let balls = this.countBall(randomNum, userInput);
      let strikes = this.countStrike(randomNum, userInput);

      const gameResult = this.gameResult(balls, strikes);
      MissionUtils.Console.print(this.gameResult(balls, strikes));

      if (gameResult === '3스트라이크') {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        break;
      }
    }
  }

  async end() {
    const decision = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    
    if(decision === '1') return true;
    else if(decision === '2') return false;
    else throw new Error('[ERROR] 올바른 형식이 아닙니다.');
  }

  validateInput(input) {
    const userInputSet = new Set(input.split('').map(Number));

    if (input.length !== CNT_NUMBER) throw Error('[ERROR]세 자리 수를 입력해주세요.');
    if ([...userInputSet].length !== CNT_NUMBER) throw Error('[ERROR]중복되지 않는 세 자리 수를 입력해주세요.');
    if (Number.isNaN(input)) throw Error('[ERROR]숫자만 입력해주세요.');
    if (input.includes(' ')) throw Error('[ERROR]공백은 입력하지 마세요.');
  }

  countStrike(randomNum, userInput) {
    let strikes = 0;
    
    for (let i = 0; i < CNT_NUMBER; i++) {
      if (randomNum[i] === Number(userInput[i])) strikes += 1;
    }

    return strikes;
  }

  countBall(randomNum, userInput) {
    let balls = 0;

    for (let i = 0; i < CNT_NUMBER; i++) {
      if (
        randomNum[i] !== Number(userInput[i]) && randomNum.includes(Number(userInput[i]))
      ) {
        balls += 1;
      }
    }

    return balls;
  }

  gameResult(ball, strike) {
    if (ball !== 0 && strike !== 0) return `${ball}볼 ${strike}스트라이크`;
    if (ball !== 0 && strike === 0) return `${ball}볼`;
    if (ball === 0 && strike !== 0) return `${strike}스트라이크`;
    return '낫싱';
  }
}

export default App;