import { Console, Random } from '@woowacourse/mission-utils';

const COMPUTER_NUM_LEN = 3;

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      const computerNum = this.selectRandomNum();

      while (true) {
        const playerNumStr = await Console.readLineAsync('숫자를 입력해주세요 : ');
        if (playerNumStr.length !== COMPUTER_NUM_LEN) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.')
        }
        const playerNum = [...playerNumStr].map((num) => parseInt(num));
        
        const result = this.checkAnswer(computerNum, playerNum);
        const hint = this.printHint(result);

        if (hint === `${COMPUTER_NUM_LEN}스트라이크`) {
          Console.print(`${COMPUTER_NUM_LEN}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
          break;
        }
      }

      const gameEndQuestion = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
      if (gameEndQuestion === '2') {
        Console.print('게임종료');
        break;
      } else if (gameEndQuestion === '1') {
        continue;
      } else {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.')
      }
    }
  }

  selectRandomNum() {
    const computer = [];
    while (computer.length < COMPUTER_NUM_LEN) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  checkAnswer(computerNum, playerNum) {
    const result = {
      ball: 0,
      strike: 0
    };

    computerNum.forEach((computerNumElement, computerNumIndex) => {
      playerNum.forEach((playerNumElement, playerNumIndex) => {
        if (computerNumElement === playerNumElement) {
          if (computerNumIndex === playerNumIndex) {
            result.strike++;
          } else {
            result.ball++;
          }
        }
      })
    })

    return result;
  }

  printHint({ ball, strike }) {
    let result;

    if (strike === 0 && ball === 0) {
      result = '낫싱';
    } else if (strike !== 0 && ball === 0) {
      result = `${strike}스트라이크`;
    } else if (strike === 0 && ball !== 0) {
      result = `${ball}볼`;
    } else {
      result = `${ball}볼 ${strike}스트라이크`; 
    }

    Console.print(result);
    return result;
  }
}

export default App;

const app = new App();
app.play();