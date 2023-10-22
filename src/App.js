import pickRandomNumber from "./PickRandom.js";
import getNumber from "./Input.js";
import compareNumber from "./Compare.js";
import SelectStatus from "./SelectStatus.js";

const isValid = (result) => {
  if (result) {
    SelectStatus();
  } else if (!result) {
    game.play();
  }
};

class App {
  constructor() {
    this.answer = pickRandomNumber();
  }
  async play() {
    this.input = await getNumber();
    const result = compareNumber(this.answer, this.input);
    isValid(result);
  }
}

const game = new App();
game.play();

export default App;
