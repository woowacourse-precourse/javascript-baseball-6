import generateNumber from "../src/utils/generateNumber";
import Validator from "../src/validator/Validator";

describe("유틸 테스트", () => {
  describe('generateNumber 테스트', () => {
    test("서로 다른 수인지 검증한다.", () => {
      const [size, min, max] = [3, 1, 9];
      const number = generateNumber({ size, min, max });
      expect(Validator.isNumber(number) && Validator.hasUniqueValue(number)).toBeTruthy();
    });
    test("1~9 사이의 수인지 검증한다.", () => {
      const [size, min, max] = [3, 1, 9];
      const number = generateNumber({ size, min, max });
      expect(Validator.isValidRange(number, { min, max })).toBeTruthy();
    });
    test("3자리 수인지 검증한다.", () => {
      const [size, min, max] = [3, 1, 9];
      const number = generateNumber({ size, min, max });
      expect(Validator.isValidLength(number, { size })).toBeTruthy();
    });
  });
});