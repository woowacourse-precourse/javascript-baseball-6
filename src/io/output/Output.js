import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../../constants/GameMessage.js';

class Output {
	static printStart() {
		Console.print(GAME_MESSAGE.start);
	}
}

export default Output;
