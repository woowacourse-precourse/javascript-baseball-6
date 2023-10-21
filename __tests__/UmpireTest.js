import BaseballTerms from "../src/BaseballTerms.js";
import Umpire from "../src/Umpire.js";

describe("UmpireTest", () => {
  const umpire = new Umpire();

  test("같은 숫자가 하나도 없는 경우 낫싱", () => {
    expect(umpire.umpire([1, 2, 3], [4, 5, 6])).toBe(BaseballTerms.NOTHING);
    expect(umpire.umpire([1, 5, 7], [3, 9, 6])).toBe(BaseballTerms.NOTHING);
  });
});
