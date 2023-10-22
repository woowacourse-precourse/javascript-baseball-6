import { MissionUtils } from "@woowacourse/mission-utils";

describe("util test", () => {
  test("pickNumberInLis", () => {
    const list = [1, 2, 3];
    const result = MissionUtils.Random.pickNumberInList(list);
    expect(list).toContain(result);
  });
});
