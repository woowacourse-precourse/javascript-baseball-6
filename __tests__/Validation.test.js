import Validation from '../src/util/Validation.js';

describe('사용자가 게임을 위한 번호 입력시 유효성 테스트', () => {
  test('입력한 값의 길이가 4자리 인 경우', () => {
    expect(() => {
      Validation.validateBaseballNumber('1234');
    }).toThrow('[ERROR]');
  });

  test('입력한 값에 숫자가 아닌 값이 들어있는 경우', () => {
    expect(() => {
      Validation.validateBaseballNumber('12 ');
    }).toThrow('[ERROR]');
  });

  test('입력한 값에 0이 포함되어 있는 경우', () => {
    expect(() => {
      Validation.validateBaseballNumber('120');
    }).toThrow('[ERROR]');
  });

  test('입력한 값에 0이 포함되어 있는 경우', () => {
    expect(() => {
      Validation.validateBaseballNumber('120');
    }).toThrow('[ERROR]');
  });

  test('입력한 값에 중복된 값이 있는 경우', () => {
    expect(() => {
      Validation.validateBaseballNumber('122');
    }).toThrow('[ERROR]');
  });
});

describe('사용자가 게임을 계속할지, 중단할지 결정하는 값 입력시 유효성 테스트', () => {
  test('입력한 값이 1인경우 : 에러 X', () => {
    expect(() => {
      Validation.validateConfirmNumber('1');
    }).not.toThrow('[ERROR]');
  });

  test('입력한 값이 2인경우 : 에러 X', () => {
    expect(() => {
      Validation.validateConfirmNumber('2');
    }).not.toThrow('[ERROR]');
  });

  test('입력한 값이 3인경우 : 에러 O', () => {
    expect(() => {
      Validation.validateConfirmNumber('3');
    }).toThrow('[ERROR]');
  });

  test('입력한 값이 빈값("")인경우 : 에러 O', () => {
    expect(() => {
      Validation.validateConfirmNumber('');
    }).toThrow('[ERROR]');
  });
});
