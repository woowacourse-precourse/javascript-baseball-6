import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { BaseballService } from '../src/Baseball.service.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('게임 시작 메시지 출력', async () => {
    // given
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('숫자 야구 게임을 시작합니다.')
    );
  });

  test('refree1', () => {
    const baseballService = new BaseballService();
    const { ball, strike } = baseballService.refree(['1', '2', '3'], '123');
    expect(strike).toBe(3);
    expect(ball).toBe(0);
  });

  test('refree2', () => {
    const baseballService = new BaseballService();
    const { ball, strike } = baseballService.refree(['1', '4', '2'], '124');
    expect(strike).toBe(1);
    expect(ball).toBe(2);
  });

  test('refree3', () => {
    const baseballService = new BaseballService();
    const { ball, strike } = baseballService.refree(['1', '4', '2'], '987');
    expect(strike).toBe(0);
    expect(ball).toBe(0);
  });

  test('게임 종료 후 재시작', async () => {
    // given
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
