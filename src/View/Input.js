import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, RESTART_MESSAGE } from './ViewConstant.js';

const Input = {
    async readAnswer() {
        const answer = await Console.readLineAsync(INPUT_MESSAGE);

        return answer;
    },

    async readRestartRequest() {
        const request = await Console.readLineAsync(RESTART_MESSAGE);

        return request;
    }
}

export default Input;