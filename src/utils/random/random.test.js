import { BaseBall } from "../../constants/status";
import IncorrectFormatError from "../../error/IncorrectFormatError";
import NumberOutOfRangeError from "../../error/NumberOutOfRangeError";
import { getRandomNumbers } from "./random";

describe("random.js test", () => {
  test("parameter가 숫자가 아니면 IncorrectFormatError", () => {
    const str = "aa";
    try {
      getRandomNumbers(str);
      // error 발생 안하면 test 실패
      expect(1).toBe(0);
    } catch (e) {
      expect(e).toBeInstanceOf(IncorrectFormatError);
      expect(e.message).toBe("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  });

  test("parameter의 값이 너무 크면 NumberOutOfRangeError", () => {
    const MAX_LENGTH = BaseBall.MAX_LENGTH;
    // const MAX_LENGTH = BaseBall.END - BaseBall.START + 1;
    try {
      getRandomNumbers(MAX_LENGTH + 1);
      // error 발생 안하면 test 실패
      expect(1).toBe(0);
    } catch (e) {
      expect(e).toBeInstanceOf(NumberOutOfRangeError);
      expect(e.message).toBe(`[ERROR] ${MAX_LENGTH}이하의 숫자를 입력해 주세요.`);
    }
  });

  test("parameter의 크기만큼의 랜덤 숫자를 배열에 넣어 리턴", () => {
    const num = 3;
    const res = getRandomNumbers(num);
    expect(res.length).toBe(num);
    expect(res.every((elm) => !isNaN(elm))).toBeTruthy();
  });
});
