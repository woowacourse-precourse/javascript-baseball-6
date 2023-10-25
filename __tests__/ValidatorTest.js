import Validator from '../src/validator/Validator.js';

describe('정답 입력 예외 처리', () => {
  test.each(['#@!', 'qwe', '   '])('숫자 외 입력', (input) => {
    expect(() => Validator.guessAnswerValidate(input)).toThrow();
  });
  test.each(['012', '901', ' 230'])('1~9를 벗어난 입력', (input) => {
    expect(() => Validator.guessAnswerValidate(input)).toThrow();
  });
  test.each(['12', '19', '  '])('3자리 미만의 입력', (input) => {
    expect(() => Validator.guessAnswerValidate(input)).toThrow();
  });

  // 중복 입력
  expect(() => Validator.guessAnswerValidate('111')).toThrow();
  expect(() => Validator.guessAnswerValidate('qqq')).toThrow();

  // 미입력
  expect(() => Validator.guessAnswerValidate('')).toThrow();
});

describe('재시작/종료 입력 예외 처리', () => {
  test.each(['0', '3', '>', ' '])('1,2이 아닌 입력 예외 처리', (input) => {
    expect(() => Validator.retryAnswerValidate(input)).toThrow();
  });

  test.each(['12', '>>', 'qw', '  '])('1자리 이상 입력 예외 처리', (input) => {
    expect(() => Validator.retryAnswerValidate(input)).toThrow();
  });
});
