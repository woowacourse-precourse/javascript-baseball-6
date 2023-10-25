import GameNumberGenerator from './GameNumberGenerator.js';
import GameNumberGeneratorError from '../utils/error/GameNumberGeneratorError.js';
import Validators from '../utils/validator/index.js';
import { ERROR_MESSAGE } from '../constants/Messages.js';
import { SYSTEM } from '../constants/System.js';

class BaseballModel {
  /**
   * @returns {number[]} 1~9 서로 다른 3자리 숫자
   * @throws {GameNumberGeneratorError}
   */
  static generateGameNumbers() {
    try {
      const randomGameNumbers = GameNumberGenerator();
      Validators.checkGameNumbers(randomGameNumbers.join(''));
      return randomGameNumbers;
    } catch (error) {
      throw new GameNumberGeneratorError(
        ERROR_MESSAGE.game_number_generator(
          SYSTEM.game_number_range_start,
          SYSTEM.game_number_range_end,
          SYSTEM.game_number_count,
        ),
      );
    }
  }

  // prettier-ignore
  /**
   * @param {string} userNumbers 숫자 string
   * @param {number} gameNumbers 상대 플레이어(컴퓨터)) 숫자
   * @returns {{ball : number, strike : number}} score
   */
  static compareUserWithComputerNumbers(userNumbers, gameNumbers) {
    return [...userNumbers].reduce((acc, userNumber, index) => {
        const isBall = gameNumbers.includes(Number(userNumber));
        const isStrike = isBall && Number(userNumber) === gameNumbers[index];
        
        if (isStrike) {
          acc.strike += 1;
          return acc
        } 
        
        if (isBall) {
          acc.ball += 1;
        }

        return acc;
      }, { ball: 0, strike: 0 },
    );
  }
}

export default BaseballModel;
