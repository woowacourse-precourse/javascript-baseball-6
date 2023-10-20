import Computer from '../src/Computer.js';

let computer;
beforeEach(() => {
  computer = new Computer();
});

describe('컴퓨터의 야구 숫자 뽑기', () => {
  test('숫자 3개를 뽑았는가', () => {
    expect(computer.numbers).toHaveLength(3);
  });

  test('1과 9 사이의 숫자인가', () => {
    computer.numbers.forEach((number) => {
      expect(number).toBeWithinRange(1, 9);
    });
  });

  test('숫자가 정수인가', () => {
    computer.numbers.forEach((number) => {
      expect(number).toBeIntNumber();
    });
  });
});

expect.extend({
  toBeWithinRange(received, start, end) {
    const pass = received >= start && received <= end;

    if (pass) {
      return {
        message: () =>
          `expected ${received} to be within range ${start} - ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} not to be within range ${start} - ${end}`,
        pass: false,
      };
    }
  },
});

expect.extend({
  toBeIntNumber(received) {
    const pass = Math.floor(received) === received;

    if (pass) {
      return {
        message: () => `expected ${received} to be Int number`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} not to be Int number`,
        pass: false,
      };
    }
  },
});
