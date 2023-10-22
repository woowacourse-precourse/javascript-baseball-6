import Model from "../src/Model/Model";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("컴퓨터 랜덤 숫자", () => {
  const model = new Model();

  test("컴퓨터 랜덤 숫자 갯수는 3개이다. ", () => {
    // given
    mockRandoms([1, 2, 3, 4, 5]);

    // when & then
    const computerRandomNubmers = model.makeComputerRandomNumber();

    expect(computerRandomNubmers).toHaveLength(3);
  });
});
