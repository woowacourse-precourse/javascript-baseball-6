import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

const InputView = {
  async read(query) {
    const inputValue = await Console.readLineAsync(query);
    return inputValue;
  },

  async readPlayerBaseball() {
    const inputBaseball = await this.read(INPUT_MESSAGE.playerBaseball);
    return inputBaseball;
  },

  async readExitGameCommand() {
    const inputBaseball = await this.read(INPUT_MESSAGE.exitGameCommand);
    return inputBaseball;
  },
};

export default InputView;
