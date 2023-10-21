import IncorrectFormatError from "../../error/IncorrectFormatError";
import { stringToNumberArray } from "./convert";

describe("convert.js test", () => {
  test("parameter의 형식이 올바르지 않으면 IncorrectFormatError", () => {
    const str = "aa";
    try {
      stringToNumberArray(str);
      // error 발생 안하면 test 실패
      expect(1).toBe(0);
    } catch (e) {
      expect(e).toBeInstanceOf(IncorrectFormatError);
      expect(e.message).toBe("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  });

  test("parameter의 형식이 올바르면 string을 number[] 로 바꿔주는 함수", () => {
    const str = "123";
    const numArr = stringToNumberArray(str);
    expect(numArr.length).toBe(str.length);
    expect(numArr.every((elm) => !isNaN(elm))).toBeTruthy();
  });
});
