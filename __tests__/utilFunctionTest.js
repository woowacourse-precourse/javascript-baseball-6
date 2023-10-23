import generateRandomNumber from "../src/utils/generateRandomNumber";
import validateInput from "../src/utils/validateInput";

describe("UtilFunctionTest", () => {
  describe("난수 생성 함수 테스트", () => {
    test("난수 생성 함수 조건 유효성 테스트", () => {
      expect(validateInput(generateRandomNumber())).toBeTruthy();
      expect(validateInput(generateRandomNumber())).toBeTruthy();
      expect(validateInput(generateRandomNumber())).toBeTruthy();
    });
  });
});
