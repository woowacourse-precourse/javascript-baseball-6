import Model from "../Model/Model.js";
import View from "../View/View.js";

class Baseball {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  init() {
    try {
      this.view.printGameStart();
    } catch (err) {
      this.view.printErrorMessage(err.message);
      throw err;
    }
  }
}

const baseball = new Baseball();

export default baseball;
