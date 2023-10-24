import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async play() {
    try {
      Console.print('숫자 야구 게임을 시작합니다.');

      let isGameContinue = '1';

      while (isGameContinue === '1') {
        const computerNumbers = this.generateTargetNumbers();
        Console.print(computerNumbers);

        let strike = 0;
        let ball = 0;

        while (strike !== 3) {
          const userInputString = await this.validUserInput(
            '숫자를 입력해주세요'
          );
          const userNumbers = userInputString.split('').map((v) => parseInt(v));

          // 입력한 숫자가 있는지 확인
          const correctNumbers = [];
          userNumbers.forEach((v, idx) => {
            if (computerNumbers.includes(v)) {
              correctNumbers.push(v);
            }
          });

          strike = 0;
          ball = 0;

          correctNumbers.forEach((v, idx) => {
            if (userNumbers.indexOf(v) === computerNumbers.indexOf(v)) {
              strike++;
            } else if (userNumbers.indexOf(v) !== computerNumbers.indexOf(v)) {
              ball++;
            }
          });

          if (strike === 0 && ball === 0) {
            Console.print('낫싱');
          } else if (strike !== 0 && ball !== 0) {
            Console.print(`${ball}볼 ${strike}스트라이크`);
          } else if (strike === 0) {
            Console.print(`${ball}볼`);
          } else if (ball === 0) {
            Console.print(`${strike}스트라이크`);
          }
        }
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

        isGameContinue = await this.reGame();
      }
    } catch (error) {
      Console.print(error);
      return Promise.reject(error);
    }

    return;
  }
  async validUserInput(string) {
    const userInputString = await Console.readLineAsync(string);

    // 길이가 3인지 아닌지 확인
    const userInputLength = userInputString.length;
    if (userInputLength !== 3) {
      throw new Error('[ERROR] 길이');
    }

    // 문자가 숫자로만 이루어져 있는지 확인
    const matchCount = userInputString.match(/[1-9]/g).length;
    if (matchCount !== 3) {
      throw new Error('[ERROR] 노숫자');
    }

    // 중복이 있는지 확인
    const duplicateCount = new Set(userInputString.split('')).size;
    if (duplicateCount !== 3) {
      throw new Error('[ERROR] 길이');
    }
    return userInputString;
  }
  generateTargetNumbers() {
    const setNumbers = new Set();

    // 중복되지 않은 랜덤 숫자 3개 뽑기
    while (setNumbers.size < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      setNumbers.add(randomNumber);
    }
    return [...setNumbers];
  }

  async reGame() {
    return await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
  }
}

const app = new App();
app.play();

export default App;
