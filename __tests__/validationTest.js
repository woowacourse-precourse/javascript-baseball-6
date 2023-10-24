import { validation } from "../src/vallidation";

describe("checkValidation", () => {
  test('세 자리의 숫자가 아닌 경우, 예외 발생', () => {
    // given
    const userNumbers = [
      [1, 2],
      [1],
      [2, 4, 6, 7],
      [],
    ];

    // when & then
    userNumbers.forEach((userNumber) => {
      expect(validation(userNumber)).toBeFalsy();
    });
  });

  test('숫자가 아닌 값이 들어갈 경우, 예외 발생', () => {
    // given
    const userNumbers = [
      ["1", 2],
      [" "],
      [2, Error(), 6, 7],
      [],
      1,
      [undefined],
      undefined,
      null,
    ];

    // when & then
    userNumbers.forEach((userNumber) => {
      expect(validation(userNumber)).toBeFalsy();
    });
  });

  test('숫자가 중복될 경우, 예외 발생', () => {
    // given
    const numbers = [
      [1, 2, 2],
      [1, 1, 2],
      [3, 3, 3],
      [5, 5, 5],
    ];

    // when & then
    numbers.forEach((userNumber) => {
      expect(validation(userNumber)).toBeFalsy();
    });
  });

  test('0이 입력되면 예외 발생', () => {
    // given
    const number = [0, 2, 3];
    
    // when & then
    expect(validation(number)).toBeFalsy();
  });

  test('세 자리 숫자를, 중복없이 입력할 경우, 예외가 발생하지 않아요', () => {
    // given
    const numbers = [
      [1, 2, 3],
      [1, 3, 2],
      [1, 8, 9],
      [1, 2, 5],
    ];

    // when & then
    numbers.forEach((userNumber) => {
      validation(userNumber);
    });
  });
});
