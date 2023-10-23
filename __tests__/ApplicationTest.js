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
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = ['낫싱', '3스트라이크', '1볼 1스트라이크', '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    //  
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('출력될 수 있는 힌트 모두 출력', async () => {
    const randoms = [2, 4, 7];
    const answers = [
      '358',
      '458',
      '428',
      '472',
      '258',
      '248',
      '254',
      '274',
      '247',
      '2'
    ];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1볼',
      '2볼',
      '3볼',
      '1스트라이크',
      '2스트라이크',
      '1볼 1스트라이크',
      '2볼 1스트라이크',
      '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    //  
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트: 입력값이 숫자가 아님', async () => {
    const randoms = [1, 3, 5];
    const answers = ['abc'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 입력값이 세자리 숫자가 아님', async () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 입력값이 정수가 아님', async () => {
    const randoms = [1, 3, 5];
    const answers = ['0.5'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 입력값이 서로 다른 숫자가 아님', async () => {
    const randoms = [1, 3, 5];
    const answers = ['111'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트: 게임 종료 후 재시작에 대한 질문에 입력값이 1이나 2가 아님', async () => {
    const randoms = [1, 3, 5];
    const answers = ['246', '135', '3'];
    const logSpy = getLogSpy();
    const messages = ['낫싱', '3스트라이크'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.restartGame()).rejects.toThrow('[ERROR]');
  });
});