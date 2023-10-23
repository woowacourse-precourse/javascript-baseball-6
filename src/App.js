import View from './view/View.js'
import Model from './model/Model.js'
import Controller from './controller/Controller.js'

class App {
    async play() {
        const controller = new Controller(new Model(), new View());
        await controller.playGame();
        return
    }
}

const app = new App();
app.play();

export default App;
