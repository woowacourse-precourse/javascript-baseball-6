import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../../constants/GameMessage.js';

class Input {
	static getTryNumber() {
		return Console.readLineAsync(GAME_MESSAGE.getNumber); // 입력으로 받아온 값을 반환한다.
	}

	static getRestart() {
		return Console.readLineAsync(GAME_MESSAGE.restart);
	}
}

export default Input;
