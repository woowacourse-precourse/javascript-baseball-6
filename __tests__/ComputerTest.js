import Computer from "../src/domain/Computer";
import { MissionUtils } from "@woowacourse/mission-utils";


const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("컴퓨터 도메인 테스트", () => {
  test("컴퓨터가 정한 3자리의 수를 반환한다.", () => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);

    const computer = new Computer();
    computer.start();

    const value = computer.getValue();
    expect(value).toEqual(Number(randoms.join("")));
  });
  test("컴퓨터가 정한 3자리의 수를 초기화한다.", () => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);

    const computer = new Computer();
    computer.start();
    computer.reset();

    const value = computer.getValue();
    expect(value).toEqual(null);
  });
});