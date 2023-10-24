import { Console } from '@woowacourse/mission-utils';
import SYSTEM_MESSAGES from './constants/SYSTEM_MESSAGES';

class PrintConsole {
	gameStart() {
		Console.print(SYSTEM_MESSAGES.GAME_END);
	}

	gameResult(ball, strike) {
		let text = '';
		if (ball) text += `${ball}볼 `;
		if (strike) text += `${strike}스트라이크`;
		if (ball === 0 && strike === 0) text += '낫싱';

		Console.print(text);
	}

	gameEnd() {
		Console.print(SYSTEM_MESSAGES.GAME_END);
	}
}

export default PrintConsole;
