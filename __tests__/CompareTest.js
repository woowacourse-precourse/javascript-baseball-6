import Model from "../src/Model/Model";

describe("스트라이크와 볼 카운트 기능", () => {
  const model = new Model();

  test("자릿수가 같고 숫자가 같으면 스트라이크이다", () => {
    // given
    const computerRandomNumbers = [1, 2, 3];
    const userNumberInput = "123";

    // when
    const [ball, strike] = model.compareNumbers(computerRandomNumbers, userNumberInput);

    // then
    expect(strike).toBe(3);
  });

  test("자릿수가 다르고 숫자가 같으면 볼이다.", () => {
    // given
    const computerRandomNumbers = [1, 2, 3];
    const userNumberInput = "213";

    // when
    const [ball, strike] = model.compareNumbers(computerRandomNumbers, userNumberInput);

    // then
    expect(ball).toBe(2);
  });
});
