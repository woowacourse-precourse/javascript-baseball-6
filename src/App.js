import { initGame, playGame, completeGame } from "./game";
import { RESTART_FLAG, QUIT_FLAG } from "./constant";

class App {
  async play() {
    while (true) {
      const answer = await initGame();
      await playGame(answer);
      const restart = await completeGame();

      if (restart === RESTART_FLAG) continue;
      if (restart === QUIT_FLAG) break;
      throw Error(`[ERROR] ${RESTART_FLAG} 또는 ${QUIT_FLAG}를 입력해주세요`);
    }
  }
}

export default App;
