import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';

const MESSAGE_START = '숫자 야구 게임을 시작합니다.';
const MESSAGE_EXIT = '숫자 야구 게임을 종료합니다.';
const MESSAGE_INPUT = '숫자를 입력해주세요 : ';
const MESSAGE_CLEAR = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const MESSAGE_REPLAY = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';

const MESSAGE_INVALID_INPUT = '[ERROR] 유효하지 않은 입력입니다.';

class BaseballGame {
  isValidInput = (input) => {
    if (input.length !== 3 || isNaN(input)) {
      return false;
    }
    if (
      input[0] === input[1] ||
      input[1] === input[2] ||
      input[2] === input[0]
    ) {
      return false;
    }
    return true;
  };

  getPlayerInput = (answer) => {
    Console.readLineAsync(MESSAGE_INPUT).then((response) => {
      const input = response;
      if (!this.isValidInput(input)) {
        throw new Error(MESSAGE_INVALID_INPUT);
      }
      const player_input = input.split('').map(Number);
      const compare_result = this.compareInput(player_input, answer);
      this.printCompareResult(compare_result, answer);
    });
  };

  // input:
  compareInput = (input, answer) => {
    const compare_result = [0, 0, 0];
    input.forEach((element, index) => {
      if (answer[index] === element) {
        compare_result[0]++;
      } else if (answer.includes(element)) {
        compare_result[1]++;
      } else {
        compare_result[2]++;
      }
    });
    return compare_result;
  };

  printCompareResult = ([strike, ball, out], answer) => {
    let result = '';
    if (ball > 0) {
      result += `${ball}볼 `;
    }
    if (strike > 0) {
      result += `${strike}스트라이크`;
    }
    if (out === 3) {
      result += `낫싱`;
    }
    Console.print(result);

    if (strike === 3) {
      Console.print(MESSAGE_CLEAR);
      this.getReplayInput();
    } else {
      this.getPlayerInput(answer);
    }
  };

  getReplayInput = () => {
    Console.readLineAsync(MESSAGE_REPLAY).then((response) => {
      if (response === '1') {
        this.gameStart();
      } else if (response === '2') {
        Console.print(MESSAGE_EXIT);
        return;
      } else {
        throw new Error(MESSAGE_INVALID_INPUT);
      }
    });
  };

  gameStart = () => {
    const computer = new Computer();
    const answer = computer.getAnswer();

    Console.print(MESSAGE_START);
    this.getPlayerInput(answer);
  };
}

export default BaseballGame;
