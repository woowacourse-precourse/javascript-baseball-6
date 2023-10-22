import Computer from "./Computer.js";

class App {
  constructor() {
    this.initComponent();
  }

  initComponent() {
    this.computer = new Computer({
      initialState: [],
    });
  }

  async play() {
    console.log(this.computer.state);
  }
}

export default App;
