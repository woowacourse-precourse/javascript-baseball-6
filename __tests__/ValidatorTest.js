import Validator from "../src/Validator.js";

describe("ValidatorTest", () => {
  test("서로 다른 3자리의 수인 경우", () => {
    const array = [1, 2, 3];
    expect(Validator.isLength({ min: 3, max: 3, array: array })).toBeTruthy();
    expect(Validator.isNumberArray(array)).toBeTruthy();
    expect(Validator.containsZero(array)).toBeFalsy();
    expect(Validator.isUnique(array)).toBeTruthy();
  });
});
