import { Console, Random } from '@woowacourse/mission-utils';

const REG_INPUT_NUMBER = /^(?!.*([1-9]).*\1)[1-9]{3}$/;
const GAME_RESTART_NUMBER = 1;
const GAME_EXIT__NUMBER = 2;

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerNumber = this.CreateComputerNumber(3);
    return this.calculateResults(computerNumber);
  }

  async inputUserNumber() {
    const inputValue = await Console.readLineAsync('숫자를 입력해주세요 : ');

    if (!REG_INPUT_NUMBER.test(inputValue)) {
      throw new Error('[ERROR] Input Value is Incorrect.');
    } else {
      return Array.from(inputValue).map(Number);
    }
  }

  CreateComputerNumber(digit) {
    const number = [...Array(digit)].reduce((result) => {
      let randomDigit;
      do {
        randomDigit = Random.pickNumberInRange(1, 9);
      } while (result.includes(randomDigit));

      result.push(randomDigit);
      return result;
    }, []);
    return number;
  }

  async calculateResults(computerNumber) {
    const myNumber = await this.inputUserNumber();

    let ball = 0;
    let strike = 0;
    let comDigits = 0;

    computerNumber.forEach((comNum) => {
      let myDigits = 0;
      myNumber.forEach((myNum) => {
        if (comNum === myNum) {
          if (comDigits === myDigits) strike++;
          else ball++;
        }
        myDigits++;
      });
      comDigits++;
    });

    const [result, isEnd] = this.PrintOutput(ball, strike);
    Console.print(result);

    if (!isEnd) {
      return this.calculateResults(computerNumber);
    }
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const value = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    switch (Number(value)) {
      case GAME_RESTART_NUMBER:
        const computerNumber = this.CreateComputerNumber(3);
        return this.calculateResults(computerNumber);
      case GAME_EXIT__NUMBER:
        return;
      default:
        throw new Error(
          '[ERROR] Input Value is Incorrect. You have to choose 1 or 2.'
        );
    }
  }

  PrintOutput(ball, strike) {
    let output = '';
    if (strike === 3) {
      return ['3스트라이크', true];
    } else if (strike === 0 && ball === 0) {
      return ['낫싱', false];
    }
    if (ball !== 0) output += `${ball}볼 `;
    if (strike !== 0) output += `${strike}스트라이크`;

    return [output, false];
  }
}

export default App;
