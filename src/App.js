import Computer from "./Computer.js";

class App {
    async play() {
        const RAND_NUM = selectRandNum();
    }
}

function selectRandNum() {
    Computer.pickRandomNumbers();
    return Computer.numbers;
}

export default App;
