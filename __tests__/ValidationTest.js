import Validator from "../src/validator/Validator";

describe("입력값 검증", () => {
  test("자리 수를 검증한다.", () => {
    expect(Validator.isValidLength("123", { size: 3 })).toBeTruthy();
    expect(Validator.isValidLength("1234", { size: 3 })).toBeFalsy();
    expect(Validator.isValidLength("12", { size: 3 })).toBeFalsy();
    expect(Validator.isValidLength("12", { size: 2 })).toBeTruthy();
  });

  test("서로 다른 값인지 검증한다.", () => {
    expect(Validator.hasUniqueValue("123")).toBeTruthy();
    expect(Validator.hasUniqueValue("112")).toBeFalsy();
    expect(Validator.hasUniqueValue("121")).toBeFalsy();
    expect(Validator.hasUniqueValue("abc")).toBeTruthy();
  });

  test("1~9 사이의 수인지 검증한다.", () => {
    expect(Validator.isValidRange("123", { min: 1, max: 9 })).toBeTruthy();
    expect(Validator.isValidRange("149", { min: 1, max: 9 })).toBeTruthy();
    expect(Validator.isValidRange("023", { min: 1, max: 9 })).toBeFalsy();
    expect(Validator.isValidRange("a12", { min: 1, max: 9 })).toBeFalsy();
  });

  test("재시작/종료를 구분하는 1 또는 2인지 검증한다.", () => {
    expect(Validator.isExitOrRestart("1", { restart: 1, exit: 2 })).toBeTruthy();
    expect(Validator.isExitOrRestart("2", { restart: 1, exit: 2 })).toBeTruthy();
    expect(Validator.isExitOrRestart("3", { restart: 1, exit: 2 })).toBeFalsy();
    expect(Validator.isExitOrRestart("a", { restart: 1, exit: 2 })).toBeFalsy();
  });
});