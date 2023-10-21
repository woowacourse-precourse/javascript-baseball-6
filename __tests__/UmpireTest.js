import BaseballTerms from "../src/BaseballTerms.js";
import Umpire from "../src/Umpire.js";

describe("UmpireTest", () => {
  const umpire = new Umpire();

  test("같은 숫자가 하나도 없는 경우 낫싱", () => {
    expect(umpire.umpire([1, 2, 3], [4, 5, 6])).toBe(BaseballTerms.NOTHING);
    expect(umpire.umpire([1, 5, 7], [3, 9, 6])).toBe(BaseballTerms.NOTHING);
  });

  test("같은 수가 같은 자리에 있는 경우 스트라이크", () => {
    expect(umpire.umpire([2, 4, 6], [2, 4, 6])).toBe(
      `3${BaseballTerms.STRIKE}`
    );
    expect(umpire.umpire([1, 2, 3], [1, 2, 7])).toBe(
      `2${BaseballTerms.STRIKE}`
    );
    expect(umpire.umpire([1, 2, 3], [1, 4, 7])).toBe(
      `1${BaseballTerms.STRIKE}`
    );
  });

  test("같은 수가 다른 자리에 있는 경우 볼", () => {
    expect(umpire.umpire([1, 2, 3], [2, 3, 1])).toBe(`3${BaseballTerms.BALL}`);
    expect(umpire.umpire([1, 2, 3], [2, 3, 4])).toBe(`2${BaseballTerms.BALL}`);
    expect(umpire.umpire([1, 2, 3], [2, 5, 6])).toBe(`1${BaseballTerms.BALL}`);
  });
});
