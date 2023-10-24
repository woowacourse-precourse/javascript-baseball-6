class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  opening() {
    this.view.opening();
    return this;
  }

  initGame() {
    this.model.initAnswer();
    return this;
  }
}

export default Controller;
