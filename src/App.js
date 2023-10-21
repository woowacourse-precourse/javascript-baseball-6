import Computer from './Computer.js';
import BaseballGame from './BaseballGame.js';

class App {
    constructor() {
        this.computer = new Computer();
    }

    async play() {
        
    }
}

// 숫자아구 게임 시작
const app = new App();
app.play();

export default App;