import { MissionUtils } from "@woowacourse/mission-utils";

import BaseballGame from "../src/BaseballGame.js";
import Messages from "../src/common/messages.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("사용자가 입력하는 모든 값에 대한 검증 테스트", () => {
  let game;

  beforeEach(() => {
    game = new BaseballGame();
  });

  test("중복된 숫자를 입력하는 경우", async () => {
    mockQuestions(["112"]);
    await expect(game.getUserInputNumbers()).rejects.toThrow(
      Messages.USER_INPUT_ERROR_MESSAGE
    );
  });

  test("4자리 이상의 숫자를 입력하는 경우", async () => {
    mockQuestions(["1234"]);
    await expect(game.getUserInputNumbers()).rejects.toThrow(
      Messages.USER_INPUT_ERROR_MESSAGE
    );
  });

  test("2자리 이하의 숫자를 입력하는 경우", async () => {
    mockQuestions(["12"]);
    await expect(game.getUserInputNumbers()).rejects.toThrow(
      Messages.USER_INPUT_ERROR_MESSAGE
    );
  });

  test("공백을 입력하는 경우", async () => {
    mockQuestions([" "]);
    await expect(game.getUserInputNumbers()).rejects.toThrow(
      Messages.USER_INPUT_ERROR_MESSAGE
    );
  });

  test("숫자와 공백의 조합으로 입력하는 경우", async () => {
    mockQuestions(["12 "]);
    await expect(game.getUserInputNumbers()).rejects.toThrow(
      Messages.USER_INPUT_ERROR_MESSAGE
    );
  });

  test("숫자가 아닌 문자를 입력하는 경우", async () => {
    mockQuestions(["abc"]);
    await expect(game.getUserInputNumbers()).rejects.toThrow(
      Messages.USER_INPUT_ERROR_MESSAGE
    );
  });

  test("숫자와 문자의 조합으로 입력하는 경우", async () => {
    mockQuestions(["12a"]);
    await expect(game.getUserInputNumbers()).rejects.toThrow(
      Messages.USER_INPUT_ERROR_MESSAGE
    );
  });

  test("입력값에 0이 포함되는 경우", async () => {
    mockQuestions(["120"]);
    await expect(game.getUserInputNumbers()).rejects.toThrow(
      Messages.USER_INPUT_ERROR_MESSAGE
    );
  });
});
