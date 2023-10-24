import { MissionUtils } from "@woowacourse/mission-utils";

import restartGame from "../src/controller/restartGame.js";
import Messages from "../src/common/messages.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("사용자가 재시작 질문의 입력값의 값에 대한 검증 테스트", () => {
  let restart;

  beforeEach(() => {
    restart = restartGame;
  });

  test("1,2 외의 다른 숫자 입력하는 경우", async () => {
    mockQuestions(["3", "13", "100"]);
    await expect(restart()).rejects.toThrow(Messages.RESTART_ERROR_MESSAGE);
  });

  test("공백 입력하는 경우", async () => {
    mockQuestions([" "]);
    await expect(restart()).rejects.toThrow(Messages.RESTART_ERROR_MESSAGE);
  });

  test("숫자가 아닌 문자를 입력하는 경우", async () => {
    mockQuestions(["ab", "가나다"]);
    await expect(restart()).rejects.toThrow(Messages.RESTART_ERROR_MESSAGE);
  });

  test("12로 이루어진 숫자를 입력하는 경우", async () => {
    mockQuestions(["12", "1212"]);
    await expect(restart()).rejects.toThrow(Messages.RESTART_ERROR_MESSAGE);
  });
});
