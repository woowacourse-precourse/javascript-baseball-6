import Game from "./Class/Game"

class App {
    async play() {
        const game = new Game()
        game.welcomeMsg()
        game.playGame()
    }
}

const app = new App()
app.play()

export default App;
