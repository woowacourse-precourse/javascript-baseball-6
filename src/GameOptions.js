import {GameMessages} from './GameMessages.js';

export const GameOptions = Object.freeze({
  REGAME: 1,
  EXIT: 2,
});

export const choiceOptions = (option) => {
  if (option === '1') return GameOptions.REGAME;
  if (option === '2') return GameOptions.EXIT;

  throw new Error(GameMessages.GAME_SELECT_VALID);
};

