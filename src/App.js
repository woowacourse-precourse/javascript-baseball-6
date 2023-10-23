import { Console, } from '@woowacourse/mission-utils';
import { CREATE_RANDOM_NUMBER } from './Input';
import { 
    COMPARE_NUMBER,
    IS_VALID_INPUT,
} from './Compare';
import { 
    PRINT_ERROR_MESSAGE,
    PRINT_START_MESSAGE,
    PRINT_RESULT_MESSAGE,
} from './Output';
import { 
    EXIT_GAME,
    LINE_INPUT_MESSAGE,
    RESTART_GAME,
    RESTART_MESSAGE,
} from './Define';

class App {
  async play() {
    let playFlag = true;

    PRINT_START_MESSAGE();
    while (playFlag) {
      const RANDOM_NUMBER = CREATE_RANDOM_NUMBER();

      while (true) {
        const USER_INPUT = await Console.readLineAsync(LINE_INPUT_MESSAGE);
        if (!IS_VALID_INPUT(USER_INPUT)) {
          PRINT_ERROR_MESSAGE();
        }
        
        const PLAYER_NUMBER = USER_INPUT.split('').map(Number);
        const COMPARE_RESULT = COMPARE_NUMBER(PLAYER_NUMBER, RANDOM_NUMBER);
        PRINT_RESULT_MESSAGE(COMPARE_RESULT);

        if (COMPARE_RESULT.strikes === 3) {
          let userRestartChoose;
          userRestartChoose = await Console.readLineAsync(RESTART_MESSAGE);

          if (userRestartChoose !== RESTART_GAME && userRestartChoose != EXIT_GAME) {
            PRINT_ERROR_MESSAGE();
          }
          if (userRestartChoose === EXIT_GAME) {
            playFlag = false;
          }

          break;
        }
      }
    }
  }
}

export default App;