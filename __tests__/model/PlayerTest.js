import { GAME_SETTINGS } from '../../src/constants/GameSettings.js';
import Player from '../../src/model/Player.js';

describe('Player Class Test', () => {
  it.each(['123', '456', '789'])('Input Split Test', (input) => {
    // given
    const player = new Player();

    // when & then
    player.setSelectNumber(input);
    const result = player.getSelectNumber();
    expect(result.size).toEqual(GAME_SETTINGS.numberLength);
  });
});
