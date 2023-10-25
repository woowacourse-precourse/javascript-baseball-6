import Validate from '../src/Validate';

describe('유저가 고른 숫자 입력값 유효성 검사 기능', () => {
  test('입력값이 없는 경우', () => {
    expect(() => {
      Validate.userPickNumbers('').rejects.toThrow('[ERROR]');
    });
  });

  test('3개 초과 입력한 경우', () => {
    expect(() => {
      Validate.userPickNumbers('1234').rejects.toThrow('[ERROR]');
    });
  });

  test('3개 미만 입력한 경우', () => {
    expect(() => {
      Validate.userPickNumbers('12').rejects.toThrow('[ERROR]');
    });
  });

  test('음수를 입력한 경우', () => {
    expect(() => {
      Validate.userPickNumbers(-1).rejects.toThrow('[ERROR]');
    });
  });

  test('숫자가 아닌 문자를 입력한 경우', () => {
    expect(() => {
      Validate.userPickNumbers('가나다').rejects.toThrow('[ERROR]');
    });
  });

  test('특수문자를 입력한 경우', () => {
    expect(() => {
      Validate.userPickNumbers('#').rejects.toThrow('[ERROR]');
    });
  });
});

describe('재시작 여부 입력값 유효성 검사 기능', () => {
  test('입력값이 없는 경우', () => {
    expect(() => {
      Validate.restartOrExit('').rejects.toThrow('[ERROR]');
    });
  });

  test('문자를 입력한 경우', () => {
    expect(() => {
      Validate.restartOrExit('ㄱ').rejects.toThrow('[ERROR]');
    });
  });

  test('특수문자를 입력한 경우', () => {
    expect(() => {
      Validate.restartOrExit('@').rejects.toThrow('[ERROR]');
    });
  });

  test('1또는 2를 포함한 한 개 이상의 숫자를 입력한 경우', () => {
    expect(() => {
      Validate.restartOrExit('12').rejects.toThrow('[ERROR]');
    });
  });

  test('1또는 2가 아닌 숫자를 입력한 경우', () => {
    expect(() => {
      Validate.restartOrExit('5').rejects.toThrow('[ERROR]');
    });
  });

  test('음수를 입력한 경우', () => {
    expect(() => {
      Validate.restartOrExit(-1).rejects.toThrow('[ERROR]');
    });
  });
});
