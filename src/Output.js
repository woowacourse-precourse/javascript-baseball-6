import { Console } from '@woowacourse/mission-utils';
import { 
    START_MESSAGE,
    ERROR_MESSAGE,
    NOTHING,
    START_MESSAGE,
    STRIKE,
} from './Define';

export const PRINT_START_MESSAGE = () => {
    Console.print(START_MESSAGE);
};

export const PRINT_ERROR_MESSAGE = () => {
    throw new Error(ERROR_MESSAGE);
};

export const PRINT_RESULT_MESSAGE = ({ strikes, balls }) => {
    if (strikes === 0 && balls === 0) {
      Console.print(NOTHING);
    } else if (strikes === 3) {
      Console.print(CLOSE_MESSAGE);
    } else {
      Console.print(`${balls}${BALL} ${strikes}${STRIKE}`);
    }
  };