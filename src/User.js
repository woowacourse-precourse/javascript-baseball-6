import { Console } from '@woowacourse/mission-utils';
import { USER_INPUT_MESSAGE } from './constants/MessageConstants';

export default class User {
    async getUserInput() {
        const userInput = await Console.readLineAsync(USER_INPUT_MESSAGE);
        return Array.from(userInput).map(Number);
    }
}