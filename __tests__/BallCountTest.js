import Game from '../src/model/Game';
import { mockRandoms } from './ApplicationTest';

describe('스크라이크와 볼 판별 테스트', () => {
  test('스트라이크 볼 테스트', () => {
    const randoms = [6, 7, 8];
    const answers = [
      [1, 2, 3],
      [7, 8, 6],
    ];
    const results = [
      { ballCount: 0, strikeCount: 0 },
      { ballCount: 3, strikeCount: 0 },
    ];

    mockRandoms(randoms);

    const game = new Game();

    answers.forEach((x, index) => {
      expect(game.compareNumbers(x)).toEqual(results[index]);
    });
  });
});
