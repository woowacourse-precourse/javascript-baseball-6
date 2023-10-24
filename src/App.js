// src/index.js
const { Console, Random } = require('@woowacourse/mission-utils');
const Game = require('./components/Game');

class App {
  async play() {
    await Game.startGame();
    Console.close();
  }
}

const app = new App();
app.play();
