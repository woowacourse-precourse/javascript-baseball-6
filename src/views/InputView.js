import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

const InputView = {
  /**
   * 주어진 query를 통해 유저로부터 입력값을 읽어오는 추상화 메서드
   * @async
   * @public
   * @param {string} query - 유저에게 보여줄 입력 요청 메시지
   * @returns {Promise<string>} 유저로부터 입력 받은 문자열
   */
  async read(query) {
    const inputValue = await Console.readLineAsync(query);
    return inputValue;
  },

  /**
   * @async
   * @public
   * @returns {Promise<string>} 유저로부터 입력 받은 야구공
   */
  async readPlayerBaseball() {
    const inputBaseball = await this.read(INPUT_MESSAGE.playerBaseball);
    return inputBaseball;
  },

  /**
   * @async
   * @public
   * @returns {Promise<string>} 유저로부터 입력 받은 게임 종료 명령어
   */
  async readExitGameCommand() {
    const inputBaseball = await this.read(INPUT_MESSAGE.exitGameCommand);
    return inputBaseball;
  },
};

export default InputView;
