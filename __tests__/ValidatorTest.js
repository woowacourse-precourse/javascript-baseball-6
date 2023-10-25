import NumberBaseballValidator from "../src/NumberbaseballValidator.js";

describe("ValidatorTest", () => {
  const numberBaseballValidator = new NumberBaseballValidator(1, 9, 3, 1, 2);
  test("서로 다른 3자리의 수인 경우", () => {
    const array = [1, 2, 3];
    expect(numberBaseballValidator.validate(array)).toBeTruthy();
    expect(numberBaseballValidator.validate(array)).toBeTruthy();
    expect(numberBaseballValidator.validate(array)).toBeTruthy();
  });

  test("3자리가 아닌 경우 false 반환", () => {
    expect(numberBaseballValidator.validate([1, 2, 3, 4])).toBeFalsy();
    expect(numberBaseballValidator.validate([8, 9])).toBeFalsy();
  });

  test("숫자 배열이 아닌 경우 false 반환", () => {
    expect(numberBaseballValidator.validate(["a", 1, 2])).toBeFalsy();
    expect(numberBaseballValidator.validate([1, 5, "ㅇ"])).toBeFalsy();
    expect(numberBaseballValidator.validate(["1", "6", "3"])).toBeFalsy();
  });

  test("중복되는 숫자가 있는 경우 false 반환", () => {
    expect(numberBaseballValidator.validate([5, 5, 9])).toBeFalsy();
    expect(numberBaseballValidator.validate([7, 2, 7])).toBeFalsy();
  });
});
