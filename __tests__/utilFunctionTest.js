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

  describe("인풋 유효성 체크 함수 테스트", () => {
    test("인풋 길이 조건 테스트", () => {
      expect(() => validateInput("1234")).toThrow(
        "[ERROR] 입력 값의 길이는 3이어야 합니다."
      );
      expect(() => validateInput("1")).toThrow(
        "[ERROR] 입력 값의 길이는 3이어야 합니다."
      );
      expect(() => validateInput("12")).toThrow(
        "[ERROR] 입력 값의 길이는 3이어야 합니다."
      );
      expect(() => validateInput("")).toThrow(
        "[ERROR] 입력 값의 길이는 3이어야 합니다."
      );
      expect(() => validateInput("123")).not.toThrow(
        "[ERROR] 입력 값의 길이는 3이어야 합니다."
      );
      expect(() => validateInput("a")).toThrow(
        "[ERROR] 입력 값의 길이는 3이어야 합니다."
      );
      expect(() => validateInput("ab")).toThrow(
        "[ERROR] 입력 값의 길이는 3이어야 합니다."
      );
      expect(() => validateInput("아자")).toThrow(
        "[ERROR] 입력 값의 길이는 3이어야 합니다."
      );
    });

    test("인풋 숫자 조건 테스트", () => {
      expect(() => validateInput("a23")).toThrow(
        "[ERROR] 입력 값은 숫자여야 합니다."
      );
      expect(() => validateInput("1b3")).toThrow(
        "[ERROR] 입력 값은 숫자여야 합니다."
      );
      expect(() => validateInput("12c")).toThrow(
        "[ERROR] 입력 값은 숫자여야 합니다."
      );
      expect(() => validateInput("화이팅")).toThrow(
        "[ERROR] 입력 값은 숫자여야 합니다."
      );
      expect(() => validateInput("123")).not.toThrow(
        "[ERROR] 입력 값은 숫자여야 합니다."
      );
    });
    test("인풋 중복 조건 테스트", () => {
      expect(() => validateInput("112")).toThrow(
        "[ERROR] 입력 값은 중복되는 숫자가 없어야 합니다."
      );
      expect(() => validateInput("111")).toThrow(
        "[ERROR] 입력 값은 중복되는 숫자가 없어야 합니다."
      );
      expect(() => validateInput("121")).toThrow(
        "[ERROR] 입력 값은 중복되는 숫자가 없어야 합니다."
      );
      expect(() => validateInput("123")).not.toThrow(
        "[ERROR] 입력 값은 중복되는 숫자가 없어야 합니다."
      );
    });

    test("인풋 0 조건 테스트", () => {
      expect(() => validateInput("012")).toThrow(
        "[ERROR] 입력 값은 1~9의 숫자여야 합니다."
      );
      expect(() => validateInput("102")).toThrow(
        "[ERROR] 입력 값은 1~9의 숫자여야 합니다."
      );
      expect(() => validateInput("120")).toThrow(
        "[ERROR] 입력 값은 1~9의 숫자여야 합니다."
      );
      expect(() => validateInput("123")).not.toThrow(
        "[ERROR] 입력 값은 1~9의 숫자여야 합니다."
      );
    });
  });


});
