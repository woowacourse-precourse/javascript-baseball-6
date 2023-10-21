import Restarter from "../src/Restarter.js";

describe("RestarterTest", () => {
  test("1과 2 중 하나의 수인 경우", () => {
    expect(() => Restarter.validate(1)).not.toThrow();
    expect(() => Restarter.validate(2)).not.toThrow();
  });
  test("1과 2 중 하나의 수가 아닌 경우 에러 발생", () => {
    expect(() => Restarter.validate(3)).toThrow();
    expect(() => Restarter.validate(0)).toThrow();
  });
});
