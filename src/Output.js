import { Console } from '@woowacourse/mission-utils';
import { 
    START_MESSAGE,
    ERROR_MESSAGE
} from './Define';

export const PRINT_START_MESSAGE = () => {
    Console.print(START_MESSAGE);
};

export const PRINT_ERROR_MESSAGE = () => {
    throw new Error(ERROR_MESSAGE);
};
