import NumberBaseballGameController from './Controller/NumberBaseballGameController.js'

class App {
  #numberBaseballGameController = new NumberBaseballGameController()

  async play() {
    await this.#numberBaseballGameController.gameStart()
  }
}

export default App
