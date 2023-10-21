import NumberBaseballGame from "../src/NumberBaseballGame.js";

describe("NumberBaseballGameTest", () => {
  describe("throw new Error", () => {
    test("서로 다른 3자리의 수인 경우", () => {
      expect(() => NumberBaseballGame.validate([1, 2, 3])).not.toThrow();
      expect(() => NumberBaseballGame.validate([9, 1, 2])).not.toThrow();
    });
    test("서로 다른 3자리의 수가 아닌 경우 에러 발생", () => {
      expect(() => NumberBaseballGame.validate([1, 2, 3, 4])).toThrow();
      expect(() => NumberBaseballGame.validate([a, b, c])).toThrow();
      expect(() => NumberBaseballGame.validate([9, 9, 8])).toThrow();
    });
  });
});
