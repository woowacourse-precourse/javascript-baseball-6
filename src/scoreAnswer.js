/** @typedef {{ strikes: number, balls: number }} Score */

/** @type {(xs: number[], ys: number[]) => number[]} */
export const allStrikes = (xs, ys) => xs.filter((x, i) => x === ys[i]);

/** @type {(xs: number[], ys: ReadonlySet<number>) => number[]} */
export const allBalls = (xs, ys) => xs.filter((x) => ys.has(x));

/**
 * @callback ScoreAnswerFn
 * @param {ReadonlySet<number>} answer - 답변
 * @returns {Score} - 채점 결과, 맞춘 자리가 없으면 null
 */

/**
 * 주어진 질문에 대한 답변을 채점하는 함수를 반환합니다.
 *
 * @param {ReadonlySet<number>} question - 질문
 * @returns {ScoreAnswerFn} - 답변을 채점하는 함수
 */
export const scoreAnswer = (question) => (answer) => {
  const xs = Array.from(question);
  const ys = Array.from(answer);

  const strikes = allStrikes(xs, ys).length;
  const totalBalls = allBalls(xs, answer).length;
  const balls = totalBalls - strikes;

  return { strikes, balls };
};
