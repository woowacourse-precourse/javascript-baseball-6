import Computer from '../src/Computer';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Computer 클래스 검사', () => {
  let computer;

  beforeEach(() => {
    computer = new Computer();
  });

  describe('generateNumbers 메소드 검사', () => {
    it('중복 없는 숫자 배열을 생성해야 한다', () => {
      mockRandoms([1, 2, 3]);

      const result = computer.generateNumbers();

      expect(result).toEqual([1, 2, 3]);
    });

    it('중복 숫자가 있을 경우 다시 생성해야 한다', () => {
      mockRandoms([1, 1, 2, 3]);

      const result = computer.generateNumbers();

      expect(result).toEqual([1, 2, 3]);
    });
  });
});
