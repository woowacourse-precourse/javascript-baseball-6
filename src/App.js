import NumberBaseBall from './NumberBaseBall';
import { MESSAGE } from './utils/Constants';
BaseBallGame;
class App {
	async play() {
		const baseBallGame = new NumberBaseBall();
		baseBallGame.start(MESSAGE.start);
	}
}

export default App;
