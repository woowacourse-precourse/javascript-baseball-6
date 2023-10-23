import View from './view/View'
import Model from './model/Model'
import Controller from './controller/Controller'

class App {
    async play() {
        const controller = new Controller(new Model(), new View());
        await controller.playGame();
    }
}

const app = new App();
app.play();

export default App;
