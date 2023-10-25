import GameManager from "./GameManager";


class App {

  async play() {
    const GAMEMANAGER = new GameManager();
    GAMEMANAGER.gameStart();
    GAMEMANAGER.generateRandomNum();
    GAMEMANAGER.userInput();
    GAMEMANAGER.checkNumber();

}
}

export default App;

