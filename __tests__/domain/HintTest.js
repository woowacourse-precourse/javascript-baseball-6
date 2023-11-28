import Hint from '../../src/domain/Hint.js';

describe('Hint 클래스 테스트', () => {
  describe('calcultaeStrikeCount 메서드는 numbers와 computerNumbers를 입력받아 스크라이크 개수를 반환한다.', () => {
    const cases = [
      { numbers: [1, 2, 3], computerNumbers: [2, 3, 1], expected: 0 },
      { numbers: [1, 2, 3], computerNumbers: [1, 2, 3], expected: 3 },
      { numbers: [4, 2, 1], computerNumbers: [4, 1, 2], expected: 1 },
    ];

    test.each(cases)(
      '사용자의 번호 $numbers와 랜덤으로 생성된 번호 $computerNumbers가 주어지는 경우, calcultaeStrikeCount()는 개수 $expected를 반환한다.',
      ({ numbers, computerNumbers, expected }) => {
        // when
        const hint = new Hint(numbers, computerNumbers);

        // then
        expect(hint.calculateStrikeCount()).toEqual(expected);
      },
    );
  });
});
