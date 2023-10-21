import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

/**
 * '유저로부터 받은 입력 값을 전달'의 역할을 수행
 */
const InputView = {
  /**
   * 주어진 query를 통해 유저로부터 입력값을 읽어오는 추상화 메서드
   * @param {string} query - 유저에게 보여줄 입력 요청 메시지
   * @returns {Promise<string>} 유저로부터 입력 받은 문자열
   */
  async read(query) {
    const inputValue = await Console.readLineAsync(query);
    return inputValue;
  },

  /**
   * 유저로부터 야구공 관련 입력 값을 읽어오는 메서드
   * @returns {Promise<string>} 유저로부터 입력 받은 야구공
   */
  async readPlayerBaseball() {
    const inputBaseball = await this.read(INPUT_MESSAGE.playerBaseball);
    return inputBaseball;
  },

  /**
   * 유저로부터 게임 종료 관련 명령어 입력값을 읽어오는 메서드
   * @returns {Promise<string>} 유저로부터 입력 받은 게임 종료 명령어
   */
  async readExitGameCommand() {
    const inputBaseball = await this.read(INPUT_MESSAGE.exitGameCommand);
    return inputBaseball;
  },
};

export default InputView;
