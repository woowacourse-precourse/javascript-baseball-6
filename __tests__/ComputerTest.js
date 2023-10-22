import Computer from '../src/Computer.js';

let computer;
beforeEach(() => {
  computer = new Computer();
});

describe('컴퓨터의 야구 숫자 뽑기', () => {
  test('컴퓨터 숫자는 3개여야 합니다.', () => {
    expect(computer.getNumbers()).toHaveLength(3);
  });

  test('컴퓨터 숫자는 1과 9 사이의 숫자여야 합니다.', () => {
    const numbers = computer.getNumbers();
    numbers.forEach((number) => {
      expect(number).toBeWithinRange(1, 9);
    });
  });

  test('컴퓨터 숫자는 정수여야 합니다.', () => {
    const numbers = computer.getNumbers();
    numbers.forEach((number) => {
      expect(number).toBeIntNumber();
    });
  });

  test('컴퓨터 숫자는 중복이 없습니다.', () => {
    expect(computer.getNumbers()).toBeUniqueNumbers();
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

expect.extend({
  toBeUniqueNumbers(received) {
    const uniques = received.reduce(
      (uniques, number) =>
        uniques.includes(number) ? uniques : [...uniques, number],
      []
    );
    const pass = uniques.length === 3;

    if (pass) {
      return {
        message: () => `expected ${received} to be unique number`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} not to be unique number`,
        pass: false,
      };
    }
  },
});
