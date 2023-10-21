const Referee = require('../src/retry/model/Referee');

describe('숫자 비교 결과 테스트', () => {
  test.each([
    [[1, 2, 3], '321', 1, 2],
    [[4, 1, 9], '235', 0, 0],
    [[1, 2, 3], '123', 3, 0],
    [[1, 2, 3], '312', 0, 3],
  ])('숫자와 자리가 일치하면 스트라이크, 숫자만 일치하면 볼이다.', (computer, user, strikeCount, ballCount) => {
    const result = new Referee().compare(computer, user);

    expect(result.strike).toBe(strikeCount);
    expect(result.ball).toBe(ballCount);
  });
});