import NumberBaseBall from './NumberBaseBall';
import { MESSAGE } from './utils/Constants';

class App {
	async play() {
		const baseBallGame = new NumberBaseBall();
		baseBallGame.start(MESSAGE.start);
	}
}

const app = new App();
app.play();
export default App;
