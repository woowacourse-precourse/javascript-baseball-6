import GameNumberGenerator from '../../src/model/GameNumberGenerator.js';
import Validators from '../../src/utils/validator/index.js';

describe('GameNumberGenerator', () => {
  test('숫자 1~9 범위 내에서 서로 다른 3자리 숫자를 생성한다.  ', () => {
    // given
    const randomGameNumbers = GameNumberGenerator();

    // when
    // than
    expect(() => {
      Validators.checkGameNumbers(randomGameNumbers.join(''));
    }).not.toThrow();
  });
});
