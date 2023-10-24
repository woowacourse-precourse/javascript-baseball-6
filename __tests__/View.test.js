import { Console } from '@woowacourse/mission-utils';
import BaseballModel from '../src/model/index.js';
import OutputView from '../src/view/OutputView.js';

const model = new BaseballModel();

const setModel = () => {
  const testNumbers = [5, 6, 7];
  model.generateGameNumbers = jest.fn();
  model.generateGameNumbers.mockReturnValue(testNumbers);
  model.saveComputerNumbers(model.generateGameNumbers());
};

setModel();

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const logSpy = getLogSpy();

describe('printHint', () => {
  test('낫싱', () => {
    // given
    const userNumber = '123';

    // when
    const score = model.compareUserWithComputerNumbers(userNumber);
    OutputView.printHint(score);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
  });

  test('1볼', () => {
    // given
    const userNumber = '612';

    // when
    const score = model.compareUserWithComputerNumbers(userNumber);
    OutputView.printHint(score);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼'));
  });

  test('1스트라이크', () => {
    // given
    const userNumber = '512';

    // when
    const score = model.compareUserWithComputerNumbers(userNumber);
    OutputView.printHint(score);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1스트라이크'));
  });

  test('2볼 1스트라이크', () => {
    // given
    const userNumber = '765';

    // when
    const score = model.compareUserWithComputerNumbers(userNumber);
    OutputView.printHint(score);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2볼 1스트라이크'));
  });

  test('3스트라이크', () => {
    // given
    const userNumber = '567';

    // when
    const score = model.compareUserWithComputerNumbers(userNumber);
    OutputView.printHint(score);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('3스트라이크'));
  });
});
