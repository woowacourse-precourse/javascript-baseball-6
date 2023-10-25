import { Console } from '@woowacourse/mission-utils';
import Baseball from './Baseball.js';

const COMMAND_START = 'START';
const COMMAND_EXIT = 'EXIT';
const OPTION_COMMAND = Object.freeze({ 1: COMMAND_START, 2: COMMAND_EXIT });

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      const game = new Baseball();
      await game.play();

      const option = await this.selectOption();
      if (option === COMMAND_EXIT) break;
    }
  }

  validateOption(input) {
    const regex = /^[1-9]{1,}$/;

    // 옵션을 숫자로 입력했는가 확인
    if (!regex.test(input)) {
      throw new Error('[ERROR] 게임 옵션을 제대로 입력해주세요.');
    }

    // 옵션 범위 확인
    const commandRange = OPTION_COMMAND.length;
    const command = Number(input);
    if (commandRange < command) {
      throw new Error('[ERROR] 게임 옵션 범위 내에서 입력해주세요.');
    }
  }

  async selectOption() {
    const input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    this.validateOption(input);
    return OPTION_COMMAND[input];
  }
}

export default App;
