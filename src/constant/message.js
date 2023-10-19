import { GAME_NUM_LENGTH } from "./rule.js";

export const START_MESSAGE = "숫자 야구 게임을 시작합니다.";
export const MESSAGE_TO_GET_PLAYER_NUM = "숫자를 입력해주세요 : ";
export const ERROR_MESSAGE_FOR_PLAYER_NUM = `잘못된 입력입니다. ${GAME_NUM_LENGTH}개의 숫자를 입력해주세요. 게임을 종료합니다.`;
export const SHOW_BALL_COUNT = (count) => `${count}볼`;
export const SHOW_STRIKE_COUNT = (count) => `${count}스트라이크`;
export const SHOW_BALL_STRIKE_COUNT = (ball, strike) =>
  `${ball}볼 ${strike}스트라이크`;
export const NOTHING_MESSAGE = "낫싱";
export const WIN_MESSAGE = `${GAME_NUM_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`;
