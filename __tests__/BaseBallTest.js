import BaseBall from '../src/BaseBall';

describe('_checkBallsAmount 메서드 테스트', () => {
  test('userInput이 123일때 password가 213이라면 ball은 2가 되는가 ?', () => {
    const baseBall = new BaseBall();
    baseBall._setPassword(213);
    const userInput = 123;
    const ballsAmount = baseBall._checkBallsAmount(userInput);

    expect(ballsAmount).toBe(2);
  });
});

describe('_checkStrikesAmount 메서드 테스트', () => {
  test('userInput이 123일때 password가 423이라면 strike는 2가 되는가 ?', () => {
    const baseBall = new BaseBall();
    baseBall._setPassword(423);
    const userInput = 123;
    const ballsAmount = baseBall._checkStrikesAmount(userInput);

    expect(ballsAmount).toBe(2);
  });
});
