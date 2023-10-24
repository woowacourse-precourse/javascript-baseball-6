import Player from '../src/Player';

describe('사용자 인스턴스로 문자열을 전달했을때 숫자 형태의 배열의 형태로 잘 나타나는지 테스트', () => {
  test('숫자 형태의 배열로 잘 나타나는지', () => {
    const player = new Player('123');

    expect(player.getPlayerNumber()).toEqual([1, 2, 3]);
  });

  test('문자 형태의 배열이 아닌지 ', () => {
    const player = new Player('123');

    expect(player.getPlayerNumber()).not.toEqual(['1', '2', '3']);
  });
});
