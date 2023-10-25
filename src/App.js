import { MissionUtils } from "@woowacourse/mission-utils";
import { STRINGS } from "./constants/strings";
import { createRandomNumber } from "./createRandomNumber";
import { getInputNumbers } from "./getInputNumbers";
import { Judge } from "./judge";
import { replay } from "./replay";

class App {
	async playGame() {
		MissionUtils.Console.print(STRINGS.GAME_START);
		let restart = false;

		do {
			const answerNumbers = createRandomNumber();
			let userNumbers;
			let result;

			do {
				userNumbers = await getInputNumbers();

				result = await Judge(answerNumbers, userNumbers);
			} while (!result);

			const replayChoice = await replay();
			restart = replayChoice === "1";
		} while (restart);
		return restart;
	}

	async play() {
		const newGame = await this.playGame();
		if (!newGame) {
			return MissionUtils.Console.print(STRINGS.NO_REPLAY);
		}
	}
}
export default App;
