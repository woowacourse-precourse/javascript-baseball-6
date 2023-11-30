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
        const strikeCount = hint.calculateStrikeCount();
        // then
        expect(strikeCount).toEqual(expected);
      },
    );
  });

  describe('calculateBallCount 메서드는 strikeCount를 입력받아 볼 개수를 반환한다.', () => {
    const cases = [
      { numbers: [1, 2, 3], computerNumbers: [2, 3, 1], expected: 3 },
      { numbers: [1, 2, 3], computerNumbers: [1, 2, 3], expected: 0 },
      { numbers: [4, 2, 1], computerNumbers: [4, 1, 2], expected: 2 },
    ];

    test.each(cases)(
      '스트라이크 개수 $strikeCount가 주어지는 경우, calculateBallCount()는 개수 $expected를 반환한다.',
      ({ numbers, computerNumbers, expected }) => {
        // when
        const hint = new Hint(numbers, computerNumbers);
        const strikeCount = hint.calculateStrikeCount();
        const ballCount = hint.calculateBallCount(strikeCount);

        // then
        expect(ballCount).toEqual(expected);
      },
    );
  });

  describe('generateHintMessage 메서드는 strikeCount와 ballCount를 입력받아 결과 메시지의 배열을 반환한다.', () => {
    const cases = [
      { numbers: [1, 2, 3], computerNumbers: [2, 3, 1], expected: ['3볼'] },
      { numbers: [1, 2, 3], computerNumbers: [1, 2, 3], expected: ['3스트라이크'] },
      { numbers: [4, 2, 1], computerNumbers: [4, 1, 2], expected: ['2볼', '1스트라이크'] },
    ];

    test.each(cases)(
      '스트라이크 개수 $strikeCount와 볼의 개수 $ballCount가 주어지는 경우, generateHintMessage()는 결과 메시지를 배열 형태의 $expected로 반환한다.',
      ({ numbers, computerNumbers, expected }) => {
        // when
        const hint = new Hint(numbers, computerNumbers);
        const strikeCount = hint.calculateStrikeCount();
        const ballCount = hint.calculateBallCount(strikeCount);
        const hintMessage = hint.generateHintMessage(strikeCount, ballCount);

        // then
        expect(hintMessage).toEqual(expected);
      },
    );
  });
});
