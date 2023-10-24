import { MissionUtils } from "@woowacourse/mission-utils";
import Message from "../src/utils/message.js";
import GameController from "../src/Controller/GameController.js";

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("사용자 숫자 입력값 테스트", () => {
  test("알파벳 3자리 입력할 경우", () => {
    mockQuestions(["asd"]);
    const game = new GameController();

    try {
      game.askNumbers();
    } catch (error) {
      expect(error.message).toBe(Message.INPUT_IS_NUMBER);
    }
  });

  test("알파벳 3자리 초과 입력할 경우", () => {
    mockQuestions(["asdfg"]);
    const game = new GameController();

    try {
      game.askNumbers();
    } catch (error) {
      expect(error.message).toBe(Message.INPUT_IS_THREE_DIGIT);
    }
  });

  test("숫자 3자리 초과 입력할 경우", () => {
    mockQuestions(["1234567"]);
    const game = new GameController();

    try {
      game.askNumbers();
    } catch (error) {
      expect(error.message).toBe(Message.INPUT_IS_THREE_DIGIT);
    }
  });

  test("3자리 숫자 중 중복된 숫자가 있을 경우", () => {
    mockQuestions(["344"]);
    const game = new GameController();

    try {
      game.askNumbers();
    } catch (error) {
      expect(error.message).toBe(Message.INPUT_IS_UNIQUE);
    }
  });

  test("소수가 입력될 경우", () => {
    mockQuestions(["1.23"]);
    const game = new GameController();

    try {
      game.askNumbers();
    } catch (error) {
      expect(error.message).toBe(Message.INPUT_IS_NUMBER);
    }
  });

  test("0이 포함된 숫자가 입력될 경우", () => {
    mockQuestions(["802"]);
    const game = new GameController();

    try {
      game.askNumbers();
    } catch (error) {
      expect(error.message).toBe(Message.INPUT_IS_NONZERO);
    }
  });
});

describe("게임 종료 후 사용자 입력값 테스트", () => {
  test("1, 2 외의 숫자를 입력할 경우", () => {
    mockQuestions(["11"]);
    const game = new GameController();

    try {
      game.askRestartOrQuit();
    } catch (error) {
      expect(error.message).toBe(Message.ANSWER_MUST_BE_ONE_OR_TWO);
    }
  });

  test("1, 2 외의 문자를 입력할 경우", () => {
    mockQuestions(["asdf"]);
    const game = new GameController();

    try {
      game.askRestartOrQuit();
    } catch (error) {
      expect(error.message).toBe(Message.INPUT_IS_NUMBER);
    }
  });

  test("1, 2 선택지 외의 소수를 입력할 경우", () => {
    mockQuestions(["5.6"]);
    const game = new GameController();

    try {
      game.askRestartOrQuit();
    } catch (error) {
      expect(error.message).toBe(Message.ANSWER_MUST_BE_ONE_OR_TWO);
    }
  });
});
