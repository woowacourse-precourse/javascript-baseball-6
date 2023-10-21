const Game = require('./Game');

class App {
    play() {
        new Game().start();
    }
}

const app = new App();
app.play();

export default App;