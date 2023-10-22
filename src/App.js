import Computer from "./Computer.js";
import User from "./User.js";

class App {
    async play() {
        const USER = new User();
        const RAND_NUM = selectRandNum();
        Computer.playGame(USER);
    }
}

function selectRandNum() {
    Computer.pickRandomNumbers();
    return Computer.numbers;
}

export default App;
