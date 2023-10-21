import Baseball from './Baseball.js';
class App {
  async play() {
    const game = new Baseball();
    game.getUserinput().then((input) => console.log(input));
    game.makeRandomNumber();
  }
}
const app = new App();
app.play();
export default App;
