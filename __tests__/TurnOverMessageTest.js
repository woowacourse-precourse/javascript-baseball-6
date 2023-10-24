import BaseballGame from "../src/Model/BaseballGame";
import { GAME_MESSAGE } from "../src/Util/Message";
describe("숫자야구 턴 종료 후 메시지 테스트", () => {
  const baseballgame = new BaseballGame();
  baseballgame.computer_num = [3,5,9];

  test("1스트라이크", () => {
    expect(baseballgame.getTurnResultMessage([3,1,2])).toBe(GAME_MESSAGE.STRIKE(1));
  });

  test("2스트라이크", () => {
    expect(baseballgame.getTurnResultMessage([3,5,2])).toBe(GAME_MESSAGE.STRIKE(2));
  });

  test("3스트라이크", () => {
    expect(baseballgame.getTurnResultMessage([3,5,9])).toBe(GAME_MESSAGE.STRIKE(3));
  });

  test("1볼", () => {
    expect(baseballgame.getTurnResultMessage([1,3,2])).toBe(GAME_MESSAGE.BALL(1));
  });

  test("2볼", () => {
    expect(baseballgame.getTurnResultMessage([5,3,2])).toBe(GAME_MESSAGE.BALL(2));
  });

  test("3볼", () => {
    expect(baseballgame.getTurnResultMessage([9,3,5])).toBe(GAME_MESSAGE.BALL(3));
  });

  test("1볼 1스트라이크", () => {
    expect(baseballgame.getTurnResultMessage([3,9,2])).toBe(`${GAME_MESSAGE.BALL(1)} ${GAME_MESSAGE.STRIKE(1)}`);
  });

  test("2볼 1스트라이크", () => {
    expect(baseballgame.getTurnResultMessage([3,9,5])).toBe(`${GAME_MESSAGE.BALL(2)} ${GAME_MESSAGE.STRIKE(1)}`);
  });
});