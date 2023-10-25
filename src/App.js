import Computer from "./Computer.js";
import User from "./User.js";

class App {
    constructor() {
        this.COMPUTER = new Computer();
        this.USER = new User();
    }
    async play() {
        this.COMPUTER.playGame(this.USER);
    }
}
new App().play();

export default App;
