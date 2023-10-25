import { COMPARE_RESULT_FORMAT_TYPES, OUTPUT_MESSAGE_METHOD } from '../../src/constants/message.js';

describe('Message 모듈 테스트', () => {
  describe('OUTPUT_MESSAGE_METHOD 테스트', () => {
    test.each([
      { input: { strike: 0, ball: 0 }, output: COMPARE_RESULT_FORMAT_TYPES.nothing },
      { input: { strike: 1, ball: 0 }, output: '1스트라이크' },
      { input: { strike: 0, ball: 1 }, output: '1볼' },
      { input: { strike: 2, ball: 1 }, output: '1볼 2스트라이크' },
      { input: { strike: 3, ball: 0 }, output: '3스트라이크' },
    ])(
      '스트라이크가 $input.strike 이고 볼이 $input.ball 일때, 결과는 "$output"으로 출력된다.',
      ({ input, output }) => {
        // given - when
        const result = OUTPUT_MESSAGE_METHOD.compareResult(input);
        // then
        expect(result).toBe(output);
      },
    );
  });
});
