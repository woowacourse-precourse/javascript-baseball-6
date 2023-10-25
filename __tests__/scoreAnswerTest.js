import { scoreAnswer } from '../src/scoreAnswer';

/**
 * @typedef {import('../src/scoreAnswer').Score} Score
 * @typedef {{ answer: Set<number>, expected: Score }} TestCase
 * @typedef {{ question: Set<number>, cases: TestCase[] }} TestSuite
 */

/** @type {TestSuite} */
const suite = {
  question: new Set([1, 2, 3]),
  cases: [
    { answer: new Set([1, 8, 9]), expected: { strikes: 1, balls: 0 } },
    { answer: new Set([1, 2, 3]), expected: { strikes: 3, balls: 0 } },
    { answer: new Set([2, 3, 9]), expected: { strikes: 0, balls: 2 } },
    { answer: new Set([2, 3, 1]), expected: { strikes: 0, balls: 3 } },
    { answer: new Set([4, 5, 6]), expected: { strikes: 0, balls: 0 } },
  ],
};

describe.each([suite])('formatScore($question)', ({ question, cases }) => {
  test.each(cases)('$answer -> $expected', ({ answer, expected }) => {
    expect(scoreAnswer(question)(answer)).toEqual(expected);
  });
});
