import validation from "../src/Util/Validation";
import {ERROR_MESSAGE} from "../src/Util/Message";

describe("숫자야구 입력값 유효성 검사", () => {
  test("숫자 야구 입력값 정상", () => {
    expect(() => validation.checkBaseBallNumber("123")).not.toThrow();
  });

  test("숫자 야구 중복값 입력시 중복 에러 메시지 출력되는지 확인", () => {
    expect(() => validation.checkBaseBallNumber("122")).toThrow(ERROR_MESSAGE.DUPLICATE);
  });

  test("숫자 야구 3초과 입력시 길이 에러 메시지 출력되는지 확인", () => {
    expect(() => validation.checkBaseBallNumber("1224")).toThrow(ERROR_MESSAGE.LENGTH);
  });

  test("숫자 야구 3미만 입력시 길이 에러 메시지 출력되는지 확인", () => {
    expect(() => validation.checkBaseBallNumber("12")).toThrow(ERROR_MESSAGE.LENGTH);
  });

  test("숫자 야구 0을 포함 입력시 범위 에러 메시지 출력되는지 확인", () => {
    expect(() => validation.checkBaseBallNumber("012")).toThrow(ERROR_MESSAGE.RANGE);
  });

  test("숫자 야구 문자를 포함하여 입력시 문자 에러 메시지 출력되는지 확인", () => {
    expect(() => validation.checkBaseBallNumber("a12")).toThrow(ERROR_MESSAGE.NUMBER);
  });

  test("숫자 야구 공백 입력시 길이 에러 메시지 출력되는지 확인", () => {
    expect(() => validation.checkBaseBallNumber("")).toThrow(ERROR_MESSAGE.LENGTH);
  });
});

describe("재시작 또는 종료 입력값 유효성 검사", () => {
  test("1을 입력하였을 때 정상", () => {
    expect(() => validation.checkRestartCommand("1")).not.toThrow();
  });
  test("2을 입력하였을 때 정상", () => {
    expect(() => validation.checkRestartCommand("2")).not.toThrow();
  });
  test("1,2 이외에 값 넣을 때 에러", () => {
    expect(() => validation.checkRestartCommand("3")).toThrow(ERROR_MESSAGE.ONEORTWO);
  });
  test("공백을 넣을 때 에러", () => {
    expect(() => validation.checkRestartCommand("3")).toThrow(ERROR_MESSAGE.ONEORTWO);
  });
  test("문자를 넣을 때 에러", () => {
    expect(() => validation.checkRestartCommand("a")).toThrow(ERROR_MESSAGE.ONEORTWO);
  });
  test("11을 넣을 때 에러", () => {
    expect(() => validation.checkRestartCommand("11")).toThrow(ERROR_MESSAGE.ONEORTWO);
  });
});