import Validator from "../src/Validator.js";

describe("ValidatorTest", () => {
  test("서로 다른 3자리의 수인 경우", () => {
    const array = [1, 2, 3];
    expect(Validator.isLength({ min: 3, max: 3, array: array })).toBeTruthy();
    expect(Validator.isNumberArray(array)).toBeTruthy();
    expect(Validator.containsZero(array)).toBeFalsy();
    expect(Validator.isUnique(array)).toBeTruthy();
  });

  test("3자리가 아닌 경우 false 반환", () => {
    expect(
      Validator.isLength({ min: 3, max: 3, array: [1, 2, 3, 4] })
    ).toBeFalsy();
    expect(Validator.isLength({ min: 3, max: 3, array: [8, 9] })).toBeFalsy();
  });

  test("숫자 배열이 아닌 경우 false 반환", () => {
    expect(Validator.isNumberArray(["a", 1, 2])).toBeFalsy();
    expect(Validator.isNumberArray([1, 5, "ㅇ"])).toBeFalsy();
    expect(Validator.isNumberArray(["1", "6", "3"])).toBeFalsy();
  });
});
