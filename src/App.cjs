// const GameData = require('./GameData.js');
// const {validationNumbers} = require('./Validation.js');
const {gameStart} = require('./gameStart.cjs');

// import { gameStart } from './gameStart';

class App {
  play() {
    gameStart();
  }
}

const app = new App();
app.play();

// export default App;
module.exports = App;