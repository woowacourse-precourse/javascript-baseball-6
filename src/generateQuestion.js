import { Random } from '@woowacourse/mission-utils';

/**
 * 숫자 야구 문제를 생성합니다.
 *
 * @param {number} n - 문제의 크기
 * @returns {ReadonlySet<number>} - 문제
 */
export default (n) => {
  const question = new Set();
  while (question.size !== n) {
    const pick = Random.pickNumberInRange(1, 9);
    question.add(pick);
  }
  return question;
};
