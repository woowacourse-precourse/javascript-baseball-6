import Computer from './Computer.js';
import User from './User.js';

class App {
    constructor() {
        this.computer = new Computer();
        this.user = new User();
    }
    async play() {
        await this.computer.playGame(this.user);
    }
}

export default App;
