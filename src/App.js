import setThreeGameNumbers from "./unit/input/setThreeGameNumbers.js";


class App {
  async play() {

      const userGameNumbers =  setThreeGameNumbers();


  }
}

const app = new App();
app.play();
export default App;
