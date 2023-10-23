import {
  checkDuplication,
  checkString,
  checkThreeDigitNumber,
  checkZero,
} from '../../src/utils/validator/unit.js';

describe('checkString()', () => {
  test('숫자를 입력하였을 때 예외를 발생시키지 않는다.', () => {
    // given
    const input = '123';

    // when
    // then
    expect(() => {
      checkString(input);
    }).not.toThrow();
  });

  const inputs = ['일2삼', '24t'];

  test.each(inputs)(
    '[Error] 유저가 문자를 입력하였을 경우 예외가 발생해야 한다. ex) %s',
    (input) => {
      // when
      // then
      expect(() => {
        checkString(input);
      }).toThrow();
    },
  );
});

describe('checkZero()', () => {
  test('숫자에 0이 포함되어 있지 않다면 예외를 발생시키지 않는다.', () => {
    // given
    const input = '123';

    // when
    // then
    expect(() => {
      checkZero(input);
    }).not.toThrow();
  });

  const inputs = ['023', '502'];

  test.each(inputs)('[Error] 숫자에 영이 포함된다면 예외가 발생해야 한다. ex): %s', (input) => {
    // when
    // then
    expect(() => {
      checkZero(input);
    }).toThrow();
  });
});

describe('checkDuplication()', () => {
  test('중복되는 숫자가 존재하지 않는다면 예외를 발생시키지 않는다.', () => {
    // given
    const input = '123';

    // when
    // then
    expect(() => {
      checkDuplication(input);
    }).not.toThrow();
  });
  test('[Error] 중복되는 숫자가 존재한다면 예외가 발생해야 한다.', () => {
    // given
    const input = '122';

    // when
    // then
    expect(() => {
      checkDuplication(input);
    }).toThrow();
  });
});

describe('checkThreeDigitNumber()', () => {
  test('3자리 숫자라면 예외를 발생시키지 않는다.', () => {
    // given
    const input = '123';

    // when
    // then
    expect(() => {
      checkThreeDigitNumber(input);
    }).not.toThrow();
  });

  const inputs = ['1', '12', '5678'];

  test.each(inputs)('[Error] 3자리 숫자가 아니라면 예외가 발생해야 한다.. ex) %s', (input) => {
    // when
    // then
    expect(() => {
      checkThreeDigitNumber(input);
    }).toThrow();
  });
});
