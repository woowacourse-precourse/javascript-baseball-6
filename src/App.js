import { randomNumber } from "./utils/randomNumber.js";
import { inputController } from "./action/inputController.js";

class App {
  async play() {
    randomNumber()
    inputController()
  }
  
}

export default App;
