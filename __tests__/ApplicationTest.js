import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

import {
  ANSWER_LENGTH,
  START_ORDER,
  QUIT_ORDER,
  NOT_IN_RANGE_NUMBER,
} from '../src/constants/constants.js';

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
      '[ERROR] 부호/기호/문자 없이 숫자만 입력해야 합니다.'
    );

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외테스트 - 소수점 입력', async () => {
    const randoms = [1, 3, 5];
    const answers = ['1.5'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 부호/기호/문자 없이 숫자만 입력해야 합니다.'
    );
  });

  test('예외테스트 - 음수 입력', async () => {
    const randoms = [1, 3, 5];
    const answers = ['-35'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 부호/기호/문자 없이 숫자만 입력해야 합니다.'
    );
  });

  test('예외테스트 - 양수 입력', async () => {
    const randoms = [1, 3, 5];
    const answers = ['+91'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      `[ERROR] ${ANSWER_LENGTH}개의 숫자를 입력해야 합니다.`
    );
  });

  test('예외테스트 - 범위에 해당하지 않는 숫자 포함', async () => {
    const randoms = [1, 3, 5];
    const answers = ['109'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      `[ERROR] ${NOT_IN_RANGE_NUMBER}을 제외한 숫자만 입력해야 합니다.`
    );
  });

  test('예외테스트 - 숫자를 중복하여 입력', async () => {
    const randoms = [1, 3, 5];
    const answers = ['121'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 서로 다른 숫자를 입력해야 합니다.'
    );
  });

  test('예외테스트 - 주어진 개수 초과하여 숫자 입력', async () => {
    const randoms = [1, 3, 5];
    const answers = ['9123'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      `[ERROR] ${ANSWER_LENGTH}개의 숫자를 입력해야 합니다.`
    );
  });

  test('예외테스트 - 게임 종료 후 잘못된 명령값 입력', async () => {
    const randoms = [1, 3, 5];
    const answers = ['123', '135', '3'];
    const logSpy = getLogSpy();
    const messages = ['1볼 1스트라이크', '3스트라이크'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow(
      `[ERROR] ${START_ORDER} 또는 ${QUIT_ORDER} 중 하나만 입력할 수 있습니다.`
    );

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
