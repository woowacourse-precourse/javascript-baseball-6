import { NumberBaseball } from "./NumberBaseball.js";

export class App {
    async play() {
        const game = new NumberBaseball();
        await game.play(); // 게임 시작
    }
}

export default App;
