import Computer from '../src/BaseballGame/Computer/index.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandom = (nums) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  nums.reduce(
    (acc, num) => acc.mockReturnValueOnce(num),
    MissionUtils.Random.pickNumberInRange
  );
};

const mockQuestion = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getMatchSpy = (instance, method) => {
  const logSpy = jest.spyOn(instance, method);
  logSpy.mockClear();
  return logSpy;
};

describe('Computer 클래스 테스트', () => {
  test('랜덤 3개 숫자를 생성한다.', () => {
    const nums = [3, 6, 9];
    const computer = new Computer();

    mockRandom(nums);
    computer.generate();

    expect(nums.every((num, index) => num === computer.nums[index])).toBe(true);
  });

  test('컴퓨터의 난수와 유저의 입력을 비교하여 매치 문자열과 매치 여부를 반환한다', () => {
    const computer = new Computer();
    const inputs = '123';
    const nums = [1, 2, 3];
    const logSpy = getMatchSpy(computer, 'match');
    const matchString = '3스트라이크';
    const isMatch = true;

    mockRandom(nums);
    mockQuestion([inputs]);

    computer.generate();
    computer.match(inputs);

    expect(logSpy).toHaveBeenCalledWith(inputs);
    expect(logSpy).toHaveReturned();
    expect(computer.match(inputs)).toStrictEqual({ matchString, isMatch });
  });

  test('컴퓨터의 난수와 유저의 입력을 비교하여 매치 문자열을 생성한다', () => {
    const computer = new Computer();
    const matchResults = [
      { strike: 1, ball: 2 },
      { strike: 0, ball: 2 },
      { strike: 2, ball: 0 },
      { strike: 0, ball: 0 },
      { strike: 3, ball: 0 },
    ];
    // const randoms = [3, 5, 1];
    const matchStrings = [
      '2볼 1스트라이크',
      '2볼',
      '2스트라이크',
      '낫싱',
      '3스트라이크',
    ];

    matchStrings.forEach((matchString, index) => {
      expect(matchString).toBe(computer.makeMatchString(matchResults[index]));
    });
  });

  test('스트라이크가 3개인지 여부를 확인한다', () => {
    const computer = new Computer();
    const matchResults = { strike: 3, ball: 0 };
    expect(computer.isMatch(matchResults)).toBe(true);
  });
});
