import { GameLifecycleManager } from "./game/index.js";
class App {
  async play() {
    const gameLifecycleManager = new GameLifecycleManager();
    await gameLifecycleManager.manageGameLifecycle();
  }
}

export default App;
