import Model from "../src/Model/Model";

describe("스트라이크와 볼 카운트 기능", () => {
  const model = new Model();
  test("자릿수가 같고 숫자가 같으면 스트라이크이다", () => {
    const [bal, strike] = model.compareNumbers([1, 2, 3], "123");

    expect(strike).toBe(3);
  });

  test("자릿수가 다르고 숫자가 같으면 볼이다.", () => {
    const [ball, strike] = model.compareNumbers([1, 2, 3], "213");

    expect(ball).toBe(2);
  });
});
