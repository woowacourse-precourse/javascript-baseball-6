import { QUERY } from '../constants/index.js';
import { GameProgress, User } from '../models/index.js';
import { InputView } from '../view/index.js';

const InputController = {
  async getUser() {
    const value = await InputView.readText(QUERY.numbers);
    return new User(value);
  },
  async getChangedGameProgress() {
    const value = await InputView.readText(QUERY.gameRestart);
    return new GameProgress(true, value);
  },
};

export default InputController;
