import {gameStart} from "./GameStart.js";
class App {
    async play() {
            let gameEnd = false;
            while (!gameEnd){
                gameEnd = await gameStart();
            }
    }
}

export default App;