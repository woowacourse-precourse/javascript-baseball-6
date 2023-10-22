import { MissionUtils } from "@woowacourse/mission-utils";
import User from "../src/User";

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe("사용자 입력을 검증합니다", () => {
  test("3자리가 아닌 입력을 했을 때 에러를 발생시킵니다", async () => {
    // given
    const input = "12";
    mockQuestions(input);

    // when & then
    const user = new User();
    await expect(user.inputNumber()).rejects.toThrow("[ERROR]");
  });

  test("숫자가 아닌 문자가 포함됐을 때 에러를 발생시킵니다", async () => {
    // given
    const input = "1안2";
    mockQuestions(input);

    // when & then
    const user = new User();
    await expect(user.inputNumber()).rejects.toThrow("[ERROR]");
  });

  test("0이 포함됐을 때 에러를 발생시킵니다", async () => {
    // given
    const input = "102";
    mockQuestions(input);

    // when & then
    const user = new User();
    await expect(user.inputNumber()).rejects.toThrow("[ERROR]");
  });

  test("중복된 숫자가 포함됐을 때 에러를 발생시킵니다", async () => {
    // given
    const input = "112";
    mockQuestions(input);

    // when & then
    const user = new User();
    await expect(user.inputNumber()).rejects.toThrow("[ERROR]");
  });

  test("1,2 외 다른 숫자가 들어갈 경우 에러를 발생시킵니다", async () => {
    // given
    const input = "3";
    mockQuestions(input);

    // when & then
    const user = new User();
    await expect(user.inputRetryOrEnd()).rejects.toThrow("[ERROR]");
  });

  test("숫자가 한 자리가 아닌 경우 에러를 발생시킵니다", async () => {
    // given
    const input = "12";
    mockQuestions(input);

    // when & then
    const user = new User();
    await expect(user.inputRetryOrEnd()).rejects.toThrow("[ERROR]");
  });

  test("숫자가 아닌 다른 문자가 들어갈 경우 에러를 발생시킵니다", async () => {
    // given
    const input = "공습경보";
    mockQuestions(input);

    // when & then
    const user = new User();
    await expect(user.inputRetryOrEnd()).rejects.toThrow("[ERROR]");
  });
});
