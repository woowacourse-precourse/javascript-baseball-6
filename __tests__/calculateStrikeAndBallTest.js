import { calculateStrikeAndBall } from '../src/StrikeAndBallCalculator';

describe('StrikeAndBallCalculator의 calculateStrikeAndBall 함수 검사', () => {
  it('스트라이크와 볼이 모두 0개일 경우', () => {
    const result = calculateStrikeAndBall([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual({ strike: 0, ball: 0 });
  });

  it('스트라이크만 있는 경우', () => {
    const result = calculateStrikeAndBall([1, 2, 3], [1, 2, 3]);
    expect(result).toEqual({ strike: 3, ball: 0 });
  });

  it('볼만 있는 경우', () => {
    const result = calculateStrikeAndBall([1, 2, 3], [3, 1, 2]);
    expect(result).toEqual({ strike: 0, ball: 3 });
  });

  it('스트라이크와 볼이 모두 있는 경우', () => {
    const result = calculateStrikeAndBall([1, 2, 3], [1, 3, 2]);
    expect(result).toEqual({ strike: 1, ball: 2 });
  });
});
