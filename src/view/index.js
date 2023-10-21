import { OUTPUT_MESSAGES } from '../constants/Messages.js';
import OutputView from './OutputView.js';

const View = {
  printStart() {
    OutputView.print(OUTPUT_MESSAGES.GAME_START);
  },
};

export default View;
