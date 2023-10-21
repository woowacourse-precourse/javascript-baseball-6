import Model from "../Model/Model.js";
import View from "../View/View.js";

class Baseball {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  init() {
    this.view.printGameStart();
  }
}

const baseball = new Baseball();

export default baseball;
