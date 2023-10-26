import Judge from '../src/Judge';

describe('컴퓨터가 고른 수와 유저가 고른 수를 비교하여 카운트하는 기능', () => {
  const judge = new Judge();

  test('1볼 0스트라이크', () => {
    const randoms = [1, 2, 3];
    const answer = [2, 4, 8];
    expect(judge.counter(randoms, answer)).toEqual([1, 0]);
  });

  test('0볼 3스트라이크', () => {
    const randoms = [1, 2, 3];
    const answer = [1, 2, 3];
    expect(judge.counter(randoms, answer)).toEqual([0, 3]);
  });

  test('2볼 1스트라이크', () => {
    const randoms = [1, 2, 3];
    const answer = [1, 3, 2];
    expect(judge.counter(randoms, answer)).toEqual([2, 1]);
  });
});

describe('카운트 결과에 따른 출력 형식을 매치하는 기능 ', () => {
  const judge = new Judge();

  test('출력 1볼 0스트라이크', () => {
    const ball = 1;
    const strike = 0;
    expect(judge.result(ball, strike)).toEqual('1볼');
  });

  test('출력 0볼 3스트라이크', () => {
    const ball = 0;
    const strike = 3;
    expect(judge.result(ball, strike)).toEqual('3스트라이크');
  });

  test('출력 2볼 1스트라이크', () => {
    const ball = 2;
    const strike = 1;
    expect(judge.result(ball, strike)).toEqual('2볼 1스트라이크');
  });
});
