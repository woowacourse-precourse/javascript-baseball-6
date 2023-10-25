import NumberBaseballUmpire from "../src/NumberBaseballUmpire";
import NumberBaseballUmpireIndicator from "../src/NumberBaseballUmpireIndicator.js";
import NumberBaseballConsole from "../src/NumberBaseballConsole";

describe("UmpireTest", () => {
  const umpire = new NumberBaseballUmpire(new NumberBaseballUmpireIndicator(3));
  const console = new NumberBaseballConsole(1, 9, 3, 1, 2);

  test("같은 숫자가 하나도 없는 경우 낫싱", () => {
    expect(umpire.umpire([1, 2, 3], [4, 5, 6])).toBe(NOTHING);
    expect(umpire.umpire([1, 5, 7], [3, 9, 6])).toBe(NOTHING);
  });

  test("같은 수가 같은 자리에 있는 경우 스트라이크", () => {
    expect(umpire.umpire([2, 4, 6], [2, 4, 6])).toBe(`3${STRIKE}`);
    expect(umpire.umpire([1, 2, 3], [1, 2, 7])).toBe(`2${STRIKE}`);
    expect(umpire.umpire([1, 2, 3], [1, 4, 7])).toBe(`1${STRIKE}`);
  });

  test("같은 수가 다른 자리에 있는 경우 볼", () => {
    expect(umpire.umpire([1, 2, 3], [2, 3, 1])).toBe(`3${BALL}`);
    expect(umpire.umpire([1, 2, 3], [2, 3, 4])).toBe(`2${BALL}`);
    expect(umpire.umpire([1, 2, 3], [2, 5, 6])).toBe(`1${BALL}`);
  });

  test("스트라이크와 볼이 둘 다 있는 경우", () => {
    expect(umpire.umpire([1, 2, 3], [1, 3, 2])).toBe(`2${BALL} 1${STRIKE}`);
    expect(umpire.umpire([1, 2, 3], [1, 3, 9])).toBe(`1${BALL} 1${STRIKE}`);
  });
});
