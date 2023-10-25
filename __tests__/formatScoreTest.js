import { formatScore } from '../src/formatScore';

/**
 * @typedef {import('../src/scoreAnswer').Score} Score
 * @typedef {{ name: string, score: Score, expected: string }} TestCase
 */

/** @type {TestCase[]} */
const cases = [
  { name: '스트라이크와 볼', score: { strikes: 1, balls: 1 }, expected: '1볼 1스트라이크' },
  { name: '스트라이크', score: { strikes: 1, balls: 0 }, expected: '1스트라이크' },
  { name: '볼', score: { strikes: 0, balls: 1 }, expected: '1볼' },
  { name: '낫싱', score: { strikes: 0, balls: 0 }, expected: '낫싱' },
];

describe('formatScore', () => {
  test.each(cases)('$name', ({ score, expected }) => {
    expect(formatScore(score)).toBe(expected);
  });
});
