import BaseBall from '../src/BaseBall';
describe('class BaseBall test', () => {
  let userInput;
  let baseBall;

  beforeEach(() => {
    userInput = 123;
    baseBall = new BaseBall();
  });

  describe('method test : _checkBallsAmount() ', () => {
    test('_checkBallsAmount() password가 213이라면 ball은 2가 되는가 ?', () => {
      baseBall._setPassword(213);
      const ballsAmount = baseBall._checkBallsAmount(userInput);

      expect(ballsAmount).toBe(2);
    });
  });

  describe('method test : _checkStrikesAmount() ', () => {
    test('password가 423이라면 strike는 2가 되는가 ?', () => {
      baseBall._setPassword(423);
      const strikeAmount = baseBall._checkStrikesAmount(userInput);

      expect(strikeAmount).toBe(2);
    });
  });

  describe('method test : _checkNothing() ', () => {
    test('no ball no strike일때 true가 반환이 되는가 ?', () => {
      baseBall._setPassword(456);
      const isNothing = baseBall._checkNothing(userInput);

      expect(isNothing).toBe(true);
    });

    test('strike가 있으면 false가 반환되는가 ?', () => {
      baseBall._setPassword(145);
      const isNothing = baseBall._checkNothing(userInput);

      expect(isNothing).toBe(false);
    });

    test('ball이 있으면 false가 반환되는가 ?', () => {
      baseBall._setPassword(345);
      const isNothing = baseBall._checkNothing(userInput);

      expect(isNothing).toBe(false);
    });
  });
});
