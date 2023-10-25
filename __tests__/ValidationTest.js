import App from '../src/App';
import { mockQuestions, mockRandoms } from './ApplicationTest';
import { ERROR } from '../src/utils/Constants';

const { HEADER, NUMBER, LENGTH, DUPLICATE, RESTART_NUMBER } = ERROR;

describe('사용자 입력값 유효성 검사', () => {
  test('공백 입력 테스트', async () => {
    const randoms = [3, 4, 5];
    const answers = [' '];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.getUserNumber()).rejects.toThrow(`${HEADER}${NUMBER}`);
  });

  test('문자 입력 테스트', async () => {
    const randoms = [3, 4, 5];
    const answers = ['as2'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.getUserNumber()).rejects.toThrow(`${HEADER}${NUMBER}`);
  });

  test('자릿수 초과 테스트', async () => {
    const randoms = [3, 4, 5];
    const answers = ['9876'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.getUserNumber()).rejects.toThrow(`${HEADER}${LENGTH}`);
  });

  test('중복값 테스트', async () => {
    const randoms = [3, 4, 5];
    const answers = ['151'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.getUserNumber()).rejects.toThrow(`${HEADER}${DUPLICATE}`);
  });
});
