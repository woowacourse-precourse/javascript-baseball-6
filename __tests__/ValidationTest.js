import Validator from "../src/validator/Validator";

describe("입력값 검증", () => {
  test("3자리 수인지 검증한다.", () => {
    expect(Validator.isValidLength("123")).toBeTruthy();
    expect(Validator.isValidLength("1234")).toBeFalsy();
    expect(Validator.isValidLength("12")).toBeFalsy();
  });

  test("서로 다른 수인지 검증한다.", () => {
    expect(Validator.hasUniqueNumbers("123")).toBeTruthy();
    expect(Validator.hasUniqueNumbers("112")).toBeFalsy();
    expect(Validator.hasUniqueNumbers("121")).toBeFalsy();
    expect(Validator.hasUniqueNumbers("12a")).toBeFalsy();
  });

  test("1~9 사이의 수인지 검증한다.", () => {
    expect(Validator.isValidRange("123")).toBeTruthy();
    expect(Validator.isValidRange("149")).toBeTruthy();
    expect(Validator.isValidRange("023")).toBeFalsy();
    expect(Validator.isValidRange("a12")).toBeFalsy();
  });

  test("재시작/종료를 구분하는 1 또는 2인지 검증한다.", () => {
    expect(Validator.isExitOrRestart("1")).toBeTruthy();
    expect(Validator.isExitOrRestart("2")).toBeTruthy();
    expect(Validator.isExitOrRestart("3")).toBeFalsy();
    expect(Validator.isExitOrRestart("a")).toBeFalsy();
  });
});