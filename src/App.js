import Computer from "./modules/Computer";
import User from "./modules/User";
import Compare from "./controllers/Compare";
import Control from "./controllers/Control";

export default class App {
  constructor() {
    this.isReplaying = true;
    this.computer = new Computer();
    this.user = new User();
    this.compare = new Compare(this.user, this.computer);
    this.control = new Control(this); 
  }

  async play() {
    await this.control.startGame(); 
  }
}

