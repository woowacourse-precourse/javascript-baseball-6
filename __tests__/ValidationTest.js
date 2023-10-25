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

describe('숫자 야구 게임 중 입력 예외에 대한 테스트', () => {
  test('`1`, `2` 이외의 입력 예외 테스트', async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ['abc'];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test(`'1', '2' 이외의 입력 예외 테스트2`, async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ['!@#$%'];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('서로 다르지 않은 숫자(중복) 입력 예외 테스트', async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ['111'];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('서로 다르지 않은 숫자(중복) 입력 예외 테스트', async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ['111'];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('3자리 수 이하의 입력 예외 테스트', async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ['11'];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('재시작/종료를 구분하는 1과 2가 아닌 다른 입력 테스트', async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ['135', '3'];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('재시작/종료를 구분하는 1과 2가 아닌 다른 입력 테스트', async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ['135', 1];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
