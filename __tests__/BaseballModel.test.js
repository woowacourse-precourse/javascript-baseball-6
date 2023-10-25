import BaseballModel from '../src/model/index.js';

const setModel = () => {
  const testNumbers = [5, 6, 7];
  BaseballModel.generateGameNumbers = jest.fn();
  BaseballModel.generateGameNumbers.mockReturnValue(testNumbers);
};

setModel();

describe('compareUserWithComputerNumbers', () => {
  test('일치하는게 하나도 없을 때', () => {
    // given
    const userNumber = '123';

    // when
    const score = BaseballModel.compareUserWithComputerNumbers(
      userNumber,
      BaseballModel.generateGameNumbers(),
    );

    // then
    expect(score).toStrictEqual({ ball: 0, strike: 0 });
  });

  test('1개의 숫자가 위치는 다르지만 값은 일치할 때', () => {
    // given
    const userNumber = '623';

    // when
    const score = BaseballModel.compareUserWithComputerNumbers(
      userNumber,
      BaseballModel.generateGameNumbers(),
    );

    // then
    expect(score).toStrictEqual({ ball: 1, strike: 0 });
  });

  test('1개의 숫자가 위치와 값이 모두 일치할 때', () => {
    // given
    const userNumber = '523';

    // when
    const score = BaseballModel.compareUserWithComputerNumbers(
      userNumber,
      BaseballModel.generateGameNumbers(),
    );

    // then
    expect(score).toStrictEqual({ ball: 0, strike: 1 });
  });

  test('2개의 숫자중 값은 모두 일치하지만 하나는 위치가 다르고 다른 하나는 위치가 같을 때 ', () => {
    // given
    const userNumber = '526';

    // when
    const score = BaseballModel.compareUserWithComputerNumbers(
      userNumber,
      BaseballModel.generateGameNumbers(),
    );

    // then
    expect(score).toStrictEqual({ ball: 1, strike: 1 });
  });

  test('3개의 숫자가 위치가 모두 다르지만 값이 모두 동일할 때', () => {
    // given
    const userNumber = '756';

    // when
    const score = BaseballModel.compareUserWithComputerNumbers(
      userNumber,
      BaseballModel.generateGameNumbers(),
    );

    // then
    expect(score).toStrictEqual({ ball: 3, strike: 0 });
  });

  test('3개의 숫자가 위치와 값이 모두 동일할 때', () => {
    // given
    const userNumber = '523';

    // when
    const score = BaseballModel.compareUserWithComputerNumbers(
      userNumber,
      BaseballModel.generateGameNumbers(),
    );

    // then
    expect(score).toStrictEqual({ ball: 0, strike: 1 });
  });
});
