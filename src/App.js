import Baseball from './Baseball.js';
class App {
  async play() {
    const game = new Baseball();
    game.getUserinputNumber().then((userinputNumber) => {
      console.log(userinputNumber);
      const gameResult = game.calcGameCount(userinputNumber);
      console.log(gameResult);
      console.log(game.makeGameResultString(gameResult));
    });
  }
}
const app = new App();
app.play();
export default App;
