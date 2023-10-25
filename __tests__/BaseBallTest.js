import BaseBall from '../src/BaseBall';
describe('class BaseBall test', () => {
  let winningNumbers;
  let baseBall;

  beforeEach(() => {
    winningNumbers = 123;
    baseBall = new BaseBall(winningNumbers);
  });

  describe('method test : _checkBallsAmount() ', () => {
    test('_checkBallsAmount() userInput이 932이라면 ball은 2가 되는가 ?', () => {
      const userInput = 932;
      const ballsAmount = baseBall._checkBallsAmount(userInput);

      expect(ballsAmount).toBe(2);
    });
  });

  describe('method test : _checkStrikesAmount() ', () => {
    test('userInput이 423이라면 strike는 2가 되는가 ?', () => {
      const userInput = 423;
      const strikeAmount = baseBall._checkStrikesAmount(userInput);

      expect(strikeAmount).toBe(2);
    });
  });

  describe('method test : _checkNothing() ', () => {
    test('no ball no strike일때 true가 반환이 되는가 ?', () => {
      const userInput = 456;
      const isNothing = baseBall._checkNothing(userInput);

      expect(isNothing).toBe(true);
    });

    test('strike가 있으면 false가 반환되는가 ?', () => {
      const userInput = 156;
      const isNothing = baseBall._checkNothing(userInput);

      expect(isNothing).toBe(false);
    });

    test('ball이 있으면 false가 반환되는가 ?', () => {
      const userInput = 389;
      const isNothing = baseBall._checkNothing(userInput);

      expect(isNothing).toBe(false);
    });
  });

  describe('method test : countResult', () => {
    test('1볼 1스트라이크 일때 {ball : 1, strike : 2, isNothing : false} 가 반환 되는가', () => {
      const userInput = 139;
      const result = baseBall.countResult(userInput);
      const countResult = { ball: 1, strike: 1, isNothing: false };

      expect(result).toEqual(countResult);
    });
  });
});
