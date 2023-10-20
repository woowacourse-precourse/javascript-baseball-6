import { Console, Random } from '@woowacourse/mission-utils'

const RESTART = '1';
const EXIT = '2';
const RESTART_OR_EXIT = [RESTART, EXIT];

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  getCompuerNumbers() {
    const computerNumbers = [];

    while (computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      };
    };

    return computerNumbers;
  };

  async getUserNumbers() {
    return new Promise((resolve, reject) => {
      Console.readLineAsync('숫자를 입력해주세요 : ').then((userNumbers) => {
        // 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고 애플리케이션을 종료한다.
        // 1. 숫자인지, 숫자라면 3자리인지 체크
        const isValid = /^\d{3}$/.test(userNumbers)
        // 2. 숫자가 중복되는지 체크
        const isDuplicated = userNumbers.split('').some((number, index, numbers) => numbers.indexOf(number) !== index);

        if (!isValid || isDuplicated) {
          reject(new Error('[ERROR] 숫자가 잘못된 형식입니다'))
        }

        resolve(userNumbers.split('').map((number) => parseInt(number)));
      });
    });
  };

  // 볼, 스트라이크 개수 계산하는 함수
  getStrikeOrBall(computerNumbers, userNumbers) {
    let strike = 0;
    let ball = 0;

    computerNumbers.forEach((computerNumber, index) => {
      const userNumber = userNumbers[index];
      if (computerNumber === userNumber) {
        strike += 1;
      } else if (userNumbers.includes(computerNumber)) {
        ball += 1;
      }
    });

    return { strike, ball };
  }

  // 볼, 스트라이크 개수에 따라 결과를 계산하는 함수
  printResult(strike, ball) {
    let result = ''

    if (strike === 0) {
      if (ball === 0) {
        result = '낫싱';
      } else {
        result = `${ball}볼`;
      }
    } else {
      if (ball === 0) {
        result = `${strike}스트라이크`;
      } else {
        result = `${ball}볼 ${strike}스트라이크`;
      }
    }

    Console.print(result);
    return
  }

  async play() {
    let computerNumbers
    
    do {
      if (!computerNumbers) {
        computerNumbers = this.getCompuerNumbers();
      }
      
      const userNumbers = await this.getUserNumbers();
  
      const { strike, ball } = this.getStrikeOrBall(computerNumbers, userNumbers);
      this.printResult(strike, ball);
  
      if (strike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        const restartFlag = await Console.readLineAsync('');
  
        if (RESTART_OR_EXIT.includes(restartFlag)) {
          if (restartFlag === EXIT) {
            break;
          } else {
            computerNumbers = this.getCompuerNumbers();
          }
        } else {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다')
        }
      }
    } while (true);
  };
};

const app = new App();

app.play();

export default App;