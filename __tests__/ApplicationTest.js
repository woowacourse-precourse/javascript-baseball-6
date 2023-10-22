import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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

  test('상황에 맞는 힌트 출력', async () => {
    const randoms = [1, 2, 9];
    const answers = [
      '678',
      '145',
      '128',
      '195',
      '219',
      '278',
      '914',
      '291',
      '129',
      '2',
    ];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1스트라이크',
      '2스트라이크',
      '1볼 1스트라이크',
      '2볼 1스트라이크',
      '1볼',
      '2볼',
      '3볼',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', async () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('예외테스트 - 입력값이 숫자가 아닌 경우', async () => {
    const randoms = [1, 3, 5];
    const answers = ['134', '279', '일육팔'];
    const logSpy = getLogSpy();
    const messages = ['2스트라이크', '낫싱'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.'
    );

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외테스트 - 정수가 아닌 숫자 입력한 경우', async () => {
    const randoms = [1, 3, 5];
    const answers = ['1.5'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 정수가 아닌 숫자를 입력할 수 없습니다.'
    );
  });

  test('예외테스트 - 서로 다른 숫자가 아닌 경우', async () => {
    const randoms = [1, 3, 5];
    const answers = ['121'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 서로 다른 숫자를 입력해야 합니다.'
    );
  });

  test('예외테스트 - 게임 종료 후 재시작 여부 입력값이 1 또는 2가 아닌 경우', async () => {
    const randoms = [1, 3, 5];
    const answers = ['123', '135', '3'];
    const logSpy = getLogSpy();
    const messages = ['1볼 1스트라이크', '3스트라이크'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 1 또는 2 중 하나만 입력할 수 있습니다.'
    );

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
