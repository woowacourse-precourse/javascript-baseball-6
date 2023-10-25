import { GAME_NUMBER_LENGTH, QUIT, RESTART } from './constants.js';

const INVALID_PLAYER_NUMBER_LENGTH_MESSAGE = '[ERROR] 입력한 값의 길이는 3자리이어야 합니다.';
const INVALID_PLAYER_NUMBER_LANGE_MESSAGE = '[ERROR] 1부터 9까지의 3자리 숫자만 입력 가능합니다.';
const DUPLICATE_PLAYER_NUMBER_MESSAGE = '[ERROR] 중복된 숫자를 입력할 수 없습니다.';
const INVALID_CONFIRM_NUMBER_MESSAGE = '[ERROR] 1 또는 2를 입력해주세요';

const Validation = {
  validateBaseballNumber(input) {
    if (input.length !== GAME_NUMBER_LENGTH) {
      throw new Error(INVALID_PLAYER_NUMBER_LENGTH_MESSAGE);
    }

    if (input.match(/([1-9])/g)?.length !== GAME_NUMBER_LENGTH) {
      throw new Error(INVALID_PLAYER_NUMBER_LANGE_MESSAGE);
    }

    if (new Set([...input]).size < GAME_NUMBER_LENGTH) {
      throw new Error(DUPLICATE_PLAYER_NUMBER_MESSAGE);
    }
  },

  validateConfirmNumber(input) {
    if (Number(input) !== RESTART && Number(input) !== QUIT) {
      throw new Error(INVALID_CONFIRM_NUMBER_MESSAGE);
    }
  },
};

export default Validation;
