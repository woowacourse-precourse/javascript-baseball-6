import { Console } from '@woowacourse/mission-utils';
import { CORRECT_MESSAGE, RESTART_MESSAGE, START_MESSAGE } from './ViewConstant.js';

const Output = {
    print(message) {
        Console.print(message);
    },

    printStart() {
        this.print(START_MESSAGE);
    },

    printRestartMessage() {
        this.print(RESTART_MESSAGE);
    },

    printCorrectMessage() {
        this.print(CORRECT_MESSAGE);
    }
}

export default Output;