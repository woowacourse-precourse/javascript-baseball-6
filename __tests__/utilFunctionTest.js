import checkBallCount from "../src/utils/checkBallCount.js";
import generateRandomNumber from "../src/utils/generateRandomNumbers.js";
import printBallCount from "../src/utils/printBallCount.js";
import validateInput from "../src/utils/validateInput.js";

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

  describe("볼 카운트 함수 테스트", () => {
    test("볼 카운트 함수 유효성 조건 테스트", () => {
      expect(checkBallCount("123", "123")).toEqual({ ball: 0, strike: 3 });
      expect(checkBallCount("123", "456")).toEqual({ ball: 0, strike: 0 });
      expect(checkBallCount("123", "345")).toEqual({ ball: 1, strike: 0 });
      expect(checkBallCount("123", "135")).toEqual({ ball: 1, strike: 1 });
      expect(checkBallCount("568", "586")).toEqual({ ball: 2, strike: 1 });
      expect(checkBallCount("568", "856")).toEqual({ ball: 3, strike: 0 });
    });
  });

  describe("볼 카운트 출력 함수 테스트", () => {
    test("볼 카운트 출력 테스트", () => {
      expect(printBallCount({ ball: 0, strike: 1 })).toEqual("1스트라이크");
      expect(printBallCount({ ball: 0, strike: 2 })).toEqual("2스트라이크");
      expect(printBallCount({ ball: 0, strike: 3 })).toEqual("3스트라이크");
      expect(printBallCount({ ball: 0, strike: 0 })).toEqual("낫싱");
      expect(printBallCount({ ball: 1, strike: 0 })).toEqual("1볼");
      expect(printBallCount({ ball: 2, strike: 0 })).toEqual("2볼");
      expect(printBallCount({ ball: 3, strike: 0 })).toEqual("3볼");
      expect(printBallCount({ ball: 1, strike: 1 })).toEqual("1볼 1스트라이크");
      expect(printBallCount({ ball: 1, strike: 2 })).toEqual("1볼 2스트라이크");
      expect(printBallCount({ ball: 2, strike: 1 })).toEqual("2볼 1스트라이크");
    });
  });
});
